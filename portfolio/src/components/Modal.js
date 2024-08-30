import React, { useEffect } from 'react';
import Button from "./Button.js";
import { CircleX } from 'lucide-react';

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = '';
    };
  }, []);

  const handleButtonClick = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener noreferrer');
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl relative h-[80vh] max-h-[90vh] flex flex-col p-4 sm:p-6 md:p-8">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500  hover:text-gray-800"
        >
           <CircleX 
            className="
              w-4 h-4 
              xsm-mx:w-5 xsm-mx:h-5 
              xs-mx:w-6 xs-mx:h-6 
              sm-mx:w-7 sm-mx:h-7 
              md-mx:w-8 md-mx:h-8 
              lg-mx:w-9 lg-mx:h-9 
              xl-mx:w-10 xl-mx:h-10 
              2xl-mx:w-11 2xl-mx:h-11 
              3xl-mx:w-12 3xl-mx:h-12 
              4xl-mx:w-14 4xl-mx:h-14
            " 
          />
        </button>
        <div className="flex-1 overflow-auto mt-12 mb-4 sm:mt-8 sm:mb-6 md:mt-12 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h2>
          <img
            src={project.imageUrl}
            className="object-cover w-full h-48 sm:h-56 md:h-64 rounded-lg mb-4"
            alt={project.title}
          />
          <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.desc}</p>
          <p className="text-red-600 font-medium mb-4 text-lg">${project.price}</p>
          <p className="capitalize mb-4 text-sm sm:text-base">{project.category}</p>
        </div>
        <div className="flex gap-2 justify-center mt-auto">
          <a 
            href={project.viewUrl}
            onClick={(e) => handleButtonClick(e, project.viewUrl)}
            className="text-sm border-2 border-gray-500 text-gray-600 font-semibold rounded-full"
          >
            <Button name='View' width={120} height={40} rounded='full' />
          </a>
          <a 
            href={project.codeUrl}
            onClick={(e) => handleButtonClick(e, project.codeUrl)}
            className="text-sm border-2 border-gray-500 text-gray-600 font-semibold rounded-full"
          >
            <Button name='Code' width={122} height={40} rounded='full' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
