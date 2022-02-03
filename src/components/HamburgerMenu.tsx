import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { authService } from '@api';
import { useNoScroll } from '@hooks/useNoScroll';
import { Text, FlexBox, CloseIcon } from '@theme';
import { constants } from '@constants';

const StyledMenu = styled(FlexBox)<{ isOpen: boolean }>`
  position: fixed;
  height: 100%;
  width: 100vw;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.darkestBlue};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`;

const CloseIconWrapper = styled.div`
  margin: 16px 24px;
  text-align: right;
`;

const MenuItem = styled.div`
  margin: 0 24px;
  padding: 28px 0;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.separator};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-decoration: none;
  transition: color 0.3s linear;

  :last-child {
    border-bottom: none;
  }
`;

const CopyRight = styled(Text)`
  position: absolute;
  bottom: 32px;
  right: 0;
  left: 0;
`;

export const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  useNoScroll(isOpen);
  const navigate = useNavigate();
  const user = authService.getUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <StyledMenu justify="flex-start" direction="column" isOpen={isOpen}>
      <CloseIconWrapper onClick={() => setIsOpen(!isOpen)}>
        <CloseIcon />
      </CloseIconWrapper>
      <MenuItem>Gooday {user.data.username}? 👋</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
      <CopyRight color="white" align="center">
        version {constants.APP_VERSION}
      </CopyRight>
    </StyledMenu>
  );
};
