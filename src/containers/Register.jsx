import React from 'react';
import styled from 'styled-components';
import Joi from 'joi';

import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { useToast } from '@contexts/Toast';
import { useForm } from '@hooks/useForm';
import { Toast } from '@components/common/Toast';
import { Request, authService } from '@api';

import { Button, Input, Text, Space, FlexBox, ChevronLeft } from '@theme';

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

const Register = () => {
  const navigate = useNavigate();
  const { isToastVisible, showToast } = useToast();

  const register = useMutation((data) => {
    return Request('register', {
      data,
    });
  });

  React.useEffect(() => {
    if (authService.getUser()) navigate('/wallet');
  }, []);

  React.useEffect(() => {
    if (register.isError) showToast();

    if (register.isSuccess) {
      authService.setUser(register.data.data);
      navigate('/wallet');
    }
  }, [register.isSuccess, register.isError]);

  const form = useForm(
    {
      initialValues: {
        email: '',
        username: '',
        password: '',
      },
      validationSchema: {
        email: Joi.string().trim().min(3).max(20).required().messages({
          'string.base': `Email should be a type of string.`,
          'string.empty': `You shouldn't leave this field empty.`,
          'string.min': `Email too small.`,
          'string.max': `Email too long!`,
          'any.required': `Email is required.`,
        }),
        username: Joi.string()
          .alphanum()
          .trim()
          .min(3)
          .max(20)
          .required()
          .messages({
            'string.base': `Username should be a type of string.`,
            'string.empty': `You shouldn't leave this field empty.`,
            'string.alphanum': `Username should be alphanumerical.`,
            'string.min': `Username too small.`,
            'string.max': `Username too long!`,
            'any.required': `Username is required.`,
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
        register.mutate(values);
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
          Welcome To{' '}
          <Text color="primary" as="span">
            Pockett!
          </Text>
        </Text>
        <Text color="white" weight="regular" as="h2">
          Let's start our journey.
        </Text>
      </TextContainer>
      <form onSubmit={form.handleSubmit}>
        <Input
          name="email"
          placeholder="Email address"
          type="email"
          onChange={form.handleChange}
          value={form.values.email}
          large
        />
        <Space size="md" />
        <Text color="error" margin="15px 5px" isVisible={form.errors.password}>
          {form.errors.email}
        </Text>
        <Input
          name="username"
          placeholder="Username"
          type="text"
          onChange={form.handleChange}
          value={form.values.username}
          large
        />
        <Space size="md" />
        <Text color="error" margin="15px 5px" isVisible={form.errors.password}>
          {form.errors.username}
        </Text>
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
          <Space size="lg" />
          <Button
            type="submit"
            text="Register"
            isLoading={register.isLoading}
            large
          />
        </BottomFixed>
      </form>
      {isToastVisible ? <Toast /> : null}
    </Container>
  );
};

export default Register;
