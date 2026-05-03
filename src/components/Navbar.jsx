import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ onClick, onClickAbout, onClickContact, onClickSkills, onClickExperience }) => {
  const [isOpen, setIsOpen] = useState(false);

  // All nav items in exact order matching reference: Works About [LOGO] Gallery Resume↗
  // Adapted: Projects About [AM] Contact Resume↗
  const allItems = [
    { label: "Projects", action: onClick, position: "left" },
    { label: "Skills", action: onClickSkills, position: "left" },
    { label: "Experience", action: onClickExperience, position: "left" },
    { label: "About", action: onClickAbout, position: "right" },
    { label: "Contact", action: onClickContact, position: "right" },
    {
      label: "Resume",
      action: () =>
        window.open(
          "https://docs.google.com/document/d/1sh3prDiykcmYL0LLwXZNYbQcyoXgKeHi2umn5qfGJsA/edit?usp=sharing",
          "_blank"
        ),
      position: "right",
      hasArrow: true,
    },
  ];

  const leftItems = allItems.filter((i) => i.position === "left");
  const rightItems = allItems.filter((i) => i.position === "right");

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      {/* Desktop Nav — single centered row */}
      <div className="hidden md:flex items-center justify-center py-6 gap-16 lg:gap-24">
        {/* Left links */}
        {leftItems.map((item, i) => (
          <span
            key={`l-${i}`}
            onClick={item.action}
            className="cursor-pointer transition-colors duration-200 hover:text-[#1a1a1a]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#4a4a4a",
              letterSpacing: "0.02em",
            }}
          >
            {item.label}
          </span>
        ))}

        {/* Center Logo: A (dark) M (orange) — matching JD style */}
        <span
          onClick={onClickAbout}
          className="cursor-pointer select-none"
          style={{ lineHeight: 1 }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "28px",
              fontWeight: 400,
              color: "#1a1a1a",
              fontStyle: "italic",
            }}
          >
            ABHISHEK
          </span>
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "28px",
              fontWeight: 400,
              color: "#d4772c",
              fontStyle: "italic",
              marginLeft: "2px",
            }}
          >
            MADOLIYA
          </span>
        </span>

        {/* Right links */}
        {rightItems.map((item, i) => (
          <span
            key={`r-${i}`}
            onClick={item.action}
            className="cursor-pointer transition-colors duration-200 hover:text-[#1a1a1a] inline-flex items-center"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#4a4a4a",
              letterSpacing: "0.02em",
            }}
          >
            {item.label}
            {item.hasArrow && (
              <span style={{ marginLeft: "4px", fontSize: "13px" }}>↗</span>
            )}
          </span>
        ))}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center justify-between px-6 py-5">
        {/* Mobile Logo */}
        <span className="select-none" onClick={onClickAbout}>
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "24px",
              color: "#1a1a1a",
              fontStyle: "italic",
            }}
          >
            A
          </span>
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "24px",
              color: "#d4772c",
              fontStyle: "italic",
              marginLeft: "1px",
            }}
          >
            M
          </span>
        </span>

        <button
          className="text-[#3a3a3a]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        style={{ backgroundColor: "#f5f0e8" }}
      >
        <div className="border-t border-[#e0dbd1]">
          <ul className="flex flex-col items-center gap-5 py-7">
            {allItems.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-colors duration-200 hover:text-[#1a1a1a]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  color: "#4a4a4a",
                }}
                onClick={() => {
                  setIsOpen(false);
                  item.action?.();
                }}
              >
                {item.label}
                {item.hasArrow && (
                  <span style={{ marginLeft: "4px", fontSize: "13px" }}>↗</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
