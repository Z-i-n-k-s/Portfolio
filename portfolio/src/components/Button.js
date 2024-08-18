import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types'; // For type-checking props

const Button = ({ name, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [initialPosition, setInitialPosition] = useState({ top: '50%', left: '50%' });
  const buttonRef = useRef(null);

  // Fixed color for the button
  const btnColorDark = 'hsl(0, 0%, 0%)'; // Adjust as needed

  const handleMouseEnter = (e) => {
    updatePosition(e);
    setInitialPosition(position);
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      updatePosition(e);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition(initialPosition);
  };

  const updatePosition = (e) => {
    if (buttonRef.current) {
      const parentOffset = buttonRef.current.getBoundingClientRect();
      const relX = e.clientX - parentOffset.left;
      const relY = e.clientY - parentOffset.top;
      setPosition({ top: relY, left: relX });
    }
  };

  const buttonStyle = {
    color: isHovered ? 'white' : 'black',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    width: width || 'auto', // Use prop for width, default to 'auto'
    height: height || 'auto', // Use prop for height, default to 'auto'
    display: 'flex', // Center content
    alignItems: 'center', // Vertically center
    justifyContent: 'center', // Horizontally center
  };

  const spanStyle = {
    backgroundColor: btnColorDark,
    width: isHovered ? '225%' : '0',
    height: isHovered ? '225%' : '0',
    top: isHovered ? `${position.top}px` : `${initialPosition.top}px`,
    left: isHovered ? `${position.left}px` : `${initialPosition.left}px`,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.4s ease-in-out, height 0.4s ease-in-out, top 0.4s ease-in-out, left 0.4s ease-in-out',
    position: 'absolute',
    pointerEvents: 'none',
  };

  return (
    <a
      ref={buttonRef}
      className="relative inline-block border border-transparent rounded-lg"
      href="#"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="absolute rounded-full"
        style={spanStyle}
      />
      <span className={`relative ${isHovered ? 'text-white' : 'text-black'}`}>
        {name}
      </span>
    </a>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Button;
