"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/movies", label: "Movies & Shows" },
    { href: "/support", label: "Support" },
    { href: "/subscriptions", label: "Subscriptions" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-24 sm:px-6 flex px-6 lg:px-26 items-center justify-between bg-[#0F0F0F]/80 backdrop-blur border-b border-[#1F1F1F] z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center bg-[#0F0F0F] rounded-xl border border-[#1F1F1F] text-white px-4 py-2 space-x-2">
        {links.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={idx}
              href={link.href}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                isActive
                  ? "bg-[#1A1A1A] border border-[#333333] text-white"
                  : "text-[#BFBFBF] hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <IoSearchSharp className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 transition-transform" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F0F0F] border-t border-[#1F1F1F] px-6 py-6 flex flex-col space-y-4 md:hidden">
          {links.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={idx}
                href={link.href}
                onClick={toggleMenu}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-[#141414] text-white"
                    : "text-[#BFBFBF] hover:text-white hover:bg-[#1A1A1A]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
