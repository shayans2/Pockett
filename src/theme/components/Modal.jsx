import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: absolute;
  height: ${({ isOpen }) => (isOpen ? '100%' : 0)};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
`;

const ModalContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 12px 12px 0 0;
  background-color: ${({ theme }) => theme.colors.white};
  max-height: ${({ isOpen }) => (isOpen ? '100vh' : '0px')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '0px')};
  /* visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')}; */
  transition: all 0.5s ease;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  z-index: ${({ minHeight }) => (minHeight ? 5 : 6)};
`;

export const Modal = ({ onClose, isOpen, minHeight, children }) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : null;
    return () => {
      document.body.style.overflow = null;
    };
  }, [isOpen]);

  const close = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={(e) => close(e)} />
      <ModalContainer isOpen={isOpen} minHeight={minHeight}>
        {children}
      </ModalContainer>
    </>
  );
};
