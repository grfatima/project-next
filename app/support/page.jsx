"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const Support = () => {
  // State for inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  // Refs for focus shifting
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  // Change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Enter -> go to next field
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef?.current) {
        nextRef.current.focus();
      }
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message, agree } = formData;

    // Minimum uzunluqlar
    if (firstName.length < 5) {
      alert("First name must be at least 5 characters long.");
      return;
    }

    if (lastName.length < 6) {
      alert("Last name must be at least 6 characters long.");
      return;
    }

    // Telefon nömrəsi yalnız rəqəmlərdən ibarət olmalıdır
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must contain only digits.");
      return;
    }

    // Gmail formatı yoxlanılır
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      alert("Email must be in a valid Gmail format (example@gmail.com).");
      return;
    }

    // Mesaj dolu olmalıdır
    if (!message) {
      alert("Please enter your message.");
      return;
    }

    // Checkbox yoxlanılır
    if (!agree) {
      alert(
        "Please agree to the Terms of Use and Privacy Policy before submitting."
      );
      return;
    }

    // Əgər hamısı düzgündürsə, form backendə göndərilir
    console.log("Form data:", formData);

    // Form sıfırlanır
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });
  };

  return (
    <main className="bg-[#141414] text-white px-6 lg:px-10 py-16 space-y-20">
      {/* Section 1 */}
      <section className="lg:px-16 px-10 py-10 mx-auto flex mt-10 flex-col space-y-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-left">
          Welcome to our support page!
        </h1>
        <p className="text-[#999999] max-w-2xl text-left">
          We’re here to help you with any problems you may be having with our
          product.
        </p>

        <div className="relative w-full h-auto rounded-xl overflow-hidden">
          <Image
            src="/images/logo/Sub.png"
            alt="Movies grid"
            width={1200}
            height={600}
            className="object-contain rounded-xl w-full h-auto"
          />
        </div>
      </section>

      {/* Section 2 - Form */}
      <section
        id="contact"
        className="bg-[#141414] border border-[#262626]  rounded-lg px-10 lg:mx-16 py-20 mx-auto"
      >
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 space-y-10 "
          onSubmit={handleSubmit}
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-2">First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
              className="bg-[#141414] cursor-pointer border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-2">Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              ref={lastNameRef}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
              className="bg-[#141414] cursor-pointer border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={formData.email}
              ref={emailRef}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, phoneRef)}
              className="bg-[#141414] cursor-pointer border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm mb-2">Phone Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="Enter Phone Number"
              value={formData.phone}
              ref={phoneRef}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, messageRef)}
              className="bg-[#141414] border cursor-pointer border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col lg:col-span-2">
            <label className="text-sm mb-2 ">Message</label>
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="5"
              value={formData.message}
              ref={messageRef}
              onChange={handleChange}
              className="bg-[#141414] border cursor-pointer border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Checkbox + Button */}
          <div className="flex items-center space-x-3 lg:col-span-2 ">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-5 h-5 cursor-pointer"
            />
            <span className="text-sm text-[#999999]">
              I agree with Terms of Use and Privacy Policy
            </span>
          </div>

          <div className="lg:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-red-600 cursor-pointer hover:bg-red-700 transition text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Free Trial Section */}
      <div className=" px-9 lg:px-16 mt-20">
        <section
          className="relative bg-cover bg-center bg-no-repeat py-20 px-10 rounded-lg items-center justify-between max-w-7xl mx-auto border-1 border-[#262626]"
          style={{
            backgroundImage: "url('/images/logo/Sub.png')",
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
          <button className="relative cursor-pointer bg-red-600 mt-8 hover:bg-red-700 text-white font-semibold px-6 py-3 text-xl rounded-md shadow-lg transition">
            Start a Free Trial
          </button>
        </section>
      </div>
    </main>
  );
};

export default Support;
