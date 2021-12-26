import styled, { keyframes } from 'styled-components';

const preventAutofill = keyframes`
  0%,100% {
        color: #666;
        background: transparent;
    }
`;

export const Input = styled.input`
  padding: 20px 20px;
  border-radius: 18px;
  width: ${({ large }) => (large ? '100%' : 'auto')};
  border: 2px solid #a8b2b7;
  background-color: rgba(168, 178, 183, 0.05);
  color: #a8b2b7;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ::placeholder {
    color: #a8b2b7;
  }
`;
// export const Input = ({ ...props }) => {
//   return <StyledInput {...props} />;
// };
