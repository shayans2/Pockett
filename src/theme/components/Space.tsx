import styled from 'styled-components';
import { SpaceSize } from '~types/theme';

interface SpaceProps {
  size: SpaceSize;
}

const decideSize = (size: SpaceSize) => {
  if (size === 'xs') return '2px';
  if (size === 'sm') return '4px';
  if (size === 'md') return '10px';
  if (size === 'lg') return '15px';
  if (size === 'xl') return '20px';
  if (size === '2xl') return '32px';
  else return size;
};

export const Space = styled.div<SpaceProps>`
  margin: ${({ size }) => decideSize(size)};
`;

Space.defaultProps = {
  size: 'sm',
};
