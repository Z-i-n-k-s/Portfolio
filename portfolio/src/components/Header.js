import React, { useState, useEffect } from "react";
import DefaultLogo from "./DefaultLogo";
import HoverLogo from "./HoverLogo";
import SideLogo from "./SideLogo";
import Navbar from "./Navbar";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = (e) => {
    e.preventDefault(); // Prevent default behavior on touch
    setIsTouched((prev) => !prev);
  };

  // Reset touch state if user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.logo-container')) {
        setIsTouched(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-20 shadow-xl pt-2 pb-2 flex items-center px-8  ">
      <div className="h-full container mx-auto flex items-center justify-between">
        {/* Logo Section */}

        <div
          className="relative flex items-center logo-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
        >
        

          {(isHovered || isTouched) ? (
            <HoverLogo className="relative z-20 h-[68px]" />
          ) : (
            <DefaultLogo className="relative z-20 h-[68px]" />
          )}
        </div>

        {/* Navbar Section */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
