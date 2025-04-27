import React, { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaTools,
  FaUser,
  FaPhone,
  FaBars,
  FaTimes,
  FaHome
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>

      <div className="fixed top-4 right-4 z-[10000] text-white md:hidden">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

 
      <div
        className={`group fixed top-16 md:top-1/2 md:-translate-y-1/2 right-0 h-fit w-16 backdrop-blur-md border border-white shadow-gray-600 text-white flex flex-col items-center py-8 mr-5 shadow-lg rounded-3xl z-[9999] space-y-12 transition-all duration-300 overflow-hidden
        ${isOpen ? "w-56" : "md:hover:w-56"} 
        ${isOpen ? "flex" : "hidden md:flex"}`}
      >

        <SidebarIcon icon={<FaHome size="25" />} name="Home" link="#home-section" isOpen={isOpen} isMobile={isMobile} />
        <SidebarIcon icon={<FaTools size="25" />} name="Skills" link="#skills-section" isOpen={isOpen} isMobile={isMobile} />
        <SidebarIcon icon={<FaBriefcase size="25" />} name="Work" link="#work-section" isOpen={isOpen} isMobile={isMobile} />
        <SidebarIcon icon={<FaUser size="25" />} name="About Me" link="#about-section" isOpen={isOpen} isMobile={isMobile} />
        <SidebarIcon icon={<FaPhone size="25" />} name="Contact" link="#contact-section" isOpen={isOpen} isMobile={isMobile} />
      </div>
    </>
  );
};


const SidebarIcon = ({ icon, name, link, isOpen, isMobile }) => {
  const handleClick = (e) => {
    e.preventDefault(); // prevent default anchor behavior
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className="flex items-center w-full px-4 cursor-pointer group transition-all duration-300"
    >
      <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      <span
        className={`ml-4 text-white text-lg font-medium whitespace-nowrap overflow-hidden transition-all duration-300 
        ${isMobile
            ? isOpen
              ? "opacity-100"
              : "opacity-0"
            : "group-hover:opacity-100 opacity-0"
          }`}
      >
        {name}
      </span>
    </a>
  );
};


export default Sidebar;
