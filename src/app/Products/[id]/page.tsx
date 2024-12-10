"use client";
import React from "react";
import { useParams } from "next/navigation"; // Correct import for Next.js 13 with App Router
import Image from "next/image"; // Import Image from Next.js

const ProductDetail: React.FC = () => {
  const { id } = useParams(); // Use useParams to get the dynamic route parameter

  // Dummy product data (replace with actual API or data fetching logic)
  const products = [
    {
      id: "1",
      image: "/Photo.jpg",
      title: "The Dandy Chair",
      price: "£250",
      description:
        "A timeless design, with premium materials features as one of our most popular and iconic pieces. The Dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
      features: ["Premium material", "Handmade upholstery", "Timeless classic"],
      dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
    },
    {
      id: "2",
      image: "/Photo2.jpg",
      title: "The Dandy Chair",
      price: "£250",
      description:
        "A timeless design, with premium materials features as one of our most popular and iconic pieces. The Dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
      features: ["Premium material", "Handmade upholstery", "Timeless classic"],
      dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
    },
    // Add other product details here
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto w-full border p-6 mb-10 bg-gray-50 items-center justify-center ">
        <div className="bg-white shadow-lg rounded-lg max-w-7xl w-full flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={600} // Set width for Image
              height={600} // Set height for Image
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-lg md:text-xl font-semibold text-gray-600 mb-4">
              {product.price}
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-6">
              {product.description}
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6 text-sm md:text-base">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="mb-6">
              <h2 className="text-gray-800 font-medium mb-2">Dimensions</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="text-gray-600 block text-sm md:text-base">
                    Height:
                  </span>
                  <p className="text-gray-800">{product.dimensions.height}</p>
                </div>
                <div>
                  <span className="text-gray-600 block text-sm md:text-base">
                    Width:
                  </span>
                  <p className="text-gray-800">{product.dimensions.width}</p>
                </div>
                <div>
                  <span className="text-gray-600 block text-sm md:text-base">
                    Depth:
                  </span>
                  <p className="text-gray-800">{product.dimensions.depth}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="amount"
                  className="text-gray-600 text-sm md:text-base"
                >
                  Quantity:
                </label>
                <div className="flex items-center h-[46px] bg-gray-100 rounded-md">
                  <button className="text-gray-700 px-4 focus:outline-none">
                    -
                  </button>
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-10 text-center text-gray-700 bg-transparent border-none focus:outline-none"
                  />
                  <button className="text-gray-700 px-4 focus:outline-none">
                    +
                  </button>
                </div>
              </div>
              <button className="w-full md:w-auto bg-[#2A254B] text-white py-3 px-6 rounded hover:bg-[#3b327a]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
