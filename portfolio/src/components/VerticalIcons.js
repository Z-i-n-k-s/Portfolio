import React from "react";
import { motion } from "framer-motion";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import {
  PiGithubLogoFill,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiDiscordLogoFill,
  PiDiscordLogoLight,
} from "react-icons/pi";

const VerticalIcons = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{  }} // Moves up by 10px on hover
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 flex-col items-center z-50 hidden md:flex" // Hide on screens smaller than 768px
    >
      <div className="relative flex flex-col items-center space-y-6">
        {" "}
        {/* Increased spacing */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 ,y: -10}} // Added scale effect on hover
            whileTap={{ opacity: 0.5 }} // Added tap effect
            transition={{ type: "tween", duration: 0.3 }}
          >
            <PiGithubLogoLight className="text-black text-3xl" />{" "}
            {/* Reduced size */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ opacity: 1 }} // Ensure visibility on tap
              transition={{ type: "tween", duration: 0.3 }}
            >
              <PiGithubLogoFill className="text-black text-3xl" />{" "}
              {/* Reduced size */}
            </motion.div>
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 ,y: -10}} // Added scale effect on hover
            whileTap={{ opacity: 0.5 }} // Added tap effect
            transition={{ type: "tween", duration: 0.3 }}
          >
            <PiLinkedinLogoLight className="text-black text-3xl" />{" "}
            {/* Reduced size */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ opacity: 1 }} // Ensure visibility on tap
              transition={{ type: "tween", duration: 0.3 }}
            >
              <RiLinkedinBoxFill className="text-black text-3xl" />{" "}
              {/* Reduced size */}
            </motion.div>
          </motion.div>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 ,y: -10}} // Added scale effect on hover
            whileTap={{ opacity: 0.5 }} // Added tap effect
            transition={{ type: "tween", duration: 0.3 }}
          >
            <FiTwitter className="text-black text-3xl" /> {/* Reduced size */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ opacity: 1 }} // Ensure visibility on tap
              transition={{ type: "tween", duration: 0.3 }}
            >
              <FaTwitter className="text-black text-3xl" /> {/* Reduced size */}
            </motion.div>
          </motion.div>
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 ,y: -10}} // Added scale effect on hover
            whileTap={{ opacity: 0.5 }} // Added tap effect
            transition={{ type: "tween", duration: 0.3 }}
          >
            <PiDiscordLogoLight className="text-black text-3xl" />{" "}
            {/* Reduced size */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ opacity: 1 }} // Ensure visibility on tap
              transition={{ type: "tween", duration: 0.3 }}
            >
              <PiDiscordLogoFill className="text-black text-3xl" />{" "}
              {/* Reduced size */}
            </motion.div>
          </motion.div>
        </a>
        {/* Vertical Line */}
        <div className="w-0.5 bg-black h-[calc(100vh-50px)] mt-2" />
      </div>
    </motion.div>
  );
};

export default VerticalIcons;
