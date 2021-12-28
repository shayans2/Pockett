import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  Text,
  FlexBox,
  Button,
  bounceInDown,
  growFromCenter,
  fadeIn,
} from '@theme';

const Container = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  overflow: hidden;
  transform: translateZ(0); // To prevent overflow on growFromCenter animation
`;

const MagicDot = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  animation: ${growFromCenter} 1s forwards ease-in;
  animation-delay: 0.3s;
  z-index: 1;
  overflow: hidden;
`;

const HomeButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 160px;
`;

const Logo = styled(Text)`
  font-size: 80px;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 2;
  animation-name: ${bounceInDown};
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const BottomFixed = styled(FlexBox)`
  position: fixed;
  bottom: 24px;
  z-index: 2;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 0.7s;
`;

const App = () => {
  const navigate = useNavigate();
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
        <BottomFixed className="animate__animated animate__fadeIn" gap="10px">
          <HomeButton text="Login" onClick={() => navigate('/login')} />
          <HomeButton text="Register" onClick={() => navigate('/register')} />
        </BottomFixed>
      ) : null}
    </Container>
  );
};

export default App;
