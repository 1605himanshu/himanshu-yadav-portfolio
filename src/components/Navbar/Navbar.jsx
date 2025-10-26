import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/1605himanshu" },
    { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/himanshu-yadav-2a564a241/" },
    { icon: <SiLeetcode size={24} />, url: "https://leetcode.com/u/hy__lucifer/" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer
  // Replace your Section observer useEffect with this
useEffect(() => {
  const handleScroll = () => {
    let closestSection = "";
    let minDistance = Infinity;

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        const distance = Math.abs(section.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = item.id;
        }
      }
    });

    setActiveSection(closestSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // call once to set initial section

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // Smooth scroll
  const scrollToSection = useCallback((id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-6 md:px-10 lg:px-20 ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex items-center justify-between">
        {/* Logo Left */}
        <div className=" font-semibold cursor-pointer select-none">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Himanshu</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Yadav</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Menu Center */}
        <ul className="hidden md:flex space-x-12 text-gray-300 absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => scrollToSection(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Social Right */}
        <div className="hidden md:flex mr-6 space-x-8">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-md z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => scrollToSection(item.id)}>{item.label}</button>
              </li>
            ))}
            <div className="flex space-x-6 mt-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
