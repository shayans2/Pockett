import React from 'react';

export const CloseIcon = ({ color = '#fff', size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <g fill="none" fillRule="nonzero">
        <path fill="#D8D8D8" fillOpacity="0" d="M0 0h24v24H0z" />
        <path
          fill={color}
          d="M12 10.586l6.293-6.293a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 1 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586z"
        />
      </g>
    </svg>
  );
};
