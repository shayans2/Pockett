import styled from 'styled-components';

const decideSize = (size) => {
  if (size === 'xs') return '2px';
  if (size === 'sm') return '4px';
  if (size === 'md') return '10px';
  if (size === 'lg') return '15px';
  if (size === 'xl') return '20px';
  else return size;
};

export const Space = styled.div`
  margin: ${({ size }) => decideSize(size)};
`;

Space.defaultProps = {
  size: 'sm',
};
