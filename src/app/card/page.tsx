import React from "react";
import Image from "next/image";

const ShoppingCart = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-50">
      {/* Cart Container */}
      <div className="max-w-4xl mx-auto w-full border p-6 mb-10 shadow-lg bg-white rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Your shopping cart</h2>

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Table Headings */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-gray-500 text-sm font-semibold border-b pb-4 mb-4">
            <span className="col-span-2">Product</span>
            <span className="hidden md:block">Quantity</span>
            <span className="text-right col-span-1">Total</span>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center">
              <div className="flex col-span-2 items-center gap-4 w-[260px]">
                <Image
                  src="/Product Image1 - Copy.jpg"
                  alt="Graystone vase"
                  width={64}
                  height={80}
                  className="rounded-lg"
                  priority
                />
                <div>
                  <h3 className="font-medium">Graystone vase</h3>
                  <p className="text-sm text-gray-500">
                    A timeless ceramic vase with a tri-color grey glaze.
                  </p>
                  <p className="text-left font-semibold">£125</p>
                </div>
              </div>
              <div className="hidden md:block text-center">1</div>
              <p className="text-right font-semibold">£85</p>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center">
              <div className="flex col-span-2 items-center gap-4 w-[260px]">
                <Image
                  src="/Product Image2.jpg"
                  alt="Basic white vase"
                  width={64}
                  height={80}
                  className="rounded-lg"
                  priority
                />
                <div>
                  <h3 className="font-medium">Basic white vase</h3>
                  <p className="text-sm text-gray-500">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="text-left font-semibold">£125</p>
                </div>
              </div>
              <div className="hidden md:block text-center">1</div>
              <p className="text-right font-semibold">£125</p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden space-y-6">
          {/* Item 1 */}
          <div className="flex flex-col gap-4 border-b pb-4">
            <div className="flex items-center gap-4">
              <Image
                src="/Product Image1 - Copy.jpg"
                alt="Graystone vase"
                width={64}
                height={64}
                className="rounded-lg"
                priority
              />
              <div className="flex-1">
                <h3 className="font-medium">Graystone vase</h3>
                <p className="text-sm text-gray-500">
                  A timeless ceramic vase with a tri-color grey glaze.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Quantity: 1</span>
              <p className="font-semibold">£85</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-4 border-b pb-4">
            <div className="flex items-center gap-4">
              <Image
                src="/Product Image2.jpg"
                alt="Basic white vase"
                width={64}
                height={64}
                className="rounded-lg"
                priority
              />
              <div className="flex-1">
                <h3 className="font-medium">Basic white vase</h3>
                <p className="text-sm text-gray-500">
                  Beautiful and simple, this is one for the classics.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Quantity: 1</span>
              <p className="font-semibold">£125</p>
            </div>
          </div>
        </div>

        {/* Subtotal and Checkout */}
        <div className="text-gray-500 lg:flex xm:hidden border-t mt-5"></div>
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold">Subtotal: £210</p>
          <p className="text-sm text-gray-500">
            Taxes and shipping are calculated at checkout.
          </p>
          <button className="mt-4 bg-[#2A254B] text-white py-2 xm:px-14 md:px-4 rounded hover:bg-[#1c1836] transition">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
