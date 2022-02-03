import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { isAndroid } from 'react-device-detect';

import { useForm } from '@hooks/useForm';
import { useLogin } from '@hooks/requests/useLogin';
import { useToast } from '@contexts/Toast';

import { Toast } from '@components/common/Toast';

import { Button, Input, Text, Space, FlexBox, ChevronLeft } from '@theme';
import { loginFormValidation } from '@constants';
import { authService } from '@api';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBG};
  height: 100%;
  padding: 0px 16px;
`;

const TextContainer = styled.div`
  padding-top: 4vh;
  margin-bottom: 12vh;
`;

const BottomFixed = styled.div`
  position: ${isAndroid ? 'relative' : 'absolute'};
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  height: auto;
  padding: ${isAndroid ? '0px 0px 50px 0px' : '0px 16px 24px'};
  margin-top: ${isAndroid ? '30px' : 0};
`;

const Login = () => {
  const navigate = useNavigate();
  const { isToastVisible } = useToast();
  const login = useLogin();

  React.useEffect(() => {
    if (authService.getUser()) navigate('/wallet');
  }, []);

  const form = useForm(
    {
      initialValues: {
        id: '',
        password: '',
      },
      validationSchema: {
        id: loginFormValidation.id,
        password: loginFormValidation.password,
      },
    },
    {
      onSubmit: ({ values }) => {
        login.mutate(values);
      },
    },
  );

  return (
    <Container>
      <TextContainer>
        <FlexBox
          alignItems="center"
          justify="flex-start"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft />
        </FlexBox>
        <Text color="white" size="2xl" weight="bold" margin="15px 0px" as="h1">
          Let's sign you in.
        </Text>
        <Text color="white" size="larger" weight="regular" as="h2">
          Welcome back. <br />
          You've been missed!
        </Text>
      </TextContainer>
      <form onSubmit={form.handleSubmit}>
        <Input
          name="id"
          placeholder="Email or username"
          type="text"
          onChange={form.handleChange}
          value={form.values.username}
          autoCapitalize="none"
          large
        />
        <Text color="error" margin="15px 5px">
          {form.errors.id}
        </Text>
        <Space size="md" />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          onChange={form.handleChange}
          value={form.values.password}
          large
        />

        <Text color="error" margin="15px 5px">
          {form.errors.password}
        </Text>
        <BottomFixed>
          <Text color="white" align="center">
            Don't have an account?{' '}
            <Text
              color="white"
              weight="bold"
              onClick={() => navigate('/register')}
              as="span"
            >
              Register
            </Text>
          </Text>
          <Space size="lg" />
          <Button
            large
            type="submit"
            text="Sign In"
            isLoading={login.isLoading}
          />
        </BottomFixed>
      </form>
      {isToastVisible ? <Toast /> : null}
    </Container>
  );
};

export default Login;
