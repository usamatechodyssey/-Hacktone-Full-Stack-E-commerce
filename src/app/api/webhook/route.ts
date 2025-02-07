// pages/api/webhook.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { client } from "@/sanity/lib/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const productsData = JSON.parse(session.metadata?.products || "[]");
      const shippingInfo = JSON.parse(session.metadata?.shippingInfo || "{}");
      const clerkUserId = session.metadata?.clerkUserId; // Extract the Clerk user ID

      // Validate products data
      const validProducts = productsData.filter((p: any) => p.imageRef);

      await client.create({
        _type: "order",
        orderId: session.id,
        clerkUserId, // Save the Clerk user ID
        products: validProducts.map((product: any) => ({
          productId: product._id,
          name: product.name,
          quantity: product.quantity,
          price: product.price,
          image: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: product.imageRef,
            },
          },
        })),
        shippingInfo,
        totalAmount: session.amount_total ? session.amount_total / 100 : 0,
        status: "paid",
        createdAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Webhook Error:", error);
    return NextResponse.json(
      { error: error.message || "Webhook failed" },
      { status: 500 }
    );
  }
}