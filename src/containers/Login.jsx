import React from 'react';
import styled from 'styled-components';

import { useForm } from '@hooks/useForm';

import { FlexBox, Button, Input, Text, Space } from '@theme';

const Container = styled.div`
  background-color: #14242a;
  min-height: 100vh;
  height: 100%;
  padding: 0px 16px;
`;

const TextContainer = styled.div`
  padding-top: 8vh;
  margin-bottom: 12vh;
`;

const BottomFixed = styled.div`
  position: fixed;
  bottom: 16px;
`;

export const Login = () => {
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
        <Text color="white" size="4xl" as="h1" margin="15px 0px">
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
            <Text color="white" weight="bold" as="span">
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
