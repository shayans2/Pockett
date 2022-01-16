import styled from 'styled-components';

interface InputProps {
  large?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: 20px 20px;
  border-radius: 18px;
  width: ${({ large }) => (large ? '100%' : 'auto')};
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.lightGreyTransparent};
  color: ${({ theme }) => theme.colors.lightGrey};
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
