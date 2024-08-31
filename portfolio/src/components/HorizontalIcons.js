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

const HorizontalIcons = () => {
  return (
    <div className="flex justify-center space-x-6 pb-6">
      <a
        href="https://github.com/Z-i-n-k-s"
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <motion.div
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 1, scale: 1.1, y: -10 }} // Added scale effect on hover
          whileTap={{ opacity: 0.5 }} // Added tap effect
          transition={{ type: "tween", duration: 0.3 }}
        >
          <PiGithubLogoLight className="text-black text-3xl" /> {/* Reduced size */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ opacity: 1 }} // Ensure visibility on tap
            transition={{ type: "tween", duration: 0.3 }}
          >
            <PiGithubLogoFill className="text-black text-3xl" /> {/* Reduced size */}
          </motion.div>
        </motion.div>
      </a>
      <a
         href="https://www.linkedin.com/in/zishan-rezwan/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <motion.div
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 1, scale: 1.1, y: -10 }} // Added scale effect on hover
          whileTap={{ opacity: 0.5 }} // Added tap effect
          transition={{ type: "tween", duration: 0.3 }}
        >
          <PiLinkedinLogoLight className="text-black text-3xl" /> {/* Reduced size */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ opacity: 1 }} // Ensure visibility on tap
            transition={{ type: "tween", duration: 0.3 }}
          >
            <RiLinkedinBoxFill className="text-black text-3xl" /> {/* Reduced size */}
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
          whileHover={{ opacity: 1, scale: 1.1, y: -10 }} // Added scale effect on hover
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
         href="https://discordapp.com/users/708984153185714210"
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <motion.div
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 1, scale: 1.1, y: -10 }} // Added scale effect on hover
          whileTap={{ opacity: 0.5 }} // Added tap effect
          transition={{ type: "tween", duration: 0.3 }}
        >
          <PiDiscordLogoLight className="text-black text-3xl" /> {/* Reduced size */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ opacity: 1 }} // Ensure visibility on tap
            transition={{ type: "tween", duration: 0.3 }}
          >
            <PiDiscordLogoFill className="text-black text-3xl" /> {/* Reduced size */}
          </motion.div>
        </motion.div>
      </a>
    </div>
  );
};

export default HorizontalIcons;
