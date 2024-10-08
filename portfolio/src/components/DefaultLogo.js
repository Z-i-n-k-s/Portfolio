import React from 'react';

const DefaultLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-hexagon-letter-z"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M19.875 6.27A2.225 2.225 0 0121 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 01-2.184 0l-6.75-4.27A2.225 2.225 0 013 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 012.25 0l6.75 3.98h-.033z" />
    <path d="M10 8h4l-4 8h4" />
  </svg>
);

export default DefaultLogo;
