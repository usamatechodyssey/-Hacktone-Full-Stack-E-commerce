import React from "react";

const NewsletterForm = () => {
  return (
    <section className="bg-cover bg-center h-[400px] relative">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/sectionpapa.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-screen-md mx-auto px-4 pt-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Join the club and get the benefits
        </h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pre-shop events, and more.
        </p>

        {/* List of benefits */}
        <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 text-white mb-6 mt-6">
          <li className="flex items-center space-x-2">
            <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm md:text-base">Exclusive offers</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm md:text-base">Free events</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm md:text-base">Large discounts</span>
          </li>
        </ul>

        {/* Newsletter form */}
        <form className="mt-6 flex flex-col xm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="p-2 w-full xm:w-[70%] lg:w-[50%] md:w-[60%] text-black rounded-md focus:outline-none"
          />
          <button className="p-2 mt-4 xm:mt-0 w-full xm:w-auto bg-[#2A254B] text-white hover:bg-[#3b327a] rounded-md">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;
