import * as React from 'react';
import styled from 'styled-components';

import { Text, FlexBox, CloseIcon } from '@theme';

const MobileViewContainer = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.primaryBG};
  height: 100%;
  align-self: flex-end;
`;

const CloseIconWrapper = styled.div`
  padding: 50px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

interface DesktopViewProps {
  setIsDesktopView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DesktopView: React.FC<DesktopViewProps> = ({
  setIsDesktopView,
}) => {
  return (
    <MobileViewContainer
      alignItems="center"
      justify="center"
      direction="column"
    >
      <CloseIconWrapper onClick={() => setIsDesktopView(false)}>
        <CloseIcon />
      </CloseIconWrapper>
      <Text color="white" weight="bold" size="larger" padding="50px 0">
        Please use mobile view to have better experience...
      </Text>
    </MobileViewContainer>
  );
};
