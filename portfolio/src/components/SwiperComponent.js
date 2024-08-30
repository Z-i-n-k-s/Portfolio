import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Keyboard } from 'swiper/modules';
import Button from "./Button.js";
import UserProjects from "../User/UserProjects";
import Modal from './Modal.js';

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
    <section className="relative pb-0 w-[calc(min(90rem, 90%))] 2xl-mx:mx-10 xsm-mx:mx-1 sm-mx:mx-3 4xl-mx:mx-20 3xl-mx:mx-16 min-h-screen flex flex-col items-center gap-12 px-6 py-8">
      <div className="text-center">
        <span className="uppercase text-gray-600 text-base tracking-wider">latest</span>
        <h1 className="text-transparent text-4xl font-extrabold bg-black bg-clip-text">Projects</h1>
        <hr className="my-4 border-t-2 border-black w-24 mx-auto" />
        <p className="leading-6 text-gray-800"> Explore some of my recent works </p>
        <button className="inline-block mt-8 border-2 border-gray-300 text-gray-600 font-semibold rounded-full transition-colors">
          <Button name='View All' width={140} height={40} rounded='full' onClick={() => window.location.href = '/projects'} />
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
          modifier: 2, // Adjust this value as needed
          slideShadows: true,
        }}
        keyboard={{ enabled: true }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}  // Adjust spacing between slides
        slidesOffsetBefore={0}  // No offset before slides
        slidesOffsetAfter={20}  // Add offset after slides if needed
        breakpoints={{
          360: { slidesPerView: 1 },   // xsm-mx
          475: { slidesPerView: 1 },   // xs-mx
          639: { slidesPerView: 2 },   // sm-mx
          767: { slidesPerView: 2 },   // md-mx
          899: { slidesPerView: 2 },   // bs-mx
          1028: { slidesPerView: 2 },  // lg-mx
          1284: { slidesPerView: 2 },  // xl-mx
          1535: { slidesPerView: 3 },  // 2xl-mx
          1835: { slidesPerView: 3 },  // 3xl-mx
          2135: { slidesPerView: 3 },  // 4xl-mx
        }}
        className="w-full pt-12"
        onSlideChange={handleSlideChange}
      >
        {UserProjects.map((project, index) => (
          <SwiperSlide 
            key={project.id} 
            className="relative rounded-xl mb-12 flex items-end justify-start w-72 h-96 bg-slate-200 shadow"
            onClick={(e) => handleSlideClick(e, project, index)}
          >
            <div className=" bg-slate-200 rounded-xl h-48 p-4 flex justify-center items-center overflow-hidden">
              <img
                src={project.imageUrl}
                className='object-cover h-full rounded-xl w-full transition-all'
                alt={project.title}
              />
            </div>
            <div className="px-12 py-2 flex flex-col justify-between h-1/2">
              <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">{project.title}</h2>
              <p className="capitalize text-slate-500">{project.category}</p>
              <div className="mt-2">
                <p className="text-red-600 font-medium">${project.price}</p>
                <p className="text-slate-500 font-medium line-clamp-2">${project.desc}</p>
              </div>
              <div className="flex gap-2 mt-4 w-full justify-center pb-4">
                <button className="text-sm border-2 border-gray-500 text-gray-600 font-semibold rounded-full">
                  <Button name='View' width={120} height={40} rounded='full' />
                </button>
                <button className="text-sm border-2 border-gray-500 text-gray-600 font-semibold rounded-full">
                  <Button name='Code' width={122} height={40} rounded='full' />
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
