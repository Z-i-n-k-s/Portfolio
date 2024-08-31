import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

const Button = ({ name, width, height, onClick, rounded = 'lg', href, isExternal = false, isActive = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [initialPosition, setInitialPosition] = useState({ top: '50%', left: '50%' });
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const btnColorDark = 'hsl(0, 0%, 0%)';

  const handleMouseEnter = (e) => {
    if (!isActive) {
      updatePosition(e);
      setInitialPosition(position);
      setIsHovered(true);
    }
  };

  const handleMouseMove = (e) => {
    if (isHovered && !isActive) {
      updatePosition(e);
    }
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      setIsHovered(false);
      setPosition(initialPosition);
    }
  };

  const updatePosition = (e) => {
    if (buttonRef.current) {
      const parentOffset = buttonRef.current.getBoundingClientRect();
      const relX = e.clientX - parentOffset.left;
      const relY = e.clientY - parentOffset.top;
      setPosition({ top: relY, left: relX });
    }
  };

  const handleClick = () => {
    if (href) {
      if (isExternal) {
        window.open(href, '_blank');
      } else {
        if (location.pathname !== '/') {
          navigate('/', { state: { targetSection: href } }); // Navigate to HomePage and pass target section
        } else {
          const section = document.getElementById(href);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`relative inline-block border border-transparent rounded-${rounded}`}
      style={{
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        width: width || 'auto',
        height: height || 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      type="button"
    >
      <span
        className="absolute rounded-full"
        style={{
          backgroundColor: btnColorDark,
          width: isHovered || isActive ? '225%' : '0',
          height: isHovered || isActive ? '225%' : '0',
          top: isHovered || isActive ? `${position.top}px` : `${initialPosition.top}px`,
          left: isHovered || isActive ? `${position.left}px` : `${initialPosition.left}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.4s ease-in-out, height 0.4s ease-in-out, top 0.4s ease-in-out, left 0.4s ease-in-out',
          position: 'absolute',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <span
        className={`relative z-10 transition-all duration-500 ${
          isHovered || isActive ? 'text-white' : 'text-black'
        }`}
      >
        {name}
      </span>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.string,
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  width: 'auto',
  height: 'auto',
  onClick: null,
  rounded: 'lg',
  href: '#',
  isExternal: false,
  isActive: false,
};

export default Button;
