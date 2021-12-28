import React from 'react';
import styled from 'styled-components';
import { Add } from '@components/Icons/Add';
import { Humburger } from '@components/Icons/Humburger';
import TransactionsItem from '@components/TransactionsItem';
import { Button, Input, Text, Space, FlexBox } from '@theme';

const Container = styled.div`
  background-color: #14242a;
  height: 100%;
  padding: 0px 16px;
  overflow: scroll;
`;

const Wallet = () => {
  return (
    <Container>
      <FlexBox alignItems="center" justify="space-between">
        <Add />
        <Text color="primary" size="xl" as="h1" margin="15px">
          Wallet
        </Text>
        <Humburger />
      </FlexBox>

      <Space size="lg" />
      <FlexBox alignItems="center">
        <Text color="lightPrimary" font-weight="bold">
          Transactions
        </Text>
        <Text color="lightPrimary" font-weight="light" as="span">
          ($):
        </Text>
      </FlexBox>
      <Space size="lg" />
      <TransactionsItem />
    </Container>
  );
};

export default Wallet;
