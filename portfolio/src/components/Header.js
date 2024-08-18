import React, { useState } from "react";
import DefaultLogo from "./DefaultLogo";
import HoverLogo from "./HoverLogo";
import { IconHexagonFilled } from "@tabler/icons-react";

import SideLogo from "./SideLogo";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="h-20 shadow-lg pt-2 pb-2 flex items-center">
      <div className=" h-full container mx-auto flex items-center justify-between">
        {/* Logo Section */}

        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <SideLogo className='fixed z-10'/>

          {isHovered ? (
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
