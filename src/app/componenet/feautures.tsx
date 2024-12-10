import React from "react";

const Abbu: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Brand Features Section */}
      <div className="py-12 px-4 lg:px-20 text-center">
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-8">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🚚",
              title: "Next day as standard",
              description:
                "Order before 3pm and get your order the next day as standard",
            },
            {
              icon: "🎨",
              title: "Made by true artisans",
              description:
                "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              icon: "💸",
              title: "Unbeatable prices",
              description:
                "For our materials and quality you won’t find better prices anywhere",
            },
            {
              icon: "♻️",
              title: "Recycled packaging",
              description:
                "We use 100% recycled to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div
                className="text-3xl mb-4"
                aria-label={item.title} // Added for better accessibility
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Abbu;
