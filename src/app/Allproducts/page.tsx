"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Product from "../componenet/prohome";

const Banner: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  return (
    <div>
      <div className="relative w-full h-48 sm:h-64 md:h-50 lg:h-60 xl:h-[18rem]">
        {/* Background Image */}
        <Image
          src="/screen.png" // Image path (public folder mein hona chahiye)
          alt="All Products Banner"
          layout="fill" // Puri space ko cover karega
          quality={100}
          objectFit="cover" // Image full dikhegi bina cut kiye
          priority // Faster loading ke liye
        />
        {/* Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center xm:justify-center md:justify-start md:px-24 md:mt-36">
          <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl ">
            All Products
          </h1>
        </div>
      </div>
      <div className="px-4 py-4 border-t border-b border-gray-300 text-gray-800 text-sm">
        {/* Mobile View */}
        <div className="flex justify-between items-center sm:hidden">
          {/* Filters Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-100 px-4 py-2 rounded-md"
          >
            Filters ▼
          </button>

          {/* Sorting Button */}
          <button
            onClick={() => setShowSorting(!showSorting)}
            className="bg-gray-100 px-4 py-2 rounded-md"
          >
            Sorting ▼
          </button>
        </div>

        {/* Filters Dropdown */}
        {showFilters && (
          <div className="mt-4 space-y-2 sm:hidden">
            <div>
              <span>Category:</span>
              <select className="block w-full border p-2 rounded">
                <option>All</option>
              </select>
            </div>
            <div>
              <span>Product Type:</span>
              <select className="block w-full border p-2 rounded">
                <option>All</option>
              </select>
            </div>
            <div>
              <span>Price:</span>
              <select className="block w-full border p-2 rounded">
                <option>Low to High</option>
              </select>
            </div>
            <div>
              <span>Brand:</span>
              <select className="block w-full border p-2 rounded">
                <option>All</option>
              </select>
            </div>
          </div>
        )}

        {/* Sorting Dropdown */}
        {showSorting && (
          <div className="mt-4 sm:hidden">
            <span>Sorting by:</span>
            <select className="block w-full border p-2 rounded">
              <option>Date added</option>
            </select>
          </div>
        )}

        {/* Desktop View */}
        <div className="hidden sm:flex justify-between items-center">
          <div className="flex items-center space-x-6">
            {/* Category */}
            <div className="flex items-center space-x-1">
              <span>Category</span>
              <select className="border-none bg-transparent outline-none cursor-pointer">
                <option>All</option>
              </select>
            </div>

            {/* Product Type */}
            <div className="flex items-center space-x-1">
              <span>Product type</span>
              <select className="border-none bg-transparent outline-none cursor-pointer">
                <option>All</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-1">
              <span>Price</span>
              <select className="border-none bg-transparent outline-none cursor-pointer">
                <option>Low to High</option>
              </select>
            </div>

            {/* Brand */}
            <div className="flex items-center space-x-1">
              <span>Brand</span>
              <select className="border-none bg-transparent outline-none cursor-pointer">
                <option>All</option>
              </select>
            </div>
          </div>

          {/* Sorting */}
          <div className="flex items-center space-x-1">
            <span>Sorting by:</span>
            <select className="border-none bg-transparent outline-none cursor-pointer">
              <option>Date added</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-8">
        <Product />
        <Product />
        <div className="flex justify-center lg:justify-start">
          <button className="h-[56px] bg-[#F9F9F9] px-6 xm:px-20 py-2 text-sm rounded hover:bg-gray-200 transition font-satoshi">
            View collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
