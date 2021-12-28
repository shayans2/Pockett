import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@hooks/useForm';

import { useToast } from '@contexts/Toast';
import { Toast } from '@components/common/Toast';

import { ChevronLeft } from '@components/Icons/ChevronLeft';
import { Button, Input, Text, Space, FlexBox } from '@theme';

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
  position: absolute;
  top: auto;
  bottom: 0%;
  height: auto;
  padding: 0px 16px 24px;
  left: 0;
  right: 0;
`;

const Login = () => {
  const { isToastVisible, showToast } = useToast();
  const navigate = useNavigate();
  const form = useForm(
    {
      initialValues: {
        username: '',
        password: '',
      },
    },
    {
      onSubmit: ({ values }) => {
        console.log(values, 'Values!');
        showToast();
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
        <Text color="white" size="2xl" margin="15px 0px" as="h1">
          Let's sign you in.
        </Text>
        <Text color="white" weight="regular" as="h2">
          Welcome back. <br />
          You've been missed!
        </Text>
      </TextContainer>
      <form onSubmit={form.handleSubmit}>
        <Input
          name="username"
          placeholder="Phone, email or username"
          type="text"
          onChange={form.handleChange}
          value={form.values.username}
          large
        />
        <Space size="md" />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          onChange={form.handleChange}
          value={form.values.password}
          large
        />
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
          <Button large type="submit" text="Sign In" />
        </BottomFixed>
      </form>
      {isToastVisible ? <Toast /> : null}
    </Container>
  );
};

export default Login;
