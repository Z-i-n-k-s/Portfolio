import React from "react";

import HeroSection from "../components/HeroSection";

import SwiperComponent from "../components/SwiperComponent";

import AboutTab from "../components/AboutTab";

const HomePage = () => {
  return (
    <div
      className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] items-center overflow-hidden justify-center`}
    >
      <HeroSection id="hero" />

      <SwiperComponent id="projects" />

      <AboutTab />

    </div>
  );
};

export default HomePage;
