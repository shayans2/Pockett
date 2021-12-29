import React from 'react';
import styled from 'styled-components';

import { HamburgerMenu } from '@components/HamburgerMenu';

import { Text, FlexBox, HambugerIcon } from '@theme';

const EmptySpace = styled.div`
  // 😂 Tof mal
  min-width: 15px;
`;

export const Header = ({ children, hasHamburger, action = () => {} }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <FlexBox alignItems="center" justify="space-between">
      <EmptySpace />
      <Text color="white" onClick={action} size="large" as="h2">
        {children}
      </Text>
      {hasHamburger ? (
        <>
          <div isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <HambugerIcon />
          </div>

          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      ) : (
        <EmptySpace />
      )}
    </FlexBox>
  );
};
