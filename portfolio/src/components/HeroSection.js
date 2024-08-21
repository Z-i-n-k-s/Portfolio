import React from "react";
import Typewriter from "typewriter-effect";
import UserInfo from "../User/UserInfo.js";
import image2 from "../assets/2.jpeg"; // Assuming the hero picture is image2
import Button from "./Button.js";
import { IconDownload } from "@tabler/icons-react";
import { useMatches } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" h-{100vh} mt-24 flex relative overflow-hidden  items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6">
      <div className="bs:ml-10 bs:w-3/5 flex-col lg-mx:gap-3 mx-4 bs-mx:items-center flex justify-center items-center  ">
        <div className="text-black text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
          Hello,{" "}
          <p className="2xl-mx:pl-28 2xl-mx:!-mt-4 4xl-mx:pl-32 4xl-mx:!-mt-4 4xl-mx:text-3xl sm-mx:pl-20 sm-mx:!-mt-4 sm-mx:text-xl ">
            I am
          </p>
        </div>
        <div className="text-black text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">
          {UserInfo.name}
        </div>

        <div className="text-black text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-base  ">
          I'm a&nbsp;
          <span className="text-black">
            <Typewriter
              options={{
                strings: UserInfo.stack,
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
        </div>
        <div className=" flex xs-mx:flex xs-mx:justify-center xs-mx:items-center sm-mx:flex sm-mx:justify-center sm-mx:items-center lg-mx:flex lg-mx:justify-center lg-mx:items-center xl-mx:flex xl-mx:justify-center xl-mx:items-center ">
          <div className=" flex flex-wrap gap-4 sm:my-0 lg:text-base text-black xsm-mx:text-xs xsm-mx:w-full sm-mx:flex-row sm-mx:text-sm justify-center items-center  text-xl w-full text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base ">
            <button className="border-2 border-black rounded-lg m-2  ">
              <Button name="Resume" width="140px" height="50px" rounded="lg" />
            </button>
            <button className="border-2 border-black rounded-lg m-2 xsm-mx:!-m-2 ">
              <Button
                name="Download"
                width="140px "
                height="50px"
                rounded="lg"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
        <div className=" w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center ">
          <img
            className="w-full  h-full rounded-full  "
            src={image2}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
