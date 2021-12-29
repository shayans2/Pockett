import React from 'react';

export const Add = ({ color = '#fff', size = 24 }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}
    >
      <title>add</title>
      <path
        d="M486.41,192H320V25.6A25.67,25.67,0,0,0,294.39,0H217.6A25.67,25.67,0,0,0,192,25.6V192H25.6A25.67,25.67,0,0,0,0,217.6v76.8A25.67,25.67,0,0,0,25.6,320H192V486.39A25.68,25.68,0,0,0,217.6,512h76.78A25.68,25.68,0,0,0,320,486.39V320H486.41A25.67,25.67,0,0,0,512,294.41V217.6A25.67,25.67,0,0,0,486.41,192Z"
        fillRule="evenodd"
        fill={color}
      />
    </svg>
  );
};
