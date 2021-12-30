import React from 'react';
import styled from 'styled-components';

import { HamburgerMenu } from '@components/HamburgerMenu';

import { Text, FlexBox, HambugerIcon } from '@theme';

const HeaderContainer = styled(FlexBox)`
  position: sticky;
  top: 0px;
  padding: 20px 0px;
  background-color: ${({ theme }) => theme.colors.primaryBG};
`;
const EmptySpace = styled.div`
  // 😂 Tof mal
  min-width: 15px;
`;

export const Header = ({ children, hasHamburger, action = () => {} }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <HeaderContainer alignItems="center" justify="space-between">
        <EmptySpace />
        <Text color="white" onClick={action} size="large" as="h2">
          {children}
        </Text>
        {hasHamburger ? (
          <div onClick={() => setIsOpen(!isOpen)}>
            <HambugerIcon />
          </div>
        ) : (
          <EmptySpace />
        )}
      </HeaderContainer>
      {hasHamburger ? (
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : null}
    </>
  );
};
