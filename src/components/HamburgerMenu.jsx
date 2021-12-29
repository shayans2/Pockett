import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.darkestBlue};
  height: 100%;
  width: 100vw;
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  div {
    margin: 16px 24px;
    text-align: right;
    color: #fff;
  }
  a {
    margin: 0 24px;
    padding: 28px 0;
    font-weight: bold;
    border-bottom: 1px solid #ffffff40;
    color: #fff;
    text-align: center;
    text-decoration: none;
    transition: color 0.3s linear;

    :last-child {
      border-bottom: none;
    }
    &:hover {
      color: #a8b2b7;
    }
  }
`;

export const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <StyledMenu isOpen={isOpen}>
      <div onClick={() => setIsOpen(!isOpen)}>Close</div>
      <a href="/">Wallet Name</a>
      <a href="/">Setting</a>
      <a href="/">Contact Us</a>
    </StyledMenu>
  );
};
