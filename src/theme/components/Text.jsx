import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ theme, weight }) => theme.fontWeight[weight]};
  line-height: ${({ lh }) => lh};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

Text.defaultProps = {
  margin: 0,
  padding: 0,
};
