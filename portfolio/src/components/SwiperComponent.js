import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Keyboard } from "swiper/modules";
import Button from "./Button.js";
import UserProjects from "../User/UserProjects";
import Modal from "./Modal.js";

const SwiperComponent = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.realIndex;
      setCenterIndex(activeIndex);
    }
  };

  const handleButtonClick = (e, url) => {
    e.stopPropagation(); // Prevents event from bubbling up to the slide
    e.preventDefault();
    window.open(url, "_blank", "noopener noreferrer");
  };

  const handleSlideClick = (event, project, index) => {
    event.preventDefault(); // Prevents the default behavior (scrolling)
    // Open modal only if clicked slide is the centered one
    if (index === centerIndex) {
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 py-8"
    >
      <div className="text-center max-w-5xl w-full">
        <span className="uppercase text-gray-600 text-base tracking-wider">
          Latest
        </span>
        <h1 className="text-transparent text-4xl font-extrabold bg-black bg-clip-text">
          Projects
        </h1>
        <hr className="my-4 border-t-2 border-black w-24 mx-auto" />
        <p className="leading-6 text-gray-800">
          Explore some of my recent works
        </p>
        <button className="inline-block mt-8 border-2 border-gray-400 text-gray-600 font-semibold rounded-full transition-colors">
          <Button
            name="View All"
            width={140}
            height={40}
            rounded="full"
            onClick={() => (window.location.href = "/projects")}
          />
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[EffectCoverflow, Pagination, Keyboard]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        keyboard={{ enabled: true }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesOffsetBefore={0}
        slidesOffsetAfter={20}
        breakpoints={{
          360: { slidesPerView: 1 },
          475: { slidesPerView: 1 },
          639: { slidesPerView: 2 },
          767: { slidesPerView: 2 },
          899: { slidesPerView: 2 },
          1028: { slidesPerView: 2 },
          1284: { slidesPerView: 2 },
          1535: { slidesPerView: 3 },
          1835: { slidesPerView: 3 },
          2135: { slidesPerView: 3 },
        }}
        className="w-full pt-12"
        onSlideChange={handleSlideChange}
      >
        {UserProjects.map((project, index) => (
          <SwiperSlide
            key={project.id}
            className="relative rounded-xl mb-12 flex items-end justify-start w-72 h-96 bg-slate-200 shadow-lg"
            onClick={(e) => handleSlideClick(e, project, index)}
          >
            <div className="bg-slate-200 rounded-xl h-48 flex justify-center items-center overflow-hidden">
              <div className="bg-slate-200 h-48 sm:h-56 md:h-64 p-4 min-w-[120px] md:min-w-[145px] rounded-lg mb-4 overflow-hidden">
                <img
                  src={project.image}
                  className="object-scale-down h-full w-full hover:scale-110 transition-all rounded-lg"
                  alt={project.title}
                />
              </div>
            </div>
            <div className="px-12 py-2 flex flex-col justify-between h-1/2">
              <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                {project.title}
              </h2>
              <div className="mt-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-600 text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-slate-500 font-medium line-clamp-2">
                    {project.about}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 w-full justify-center pb-4">
                <button
                  className="text-sm border-2 border-gray-500 text-gray-600 font-semibold rounded-full"
                  onClick={(e) => handleSlideClick(e, project, index)}
                >
                  <Button
                    name="Details"
                    width={122}
                    height={40}
                    rounded="full"
                  />
                </button>
                <button
                  className="text-sm border-2 border-gray-500 text-gray-600 font-semibold rounded-full"
                  onClick={(e) => handleButtonClick(e, project.github)}
                >
                  <Button name="Code" width={122} height={40} rounded="full" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default SwiperComponent;
