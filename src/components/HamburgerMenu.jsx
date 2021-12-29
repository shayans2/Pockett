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
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  div {
    margin: 16px 24px;
    text-align: right;
    color: #fff;
  }
  a {
    margin: 0 24px;
    padding: 16px 0;
    font-weight: bold;
    border-bottom: 1px solid #ffffff40;
    color: #fff;
    text-align: left;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #a8b2b7;
    }
  }
`;

const Ham = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <div onClick={() => setOpen(!open)}>Close</div>
      <a href="/">Wallet Name</a>
      <a href="/">Setting</a>
      <a href="/">Contact Us</a>
    </StyledMenu>
  );
};

export default Ham;
