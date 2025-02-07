"use client";
import React from "react";
import { useState } from "react";

const sortfilter: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  return (
    <div>
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
    </div>
  );
};

export default sortfilter;
