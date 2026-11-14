import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Av<span className="text-red-700">o</span>ra</h2>
          <p className="text-gray-400 text-sm">
            A fine dining experience redefining taste, ambience, and hospitality.
          </p>
        </div>

        {/* Column 2  */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-400">About</Link></li>
            <li><Link to="/menu" className="hover:text-red-400">Menu</Link></li>
            <li><Link to="/apply" className="hover:text-red-400">Apply</Link></li>
          </ul>
        </div>

        {/* Column 3*/}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
            <li><a href="#" className="hover:text-red-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">123 Avora Avenue, Uyo, Nigeria</p>
          <p className="text-gray-400 text-sm mt-2">+234 805 618 5065</p>
          <p className="text-gray-400 text-sm mt-2">avoranigeria@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © 2025 Avora. All rights reserved.
        {/* © {new Date().getFullYear()} Brisa. All rights reserved. */}
      </div>
    </footer>
  );
}
