import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 20px 30px;
  width: ${({ large }) => (large ? '90vw' : 'fit-content')};
  background-color: #9bbc90;
  border: none;
  border-radius: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Button = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};
