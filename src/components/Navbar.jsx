import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = ({
  onClickProjects,
  onClickServices,
  onClickSkills,
  onClickExperience,
  onClickAbout,
  onClickContact,
  onClickResume,
  activeSection = "about",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftItems = [
    { id: "projects", label: "Projects", action: onClickProjects },
    { id: "services", label: "Services", action: onClickServices },
    { id: "skills", label: "Toolkit", action: onClickSkills },
    { id: "experience", label: "Journey", action: onClickExperience },
  ];

  const rightItems = [
    { id: "about", label: "About", action: onClickAbout },
    { id: "contact", label: "Contact", action: onClickContact },
    {
      id: "resume",
      label: "Resume",
      action: onClickResume,
      hasArrow: true,
    },
  ];

  const allItems = [...leftItems, ...rightItems];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f0e8]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-[#e0dbd1]/80 py-3.5"
          : "bg-[#f5f0e8] py-5 md:py-6"
      }`}
    >
      {/* Desktop Nav */}
      <div className="max-w-[1240px] mx-auto px-6 hidden md:flex items-center justify-between">
        {/* Left items */}
        <div className="flex items-center gap-7 lg:gap-9">
          {leftItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="group relative py-1 cursor-pointer transition-colors duration-200 text-left"
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#1a1a1a" : "#555",
                    letterSpacing: "0.02em",
                  }}
                  className="group-hover:text-[#d4772c] transition-colors"
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4772c] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Center Logo: ABHISHEK MADOLIYA */}
        <button
          onClick={onClickAbout}
          className="cursor-pointer select-none text-center group"
          style={{ lineHeight: 1 }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "26px",
              fontWeight: 400,
              color: "#1a1a1a",
              fontStyle: "italic",
            }}
            className="group-hover:opacity-85 transition-opacity"
          >
            ABHISHEK
          </span>
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "26px",
              fontWeight: 400,
              color: "#d4772c",
              fontStyle: "italic",
              marginLeft: "4px",
            }}
          >
            MADOLIYA
          </span>
        </button>

        {/* Right items */}
        <div className="flex items-center gap-7 lg:gap-9">
          {rightItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="group relative py-1 cursor-pointer transition-colors duration-200 inline-flex items-center"
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#1a1a1a" : "#555",
                    letterSpacing: "0.02em",
                  }}
                  className="group-hover:text-[#d4772c] transition-colors inline-flex items-center"
                >
                  {item.label}
                  {item.hasArrow && (
                    <ArrowUpRight
                      size={14}
                      className="ml-1 text-[#d4772c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  )}
                </span>
                {isActive && !item.hasArrow && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4772c] rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Nav Header */}
      <div className="md:hidden flex items-center justify-between px-6">
        <button
          className="select-none text-left cursor-pointer"
          onClick={onClickAbout}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "22px",
              color: "#1a1a1a",
              fontStyle: "italic",
            }}
          >
            A
          </span>
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "22px",
              color: "#d4772c",
              fontStyle: "italic",
              marginLeft: "1px",
            }}
          >
            M
          </span>
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "15px",
              color: "#777",
              marginLeft: "8px",
            }}
          >
            Abhishek Madoliya
          </span>
        </button>

        <button
          className="p-2 text-[#1a1a1a] hover:text-[#d4772c] transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#f5f0e8] border-b border-[#e0dbd1] shadow-lg`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 px-6">
          {allItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                className="w-full text-center"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    item.action?.();
                  }}
                  className={`w-full py-2 text-base transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#d4772c] font-semibold"
                      : "text-[#4a4a4a] hover:text-[#1a1a1a]"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="inline-flex items-center justify-center">
                    {item.label}
                    {item.hasArrow && (
                      <ArrowUpRight size={14} className="ml-1 text-[#d4772c]" />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
