import React from 'react';
import styled from 'styled-components';
import { Text, Space, FlexBox } from '@theme';

const ItemContainer = styled.div`
  height: 60px;
  border-bottom: 1px solid #ffffff40;
  padding: 8px 8px 0px 8px;
`;

const TransactionsItem = ({
  type = 'earn',
  des = 'Empty',
  date = '12/28/2021, 6:37:17 PM',
  amount = '1$',
}) => {
  return (
    <ItemContainer alignItems="center" justify="center">
      <FlexBox alignItems="center" justify="space-between">
        <Text color="white" weight="bold">
          {type}
        </Text>
        <Text color={type === 'earn' ? 'white' : 'primary'} as="span">
          {amount}
        </Text>
      </FlexBox>
      <Space size="md" />
      <FlexBox alignItems="center" justify="space-between">
        <Text
          color={type === 'earn' ? 'white' : 'primary'}
          weight="light"
          as="span"
        >
          {date}
        </Text>
        <Text color="white" weight="light">
          {des}
        </Text>
      </FlexBox>
    </ItemContainer>
  );
};

export default TransactionsItem;
