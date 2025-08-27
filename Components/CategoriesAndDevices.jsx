import React from "react";
import {
  FaMobileAlt,
  FaTabletAlt,
  FaTv,
  FaLaptop,
  FaGamepad,
  FaVrCardboard,
} from "react-icons/fa";

const categories = [
  { name: "Action", image: "/images/categories/action.jpg" },
  { name: "Adventure", image: "/images/categories/adventure.jpg" },
  { name: "Comedy", image: "/images/categories/comedy.jpg" },
  { name: "Drama", image: "/images/categories/drama.jpg" },
  { name: "Horror", image: "/images/categories/horror.jpg" },
];

const devices = [
  { name: "Smartphones", icon: <FaMobileAlt /> },
  { name: "Tablet", icon: <FaTabletAlt /> },
  { name: "Smart TV", icon: <FaTv /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Gaming Consoles", icon: <FaGamepad /> },
  { name: "VR Headsets", icon: <FaVrCardboard /> },
];

const CategoriesAndDevices = () => {
  return (
    <div>
      <div className="px-4 md:pl-20 flex flex-col items-center justify-center text-center py-20  sm:py-28 md:py-32">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          The Best Streaming Experience
        </h1>
        <p className="text-[#999999] mb-6 max-w-[800px] text-sm md:text-base">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5  py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base">
          ▶ Start Watching Now
        </button>
      </div>

      <div className="px-4 md:px-20 py-16 bg-[#1A1A1A] text-white">
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Explore our wide variety of categories
          </h2>
          <p className="text-[#999999] text-sm mb-8">
            Whether you’re looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-lg p-3 flex flex-col items-center hover:bg-[#222] transition"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <span className="text-sm font-semibold">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            We Provide you streaming experience across various devices.
          </h2>
          <p className="text-[#999999] text-sm mb-8 max-w-5xl">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is compatible with a wide range of
            devices.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {devices.map((device, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg flex flex-col items-center text-center hover:bg-[#2a2a2a] transition border border-[#262626]"
              >
                <div className="text-red-600 text-3xl mb-4">{device.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{device.name}</h3>
                <p className="text-xs text-[#999999]">
                  StreamVibe works on all your favorite devices. Get it on your
                  smartphone, tablet, laptop, and even your VR headset!
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#999999] text-sm mb-8 max-w-4xl">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>

          <div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3  py-3 rounded-lg flex items-center justify-center gap-2  ">
              Ask a Question
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoriesAndDevices;
