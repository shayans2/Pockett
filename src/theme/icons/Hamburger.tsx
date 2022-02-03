import React from 'react';

export const HambugerIcon = ({ color = '#fff', size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <g fill="none" fillRule="nonzero">
        <path fill="#D8D8D8" fillOpacity="0" d="M0 0h24v24H0z" />
        <path
          fill={color}
          d="M3 13a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2H3zm0-6a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2H3zm0 12a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2H3z"
        />
      </g>
    </svg>
  );
};
