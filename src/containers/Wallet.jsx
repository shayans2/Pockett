import React from 'react';
import styled from 'styled-components';
import { useModal } from '@hooks/useModal';
import TransactionsItem from '@components/TransactionsItem';

import { Text, Space, FlexBox, Modal, Add, Hamburger } from '@theme';

const Container = styled.div`
  background-color: #14242a;
  height: 100%;
  padding: 0px 16px;
  overflow: scroll;
`;

const AddAmount = React.lazy(() => import('@components/Add'));

const Wallet = () => {
  const AddModal = useModal(AddAmount);

  return (
    <Container>
      <FlexBox alignItems="center" justify="space-between">
        <div onClick={AddModal.open}>
          <Add onClick={AddModal.open} />
        </div>
        <Text color="primary" size="xl" as="h1" margin="15px">
          Wallet
        </Text>
        <Hamburger />
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

      <Modal onClose={AddModal.close} isOpen={AddModal.isOpen}>
        <div style={{ height: '68vh' }}>
          <AddAmount />
        </div>
      </Modal>
    </Container>
  );
};

export default Wallet;
