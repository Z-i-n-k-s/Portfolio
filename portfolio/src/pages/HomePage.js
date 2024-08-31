import React, { useEffect } from "react";

import HeroSection from "../components/HeroSection";

import SwiperComponent from "../components/SwiperComponent";

import AboutTab from "../components/AboutTab";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetSection) {
      const section = document.getElementById(location.state.targetSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <div
      className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] items-center overflow-hidden justify-center`}
    >
      <HeroSection id="hero" />

      <SwiperComponent id="projects" />

      <AboutTab id="about"/>

      <Contact id="contact"/>

    </div>
  );
};

export default HomePage;
