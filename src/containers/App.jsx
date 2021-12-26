import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Text, FlexBox, Button } from '@theme';

const Container = styled(FlexBox)`
  background-color: #e76f51;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  transform: translateZ(0);
`;

const grow = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(10);
  }
`;

const MagicDot = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  animation: ${grow} 1s forwards ease-in;
  animation-delay: 0.3s;
  z-index: 1;
  overflow: hidden;
`;

const HomeButton = styled(Button)`
  background-color: #264653;
  width: 160px;
`;

const Logo = styled(Text)`
  font-size: 80px;
  color: #e76f51;
  z-index: 2;
`;

const BottomFixed = styled(FlexBox)`
  position: fixed;
  bottom: 16px;
  z-index: 2;
`;

export const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);
  }, []);

  return (
    <Container alignItems="center" justify="center">
      <MagicDot></MagicDot>

      {isVisible ? (
        <Logo className="animate__animated animate__bounceInDown" weight="bold">
          Pockett
        </Logo>
      ) : null}

      {isVisible ? (
        <BottomFixed className="animate__animated animate__fadeIn" gap="5px">
          <Link to="/login">
            <HomeButton text="Login" />
          </Link>
          <Link to="/signup">
            <HomeButton text="Register" />
          </Link>
        </BottomFixed>
      ) : null}
    </Container>
  );
};
