import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from '@hooks/useForm';
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

const Register = () => {
  const navigate = useNavigate();
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

export default Register;
