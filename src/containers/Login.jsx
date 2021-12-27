import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from '@hooks/useForm';
import { ChevronLeft } from '@components/Icons/ChevronLeft';
import { Button, Input, Text, Space, FlexBox } from '@theme';

const Container = styled.div`
  background-color: #14242a;
  height: 100%;
  padding: 0px 16px;
`;

const TextContainer = styled.div`
  padding-top: 4vh;
  margin-bottom: 12vh;
`;

const BottomFixed = styled.div`
  position: fixed;
  bottom: 16px;
`;

const Login = () => {
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
        <Text color="white" size="3xl" margin="15px 0px" as="h1">
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
              onClick={() => navigate('/private')}
              as="span"
            >
              Register
            </Text>
          </Text>
          <Space size="lg" />
          <Button type="submit" large text="Sign In" />
        </BottomFixed>
      </form>
    </Container>
  );
};

export default Login;
