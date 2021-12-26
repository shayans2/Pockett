import React from 'react';

export const ChevronLeft = ({ color = '#fff' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="none" />
      <g filter="url(#filter0_d_2_5)">
        <rect x="-136" y="-72" width="392" height="2024" rx="8" fill="none" />
        <path
          d="M14.7054 19.2946C15.0947 18.9053 15.095 18.2743 14.7062 17.8846L8.83 12L14.7062 6.11539C15.095 5.72569 15.0947 5.09466 14.7054 4.70539C14.3158 4.31581 13.6842 4.31581 13.2946 4.70539L6.70711 11.2929C6.31658 11.6834 6.31658 12.3166 6.70711 12.7071L13.2946 19.2946C13.6842 19.6842 14.3158 19.6842 14.7054 19.2946Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_5"
          x="-144"
          y="-76"
          width="408"
          height="2040"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="8"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_2_5"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_5"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_5"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
