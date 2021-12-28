import React, { useState } from 'react';
import styled from 'styled-components';
import { Add } from '@components/Icons/Add';
import { Humburger } from '@components/Icons/Humburger';
import BottomSheet from '@components/common/BottomSheet';
import TransactionsItem from '@components/TransactionsItem';
import { Text, Space, FlexBox } from '@theme';

const Container = styled.div`
  background-color: #14242a;
  height: 100%;
  padding: 0px 16px;
  overflow: scroll;
`;

let Component;

const Wallet = () => {
  const [sheet, setSheet] = useState(false);

  const openDialog = (name) => {
    Component = React.lazy(() => import(`../components/${name}`));
    console.log('hey', Component);
    setSheet(true);
  };

  const closeButtomSheet = () => {
    setSheet(false);
  };

  return (
    <Container>
      <FlexBox alignItems="center" justify="space-between">
        <Add />
        <Text
          onClick={() => openDialog('Hum')}
          color="primary"
          size="xl"
          as="h1"
          margin="15px"
        >
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
      {sheet ? (
        <BottomSheet onClose={() => closeButtomSheet(false)}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Component
              onClose={async () => {
                closeButtomSheet();
              }}
            />
          </React.Suspense>
        </BottomSheet>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Wallet;
