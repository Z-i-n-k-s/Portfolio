import React from "react";
import UserInfo from "../User/UserInfo.js";
import Typewriter from "typewriter-effect";

import image2 from "../assets/2.jpeg"; // Assuming the hero picture is image2
import image3 from "../assets/3.jpeg"; // Assuming the hero picture is image2
import Button from "./Button.js";

const About = () => {
  return (
    <div className=" h-{100vh}  4xl-mx:mt-32 2xl-mx:mt-20 mt-16 flex relative overflow-hidden  items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6 xsm-mx:flex xsm-mx:justify-center">
      <div className="bs:ml-10 bs:w-3/5 flex-col lg-mx:gap-3 mx-4 bs-mx:items-center flex justify-center items-center  xsm-mx:justify-center xsm-mx:items-center ">
      <div className="w-[325px] h-[375px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 flex items-center justify-center text-center ">
  <img
    className="w-fit h-full rounded-full"
    src={image3}
    alt="profile"
  />
</div>
      </div>

      <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
        <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
          {UserInfo.bio}
        </div>
      </div>
    </div>

   
  );
};

export default About;
