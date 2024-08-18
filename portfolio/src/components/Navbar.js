import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from './Button';
import DefaultLogo from './DefaultLogo'; // Ensure DefaultLogo is imported

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogoClick = () => {
    toggleDrawer();
    navigate('/');
  };

  return (
    <div className="relative">
      {/* Buttons for larger screens */}
      <div className={`hidden sm:flex gap-4 ${isDrawerOpen ? "pointer-events-none" : ""}`}>
        <Button name="About" width="100px" height="50px" rounded="full" />
        <Button name="Projects" width="100px" height="50px" rounded="full" />
        <Button name="Skills" width="100px" height="50px" rounded="full" />
        <Button name="Contact" width="100px" height="50px" rounded="full" />
      </div>

      {/* Hamburger Icon for smaller screens */}
      <div className={`flex sm:hidden ${isDrawerOpen ? "pointer-events-none" : ""}`}>
        <button
          className="text-gray-900 bg-transparent hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg p-2.5"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Drawer */}
      <motion.div
        id="drawer-navigation"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-64"
        initial={{ x: '100%' }}
        animate={{ x: isDrawerOpen ? '0%' : '100%' }}
        transition={{ type: 'tween', duration: 0.5 }}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex flex-col items-center h-full justify-between">
          <button
            type="button"
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
            aria-controls="drawer-navigation"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>

          {/* Centered Logo */}
          <DefaultLogo 
            onClick={handleLogoClick} 
            className="cursor-pointer mb-8" 
          />

          {/* Drawer Items */}
          <div className="flex flex-col items-center justify-center flex-grow pt-8 pb-10">
            <ul className="space-y-4 font-medium pb-56">
              <li>
                <Button name="About" width="200px" height="50px" rounded="full" />
              </li>
              <li>
                <Button name="Projects" width="200px" height="50px" rounded="full" />
              </li>
              <li>
                <Button name="Skills" width="200px" height="50px" rounded="full" />
              </li>
              <li>
                <Button name="Contact" width="200px" height="50px" rounded="full" />
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Background Blur Effect */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={toggleDrawer}
        />
      )}
    </div>
  );
};

export default Navbar;
