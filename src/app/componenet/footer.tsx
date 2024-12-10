import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-medium text-lg">Menu</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="font-medium text-lg">Categories</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="font-medium text-lg">Our company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="w-full max-w-md">
            <h3 className="text-sm font-medium text-white mb-2">
              Join our mailing list
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow px-4 py-2 rounded-l-md bg-purple-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-purple-900 font-medium rounded-r-md hover:bg-gray-100"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center text-sm border-t border-gray-700 pt-4">
          {/* Left Section */}
          <p>Copyright © 2022 Avion LTD</p>
          {/* Right Section */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="hover:text-gray-300" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Pinterest"
            >
              <i className="fab fa-pinterest"></i>
            </Link>
            <Link href="#" className="hover:text-gray-300" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
