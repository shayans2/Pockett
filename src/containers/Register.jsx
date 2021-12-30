import React from 'react';
import styled from 'styled-components';
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
    if (register.isError) showToast();

    if (register.isSuccess) {
      authService.loginWithJwt(register.data.data.token);
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
