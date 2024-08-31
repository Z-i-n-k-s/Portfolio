import React, { useState } from "react";
import image3 from "../assets/3.jpeg";

import {
  User2,
  Briefcase,
  PhoneCall,
  Calendar,
  GraduationCap,
  MailIcon,
  HomeIcon,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Zishan Rezwan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "01680893062",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 04 September, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Sc in Computer Science and Engineering",
  },
  {
    icon: <MailIcon size={20} />,
    text: "zishanrajoan123@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Dhanmondi, Dhaka",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        school: "Government Laboratory High School",
        qualification: "SSC in Science",
      },
      {
        school: "Dhaka City College",
        qualification: "HSC in Science",
      },
      {
        school: "AHSANULLAH UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        qualification: "B.Sc on Computer Science and Engineering",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        category: "Programming Languages",
        skills: ["C", "C++", "Java", "JavaScript", "Dart", "Python"],
      },
      {
        category: "Frontend",
        skills: ["HTML", "CSS", "React.js"],
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
      },
      {
        category: "Mobile Development",
        skills: ["Flutter", "Android Studio"],
      },
      {
        category: "Tools",
        skills: ["VS Code", "Git", "GitHub"],
      },
    ],
  },
];

const tabs = [
  { id: "Personal", label: "Personal" },
  { id: "Qualifications", label: "Qualifications" },
  { id: "Skills", label: "Skills" },
];

const AboutTab = ({id}) => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  const [activeTab, setActiveTab] = useState("Personal");
  return (
    <section id={id} className="relative w-[calc(100%-5rem)] max-w-7xl mx-auto min-h-screen flex flex-col items-center gap-12 px-6 py-8 4xl-mx:px-20 3xl-mx:px-16 2xl-mx:px-10 lg-mx:px-8 md-mx:px-6 sm-mx:px-4 xs-mx:px-2">
      {/* Header Section */}
      <div className="text-center">
        <span className="text-gray-600 text-base tracking-wider">
          Information
        </span>
        <h1 className="text-transparent text-4xl font-extrabold bg-black bg-clip-text mt-2 lg-mx:text-3xl md-mx:text-2xl sm-mx:text-xl">
          About Me
        </h1>
        <hr className="my-4 border-t-2 border-black w-24 mx-auto" />
        <p className="leading-7 text-gray-800 text-lg lg-mx:text-base md-mx:text-sm sm-mx:text-sm xs-mx:text-xs max-w-3xl mx-auto">
          I'm a Computer Science Engineering student passionate about
          technology, specializing in dynamic web applications and Android app
          development. I also excel in team collaboration, ensuring project
          success.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap justify-center items-start gap-12 w-full">
        {/* Profile Image Section */}
        <div className="flex justify-center items-center w-full lg-mx:w-3/4 md-mx:w-full">
          <div className="w-80 h-96 lg-mx:w-64 lg-mx:h-80 md-mx:w-60 md-mx:h-72 sm-mx:w-52 sm-mx:h-64 xs-mx:w-48 xs-mx:h-60">
            <img
              className="w-full h-full rounded-2xl object-cover"
              src={image3}
              alt="profile"
            />
          </div>
        </div>

        {/* Tabs and Content Section */}
        <div className="flex flex-col items-center w-full lg-mx:w-3/4 md-mx:w-full">
          {/* Tabs */}
          <div className="flex justify-center items-center space-x-8 md-mx:space-x-4 sm-mx:space-x-2 sm-mx:space-y-2 sm-mx:flex-wrap bg-white shadow-md rounded-full p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8 w-full">
            {activeTab === "Personal" && (
              <div className="flex flex-col items-center text-center">
                <p className="text-base text-gray-700 leading-7 max-w-2xl lg-mx:text-sm md-mx:text-sm sm-mx:text-xs">
                  I specialize in crafting intuitive websites with cutting-edge
                  technology, delivering dynamic and engaging user experiences.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-6 w-full md-mx:grid-cols-1">
                  {infoData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 justify-center"
                    >
                      <div className="text-black">{item.icon}</div>
                      <div className="text-gray-700 text-sm lg-mx:text-xs">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 w-full flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Language Skills
                  </h3>
                  <div className="w-16 h-1 bg-black mb-2"></div>
                  <p className="text-gray-700 text-base lg-mx:text-xs">
                    English, Hindi, Bangla
                  </p>
                </div>
              </div>
            )}

            {activeTab === "Qualifications" && (
              <div className="flex flex-col items-start text-left text-gray-700 w-full max-w-3xl mx-auto">
                <div className="w-full text-center mb-8">
                  <h3 className="text-2xl font-bold xl:text-2xl lg-mx:text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm">
                    My Journey
                  </h3>
                </div>
                {/* Education Wrapper */}
                <div className="w-full">
                  <div className="flex gap-x-4 items-center text-xl text-primary lg-mx:text-lg md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                    <Briefcase />
                    <h4 className="capitalize font-medium lg-mx:text-lg md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                      {getData(qualificationData, "Education").title}
                    </h4>
                  </div>
                  {/* List */}
                  <div className="flex flex-col gap-y-10 lg-mx:gap-y-10 md-mx:gap-y-10 xsm-mx:gap-y-6 sm-mx:gap-y-8 mt-6">
                    {getData(qualificationData, "Education").data.map(
                      (item, index) => {
                        const { school, qualification } = item;
                        return (
                          <div
                            className="flex gap-x-8 group lg-mx:gap-x-6 md-mx:gap-x-4 sm-mx:gap-x-2"
                            key={index}
                          >
                            <div className="h-[84px] w-[1px] bg-black relative ml-2">
                              <div className="w-[11px] h-[11px] rounded-full bg-black absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                            </div>
                            <div>
                              <div className="font-semibold text-xl leading-none mb-2 lg-mx:text-lg md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                                {school}
                              </div>
                              <div className="text-lg leading-none text-muted-foreground mb-4 lg-mx:text-base md-mx:text-sm sm-mx:text-xs xs-mx:text-[10px]">
                                {qualification}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Skills" && (
              <>
                {/* Horizontal Layout for lg-mx and Below */}
                <div className="flex flex-col items-center text-center text-gray-700 w-full max-w-3xl mx-auto lg:hidden">
                  <h4 className="text-xl font-semibold mb-2 xl:text-left lg-mx:text-lg md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                    Tools I Use Everyday
                  </h4>
                  <div className="border-b border-border mb-4"></div>
                  {/* Tool list */}
                  <div className="flex flex-col w-full">
                    {getData(skillData, "skills").data.map((item, index) => {
                      const { category, skills } = item;
                      return (
                        <div
                          key={index}
                          className="mb-6 lg-mx:mb-4 md-mx:mb-3 sm-mx:mb-3 xs-mx:mb-2"
                        >
                          {/* Category */}
                          <div className="font-semibold mb-2 text-base lg-mx:text-base md-mx:text-sm sm-mx:text-sm xs-mx:text-xs">
                            {category}
                          </div>
                          <div className="flex flex-wrap gap-x-8 gap-y-6 justify-center xl:justify-start lg-mx:gap-x-6 md-mx:gap-x-4 sm-mx:gap-x-4 sm-mx:gap-y-4 xs-mx:gap-x-2 xs-mx:gap-y-2">
                            {skills.map((skill, skillIndex) => (
                              <div
                                className="font-medium text-sm lg-mx:text-sm md-mx:text-xs sm-mx:text-xs xs-mx:text-[10px]"
                                key={skillIndex}
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                          {/* Divider */}
                          {index <
                            getData(skillData, "skills").data.length - 1 && (
                            <div className="border-t border-gray-300 my-4"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Vertical Layout for Above lg-mx */}
                <div className="hidden lg:flex flex-row items-start text-left text-gray-700 w-full max-w-3xl mx-auto">
                  {/* Container for categories and dividers */}
                  {getData(skillData, "skills").data.map((item, index) => {
                    const { category, skills } = item;
                    return (
                      <div
                        key={index}
                        className="flex flex-col w-1/3 px-4 relative"
                      >
                        {/* Category */}
                        <div className="font-semibold mb-2 text-lg lg-mx:text-base md-mx:text-sm sm-mx:text-sm xs-mx:text-xs border-b-2  border-gray-300">
                          {category}
                        </div>
                        <div className="flex flex-col gap-y-4">
                          {skills.map((skill, skillIndex) => (
                            <div
                              className="font-medium text-sm lg-mx:text-sm md-mx:text-xs sm-mx:text-xs xs-mx:text-[10px]"
                              key={skillIndex}
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                        {/* Vertical Divider */}
                        {index <
                          getData(skillData, "skills").data.length - 1 && (
                          <div className="absolute inset-y-0 right-0 border-r border-gray-300"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTab;
