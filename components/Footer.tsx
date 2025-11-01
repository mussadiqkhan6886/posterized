import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* === About Us Section === */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            We’re passionate about transforming blank walls into inspiring art spaces.
            Every poster is designed to spark creativity, add personality, and make
            your home truly yours.
          </p>
        </div>

        {/* === Gift Card Section === */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Gift Cards</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            A fun and thoughtful choice for art and home decor lovers! Our digital
            gift cards are emailed to you in a printable format, making it the perfect
            last-minute gift!
          </p>
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
            Get a Gift Card
          </button>
        </div>

        {/* === Socials / Newsletter === */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-300 mb-4">
            Follow us for design ideas, exclusive offers, and new arrivals.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Posterized. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
