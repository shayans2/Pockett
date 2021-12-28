import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const BottomSheetContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 300px;
  bottom: 0;
  right: 0;
  z-index: 4;
  ${({ isDynamic }) =>
    isDynamic &&
    css`
      height: 100%;
      top: 0;
      bottom: initial;
      background-color: rgba(0, 0, 0, 0.5);
    `}
`;

const slideInBottom = keyframes`
0% {
    transform: translateY(1000px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }`;

const BottomSheetContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px 12px;
  border-radius: 12px 12px 0 0;
  right: 0;
  box-shadow: 0 -1px 7px 0 #0000002e;
  max-height: 90%;
  overflow: auto;
  height: 300px;
  width: 100%;
  background-color: red;
  ${({ isDynamic }) =>
    isDynamic &&
    css`
      animation: ${slideInBottom} 0.4s ease both;
    `}
`;

function BottomSheet(props) {
  const close = (e) => {
    if (e.currentTarget === e.target && props.dynamic) {
      props.onClose();
    }
  };

  //   React.useEffect(() => {
  //     document.documentElement.classList.add('close-scroll');

  //     return () => {
  //       document.documentElement.classList.remove('close-scroll');
  //     };
  //   }, []);

  return (
    <BottomSheetContainer
      isDynamic={props.dynamic}
      onClick={(e) => {
        close(e);
      }}
    >
      <BottomSheetContent isDynamic={props.dynamic}>
        {props.children}
      </BottomSheetContent>
    </BottomSheetContainer>
  );
}

export default BottomSheet;
