"use client";

import React, { useState, useEffect } from "react";
import {
  FaMobileAlt,
  FaTabletAlt,
  FaTv,
  FaLaptop,
  FaGamepad,
  FaVrCardboard,
} from "react-icons/fa";

const categories = [
  { name: "Action", image: "/images/action.webp" },
  { name: "Adventure", image: "/images/advanture.webp" },
  { name: "Comedy", image: "/images/comedy.png" },
  { name: "Drama", image: "/images/drama.jpg" },
  { name: "Horror", image: "/images/Horror.webp" },
];

const devices = [
  { name: "Smartphones", icon: <FaMobileAlt /> },
  { name: "Tablet", icon: <FaTabletAlt /> },
  { name: "Smart TV", icon: <FaTv /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Gaming Consoles", icon: <FaGamepad /> },
  { name: "VR Headsets", icon: <FaVrCardboard /> },
];

const faqs = [
  {
    number: "01",
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    number: "02",
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers several pricing plans based on your preferences. Visit our pricing page for more info.",
  },
  {
    number: "03",
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe offers a wide range of content, including movies, TV shows, documentaries, and more.",
  },
  {
    number: "04",
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe on your phone, tablet, laptop, smart TV, or other supported devices.",
  },
  {
    number: "05",
    question: "How do I sign up for StreamVibe?",
    answer:
      "To sign up, visit our website, click on 'Sign Up', and follow the instructions.",
  },
  {
    number: "06",
    question: "What is the StreamVibe free trial?",
    answer:
      "We offer a 7-day free trial so you can explore our features before committing to a subscription.",
  },
  {
    number: "07",
    question: "How do I contact StreamVibe customer support?",
    answer:
      "You can contact our support team via email or live chat on our website.",
  },
  {
    number: "08",
    question: "What are the StreamVibe payment methods?",
    answer:
      "We accept all major credit cards, PayPal, and other popular payment methods.",
  },
];

const plans = [
  {
    title: "Basic Plan",
    monthlyPrice: 9.99,
    yearlyPrice: 119.88,
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
  },
  {
    title: "Standard Plan",
    monthlyPrice: 12.99,
    yearlyPrice: 155.88,
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
  },
  {
    title: "Premium Plan",
    monthlyPrice: 14.99,
    yearlyPrice: 179.88,
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
  },
];

const CategoriesAndDevices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [billing, setBilling] = useState("Monthly");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!hasMounted) return null;

  return (
    <div>
      <div
        className="w-screen h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/Sub.png')",
        }}
      >
        <div className="px-6 lg:px-12 py-20 flex flex-col items-center justify-center text-center sm:py-24 md:py-20 space-y-4">
          <h1 className="text-white text-2xl mt-80 lg:text-5xl font-bold">
            The Best Streaming Experience
          </h1>
          <p className="text-[#999999] max-w-[700px] text-xs md:text-sm">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold sm:px-6 sm:py-4 px-4 py-4 rounded-lg text-xs sm:text-sm">
            ▶ Start Watching Now
          </button>
        </div>
      </div>

      <div className="px-6 lg:px-25 py-16 bg-[#1A1A1A] text-white">
        <section className="mb-28">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Explore our wide variety of categories
          </h2>
          <p className="text-[#999999] text-lg mb-10">
            Whether you’re looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-[#111] rounded-lg p-6 flex flex-col items-center transition"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-55 object-cover rounded-lg mb-4"
                />
                <span className="text-lg font-semibold">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            We Provide you streaming experience across various devices.
          </h2>
          <p className="text-[#999999] text-lg mb-10 max-w-5xl">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is compatible with a wide range of
            devices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devices.map((device) => (
              <div
                key={device.name}
                className="bg-[#1A1A1A] p-8 rounded-lg flex flex-col items-center text-center hover:bg-[#2a2a2a] transition border border-[#262626]"
              >
                <div className="text-red-600 text-5xl mb-6">{device.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{device.name}</h3>
                <p className="text-lg text-[#999999]">
                  StreamVibe works on all your favorite devices. Get it on your
                  smartphone, tablet, laptop, and even your VR headset!
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mt-28">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-[#999999] text-lg mb-10 max-w-4xl">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>

          <div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 rounded-lg text-xl mb-12">
              Ask a Question
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={faq.number}
                className="border-t border-[#660000] py-6 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-[#262626] border border-[#333333] w-16 h-16 rounded-md flex items-center justify-center text-white text-2xl">
                      {faq.number}
                    </div>
                    <p className="text-xl font-medium">{faq.question}</p>
                  </div>
                  <div className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </div>
                </div>
                {activeIndex === index && (
                  <p className="text-[#999999] text-lg mt-6 pl-14">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-white py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Choose the plan that’s right for you
              </h2>
              <p className="text-[#999999] text-lg max-w-xl">
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </p>
            </div>
            <div className="flex items-center mt-8 md:mt-0 border border-[#333] rounded-lg overflow-hidden">
              <button
                onClick={() => setBilling("Monthly")}
                className={`px-6 py-3 m-3 rounded-md text-lg font-medium ${
                  billing === "Monthly"
                    ? "bg-[#333333] text-[#FFFFFF]"
                    : "bg-transparent text-[#999999]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("Yearly")}
                className={`px-6 py-3 m-3 text-lg rounded-md font-medium ${
                  billing === "Yearly"
                    ? "bg-[#333333] text-[#FFFFFF]"
                    : "bg-transparent text-[#999999]"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="bg-[#1A1A1A] rounded-xl p-8 flex flex-col justify-between transition hover:shadow-2xl border border-[#262626]"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-6">{plan.title}</h3>
                  <p className="text-[#999999] text-lg mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold mb-3">
                      $
                      {billing === "Monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                    </div>
                    <span className="text-lg text-[#999999]">
                      /{billing === "Monthly" ? "month" : "year"}
                    </span>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="w-full bg-[#1F1F1F] hover:bg-[#333333] text-white px-6 py-3 rounded-lg border border-[#333]">
                    Start Free Trial
                  </button>
                  <button className="w-full bg-red-600 hover:bg-red-700 mt-5 text-white px-8 py-3 rounded-lg font-semibold">
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="relative bg-cover bg-center bg-no-repeat py-20 px-10 rounded-lg items-center justify-between max-w-7xl mx-auto border-1 border-[#262626]"
          style={{
            backgroundImage: "url('/images/Sub.png')",
            minHeight: "300px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

          <div className="relative max-w-4xl text-white">
            <h2 className="text-4xl font-bold mb-6">
              Start your free trial today!
            </h2>
            <p className="text-lg text-[#999999] max-w-3xl">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <button className="relative bg-red-600 mt-8 hover:bg-red-700 text-white font-semibold px-6 py-3 text-xl rounded-md shadow-lg transition">
            Start a Free Trial
          </button>
        </section>
      </div>
    </div>
  );
};

export default CategoriesAndDevices;
