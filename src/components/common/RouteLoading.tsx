import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '@theme';

const Container = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.primaryBG};
  height: 100%;
  padding: 0px 16px;
`;

export const RouteLoading = () => {
  return (
    <Container justify="center" alignItems="center">
      {/* <Text color="white" size="4xl" as="h2">
        Loading...
      </Text> */}
    </Container>
  );
};
