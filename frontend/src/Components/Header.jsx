import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Our Logo" className="w-20 h-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/menu", label: "Menu" },
            { to: "/private-dining", label: "Private Dining" },
            { to: "/reservation", label: "Reservation" },
            { to: "/contact", label: "Contact" },
            { to: "/apply", label: "Apply" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 border-b-2 border-red-500 pb-1"
                  : "hover:text-red-500 transition"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Socials + Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://web.facebook.com/ubong.umorok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-red-500 cursor-pointer text-lg" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-red-500 cursor-pointer text-lg" />
          </a>

          <Link to="/reservation">
            <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-red-500 hover:text-white transition">
              Book a Table
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <FaTimes className="text-2x1 " />
            ) : (
              <FaBars className="text-2x1 " />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 border-t border-gray-700">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/menu", label: "Menu" },
            { to: "/private-dining", label: "Private Dining" },
            { to: "/reservation", label: "Reservation" },
            { to: "/contact", label: "Contact" },
            { to: "/apply", label: "Apply" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-red-500 font-semibold"
                  : "block hover:text-red-500"
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Socials + Book Button for Mobile */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/ubong.umorok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-red-500 cursor-pointer text-lg" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-red-500 cursor-pointer text-lg" />
              </a>
            </div>

            <Link to="/reservation">
              <button
                onClick={() => setMenuOpen(false)}
                className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-red-500 hover:text-white transition"
              >
                Book a Table
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
