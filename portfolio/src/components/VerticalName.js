
import React from "react";
import { motion } from "framer-motion";

const VerticalName = () => {
    return (
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -10 }} // Moves up by 10px on hover
        transition={{ type: "tween", duration: 0.3 }}
        className="md:flex fixed right-6 top-1/2 transform -translate-y-1/2 hidden flex-col items-center z-50"
      >
        <div className="text-gray-500 text-lg mb-2">
          {/* Display "Zinks" vertically */}
          {"Zinks".split("").map((letter, index) => (
            <span key={index} className="block">
              {letter}
            </span>
          ))}
        </div>
        
        {/* Vertical Line */}
        <div className="w-0.5 bg-gray-500 h-[calc(100vh-50px)] mt-2" />
      </motion.div>
    );
};

export default VerticalName;
