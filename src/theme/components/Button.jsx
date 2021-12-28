import React from 'react';
import styled from 'styled-components';
import { Spinner } from './Spinner';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 20px 30px;
  width: ${({ large }) => (large ? '100%' : 'fit-content')};
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border: none;
  border-radius: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Button = ({ text, isLoading, ...props }) => {
  return (
    <StyledButton {...props}>{isLoading ? <Spinner /> : text}</StyledButton>
  );
};
