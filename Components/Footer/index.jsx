import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F0F0F] text-gray-300 px-6 lg:px-25 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 mb-10">
        {/* Home Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Home</h3>
          <ul className="space-y-2 text-sm text-[#999999]">
            <li>
              <Link href="/categories" className="hover:underline">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/devices" className="hover:underline">
                Devices
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Movies Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Movies</h3>
          <ul className="space-y-2 text-sm text-[#999999]">
            <li>
              <Link href="/genres" className="hover:underline">
                Genres
              </Link>
            </li>
            <li>
              <Link href="/trending" className="hover:underline">
                Trending
              </Link>
            </li>
            <li>
              <Link href="/new-release" className="hover:underline">
                New Release
              </Link>
            </li>
            <li>
              <Link href="/popular" className="hover:underline">
                Popular
              </Link>
            </li>
          </ul>
        </div>

        {/* Shows Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Shows</h3>
          <ul className="space-y-2 text-sm text-[#999999]">
            <li>
              <Link href="/shows/genres" className="hover:underline">
                Genres
              </Link>
            </li>
            <li>
              <Link href="/shows/trending" className="hover:underline">
                Trending
              </Link>
            </li>
            <li>
              <Link href="/shows/new" className="hover:underline">
                New Release
              </Link>
            </li>
            <li>
              <Link href="/shows/popular" className="hover:underline">
                Popular
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-[#999999]">
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscription</h3>
          <ul className="space-y-2 text-sm text-[#999999]">
            <li>
              <Link href="/plans" className="hover:underline">
                Plans
              </Link>
            </li>
            <li>
              <Link href="/subscribe" className="hover:underline">
                Subscribe
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-[#262626] p-2 rounded hover:border-red-600 transition"
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-[#262626] p-2 rounded hover:border-red-600 transition"
            >
              <img
                src="/images/twitter.png"
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-[#262626] p-2 rounded hover:border-red-600 transition"
            >
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto border-t border-[#999999] pt-6 flex flex-col md:flex-row justify-between text-xs text-[#999999]">
        <p>©2023 StreamVib, All Rights Reserved</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link href="/terms" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:underline">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
