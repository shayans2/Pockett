import React from 'react';
import styled, { keyframes } from 'styled-components';

const move1 = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  `;
const move2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
`;
const move3 = keyframes`
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
`;

const SpinnerContainer = styled.div`
  width: 72px;
  position: relative;
  height: 100%;
  margin-right: auto;
  margin-left: auto;

  div {
    position: absolute;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${move1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${move2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${move2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${move3} 0.6s infinite;
  }
`;

const SpinnerDot = styled.div`
  width: 13px;
  height: 13px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
    </SpinnerContainer>
  );
};
