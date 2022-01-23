import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { isAndroid } from 'react-device-detect';

import { useForm } from '@hooks/useForm';
import { useRegister } from '@hooks/requests/useRegister';
import { useToast } from '@contexts/Toast';

import { Toast } from '@components/common/Toast';

import { Button, Input, Text, Space, FlexBox, ChevronLeft } from '@theme';
import { registerFormValidation } from 'src/constants/formValidations';
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

const Register = () => {
  const navigate = useNavigate();
  const { isToastVisible } = useToast();

  const register = useRegister();

  React.useEffect(() => {
    if (authService.getUser()) navigate('/wallet');
  }, []);

  const form = useForm(
    {
      initialValues: {
        email: '',
        username: '',
        password: '',
      },
      validationSchema: {
        email: registerFormValidation.email,
        username: registerFormValidation.username,
        password: registerFormValidation.password,
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
        <Text color="error" margin="15px 5px">
          {form.errors.email}
        </Text>
        <Input
          name="username"
          placeholder="Username"
          type="text"
          onChange={form.handleChange}
          value={form.values.username}
          autoCapitalize="none"
          large
        />
        <Space size="md" />
        <Text color="error" margin="15px 5px">
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
        <Text color="error" margin="15px 5px">
          {form.errors.password}
        </Text>
        <BottomFixed>
          <Text color="white" align="center">
            Already have an account?{' '}
            <Text
              color="white"
              weight="bold"
              onClick={() => navigate('/login')}
              as="span"
            >
              Login
            </Text>
          </Text>
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
