import React from 'react';
import styled from 'styled-components';
import Joi from 'joi';

import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@hooks/useForm';

import { useToast } from '@contexts/Toast';
import { Toast } from '@components/common/Toast';

import { Button, Input, Text, Space, FlexBox, ChevronLeft } from '@theme';
import { Request, authService } from '@api';

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
  const navigate = useNavigate();
  const { isToastVisible, showToast } = useToast();

  const login = useMutation((data) => {
    return Request('login', {
      data,
    });
  });

  React.useEffect(() => {
    if (authService.getUser()) navigate('/wallet');
  }, []);

  React.useEffect(() => {
    if (login.isError) showToast();

    if (login.isSuccess) {
      authService.setUser(login.data.data);
      navigate('/wallet');
    }
  }, [login.isSuccess, login.isError]);

  const form = useForm(
    {
      initialValues: {
        id: '',
        password: '',
      },
      validationSchema: {
        id: Joi.string().trim().min(3).max(20).required().messages({
          'string.base': `Email or username should be a type of string.`,
          'string.empty': `You shouldn't leave this field empty.`,
          'string.min': `Email or username too small.`,
          'string.max': `Email or username too long!`,
          'any.required': `Email or username is required.`,
        }),
        password: Joi.string().trim().min(3).required().messages({
          'string.base': `Password should be a type of string.'`,
          'string.empty': `You shouldn't leave this field empty.`,
          'string.min': `Password too weak.`,
          'string.max': `Password too long!`,
          'any.required': `Password is required.`,
        }),
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
          name="id"
          placeholder="Email or username"
          type="text"
          onChange={form.handleChange}
          value={form.values.username}
          autoCapitalize="none"
          large
        />
        <Text color="error" margin="15px 5px" isVisible={form.errors.id}>
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

        <Text color="error" margin="15px 5px" isVisible={form.errors.password}>
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
