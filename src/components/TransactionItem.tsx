import React from 'react';
import styled from 'styled-components';
import { Text, Space, FlexBox } from '@theme';
import { constants } from '@constants';

const ItemContainer = styled.div`
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.separator};
  padding: 8px 8px 0px 8px;
`;

export const TransactionsItem = ({
  type = constants.SPENT,
  description = 'Here goes description',
  // date = '12/28/2021, 6:37:17 PM',
  amount = '1$',
}) => {
  return (
    <ItemContainer>
      <FlexBox alignItems="center" justify="space-between">
        <Text
          color={type === constants.SPENT ? 'primary' : 'secondary'}
          weight="bold"
        >
          {type}
        </Text>
        <Text color={type === constants.SPENT ? 'primary' : 'secondary'}>
          {amount.toLocaleString()}{' '}
          <Text color="white" as="span">
            {constants.IRT}
          </Text>
        </Text>
      </FlexBox>
      <Space size="md" />
      <FlexBox alignItems="center" justify="flex-start">
        <Text color="white" weight="light">
          {description}
        </Text>
        {/* <Text color="white" weight="light">
          {date}
        </Text> */}
      </FlexBox>
    </ItemContainer>
  );
};
