"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full h-24 sm:px-6 flex px-6 lg:px-26 items-center justify-between bg-[#0F0F0F]/80 backdrop-blur border-b border-[#1F1F1F] z-50">
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
      </Link>

      <div className="hidden md:flex items-center bg-[#0F0F0F] rounded-xl border border-[#1F1F1F] text-white px-8 py-2 space-x-8">
        {[
          { href: "/", label: "Home" },
          { href: "/movies", label: "Movies & Shows" },
          { href: "/support", label: "Support" },
          { href: "/subscriptions", label: "Subscriptions" },
        ].map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="text-[#BFBFBF] hover:text-white transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <IoSearchSharp className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 transition-transform" />

        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F0F0F] border-t border-[#1F1F1F] px-6 py-6 flex flex-col space-y-6 md:hidden">
          {[
            { href: "/", label: "Home" },
            { href: "/movies", label: "Movies & Shows" },
            { href: "/support", label: "Support" },
            { href: "/subscriptions", label: "Subscriptions" },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-[#BFBFBF] hover:text-white transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
