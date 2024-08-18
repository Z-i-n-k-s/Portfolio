import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from './Button'

 const Navbar = () => {
  return (



    <div className="bg-white md:flex gap-4 hidden">
      
      <Button name="About" width="100px" height="50px" />

      <Button name="Projects" width="100px" height="50px" />
      <Button name="Skills" width="100px" height="50px" />
      <Button name="Contact" width="100px" height="50px" />
    </div>



  );
};


export default Navbar