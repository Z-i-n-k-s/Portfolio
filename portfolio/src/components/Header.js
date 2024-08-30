import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLogo from "./DefaultLogo";
import HoverLogo from "./HoverLogo";
import Navbar from "./Navbar";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleLogoClick = () => {
    setIsDrawerOpen(false);
    navigate("/", { state: { scrollToTop: true } }); // Optionally, add scrollToTop in state
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsTouched((prev) => !prev);
    handleLogoClick();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".logo-container")) {
        setIsTouched(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isDrawerOpen]);

  return (
    <div>
      <header
        className={`flex ${
          isDrawerOpen ? "translate-y-0" : show ? "translate-y-0" : "-translate-y-28"
        } ${
          shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""
        } transition-transform duration-500 ease-in-out fixed w-full h-24 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20 bg-white z-30`}
      >
        <div className="h-full container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="relative flex items-center logo-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onClick={handleLogoClick}
          >
            {isHovered || isTouched ? (
              <HoverLogo className="relative z-20 h-[68px]" />
            ) : (
              <DefaultLogo className="relative z-20 h-[68px]" />
            )}
          </div>

          {/* Navbar Section */}
          <Navbar
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
            closeDrawer={() => setIsDrawerOpen(false)}
            navigateTo={(section) => {
              navigate(`/${section}`);
              setIsDrawerOpen(false);
            }}
          />
        </div>
      </header>

      {/* Background Blur Effect */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
