import React from 'react';
import styled from 'styled-components';
import { useForm } from '@hooks/useForm';

import { Button, Input, Text, Space } from '@theme';

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

export const Register = () => {
  const form = useForm(
    {
      initialValues: {
        email: '',
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
        <Text color="white" size="3xl" margin="15px 0px" as="h1">
          Welcome To{' '}
          <Text color="primary" size="3xl" margin="15px 0px" as="span">
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
        <Input
          name="username"
          placeholder="Username"
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
          <Space size="lg" />
          <Button type="submit" large text="Register" />
        </BottomFixed>
      </form>
    </Container>
  );
};
