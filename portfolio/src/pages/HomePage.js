import React from "react";
import Button from "../components/Button";
import VerticalName from "../components/VerticalName";
import VerticalIcons from "../components/VerticalIcons";
import About from "../components/About";
import HeroSection from "../components/HeroSection";


const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      
      <div>
        {/* <button className="border-2 border-black rounded-lg p-0">
          <Button
            name="Click Me"
            width="150px"
            height="50px "
            rounded="lg"
            className="p-0 m-0"
          />
        </button> */}

        {/* <VerticalName/> */}
      </div>
     <About/>
    </div>
  );
};

export default HomePage;
