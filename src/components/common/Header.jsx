import React from 'react';
import styled from 'styled-components';

import { Text, FlexBox, Hamburger } from '@theme';

const EmptySpace = styled.div`
  // 😂 Tof mal
  min-width: 15px;
`;

export const Header = ({ children, action = () => {} }) => {
  return (
    <FlexBox alignItems="center" justify="space-between">
      <EmptySpace />
      <Text color="white" onClick={action} size="large" as="h2">
        {children}
      </Text>
      <Hamburger />
    </FlexBox>
  );
};
