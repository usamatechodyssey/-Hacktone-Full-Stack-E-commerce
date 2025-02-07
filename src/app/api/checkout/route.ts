// pages/api/checkout.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Shippo } from "shippo";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const shippo = new Shippo({
  apiKeyHeader: `ShippoToken ${process.env.SHIPPO_API_KEY}`,
  shippoApiVersion: "2018-02-08",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { products, clerkUserId, shippingInfo } = body;

    if (!products?.length || !shippingInfo || !clerkUserId) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    // Calculate shipping rates using Shippo (custom values for now)
    const shippingRates = await shippo.shipments.create({
      addressFrom: {
        name: "Your Store",
        street1: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94107",
        country: "US",
      },
      addressTo: {
        name: shippingInfo.name,
        street1: shippingInfo.address,
        city: shippingInfo.city,
        state: shippingInfo.state,
        zip: shippingInfo.zip,
        country: shippingInfo.country,
      },
      parcels: [
        {
          length: "10",
          width: "8",
          height: "4",
          distanceUnit: "in",
          weight: "2",
          massUnit: "lb",
        },
      ],
      async: false,
    });

    // For now, use a custom shipping rate
    const shippingRate = 10; // Replace with actual shipping rate from Shippo

    const lineItems = products.map((product: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          images: [product.imageurl.url],
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
      metadata: {
        clerkUserId, // Include the Clerk user ID in metadata
        shippingInfo: JSON.stringify(shippingInfo),
        products: JSON.stringify(
          products.map((product: any) => ({
            _id: product._id,
            name: product.name,
            quantity: product.quantity,
            price: product.price,
            weight: product.weight || 1,
            imageRef: product.imageurl._id,
          }))
        ),
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingRate * 100,
              currency: "usd",
            },
            display_name: "Standard Shipping",
          },
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Checkout Error:", error);
    return NextResponse.json(
      { error: error.message || "Checkout failed" },
      { status: 500 }
    );
  }
}