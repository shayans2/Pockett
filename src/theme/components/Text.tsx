import styled from 'styled-components';
import { themeConfig } from '../config';

interface TextProps {
  color: keyof typeof themeConfig.colors;
  size: keyof typeof themeConfig.fontSize;
  weight: keyof typeof themeConfig.fontWeight;
  lh?: string;
  align: 'left' | 'center' | 'right';
  margin?: string;
  padding?: string;
}

export const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ theme, weight }) => theme.fontWeight[weight]};
  line-height: ${({ lh }) => lh};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

Text.defaultProps = {
  margin: '0',
  padding: '0',
};
