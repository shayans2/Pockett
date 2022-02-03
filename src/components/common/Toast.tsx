import * as React from 'react';
import styled from 'styled-components';
import { useToast } from '@contexts/Toast';

import { FlexBox, Text, CircleError } from '@theme';

const ToastContainer = styled(FlexBox)`
  position: absolute;
  right: 16px;
  bottom: 20vh;
  left: 16px;
  box-sizing: border-box;
  height: 56px;
  padding: 12px 16px 12px 12px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Toast = () => {
  const { toastMessage, closeToast } = useToast();

  React.useEffect(() => {
    setTimeout(closeToast, 2000);
  }, []);

  return (
    <ToastContainer justify="flex-start" alignItems="center">
      <CircleError />
      <Text size="regular" color="black" margin="0px 10px">
        {toastMessage}
      </Text>
    </ToastContainer>
  );
};
