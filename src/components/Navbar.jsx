import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold hover:cursor-pointer bg-gradient-to-r from-[#C94CA6] to-[#6A5ACD] bg-clip-text text-transparent">
          Abhishek Madoliya
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {["Projects", "About", "Contact"].map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              {item}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-[#C94CA6] to-[#6A5ACD] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-gray-300">
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
            {["Projects", "About", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-white cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
