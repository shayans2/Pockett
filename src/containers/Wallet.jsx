import React from 'react';
import styled from 'styled-components';
import { useModal } from '@hooks/useModal';
import TransactionsItem from '@components/TransactionsItem';

import { Add } from '@components/Icons/Add';
import { Humburger } from '@components/Icons/Humburger';

import { Text, Space, FlexBox, Modal } from '@theme';

const Container = styled.div`
  background-color: #14242a;
  height: 100%;
  padding: 0px 16px;
  overflow: scroll;
`;

const Wallet = () => {
  const testModal = useModal('test');
  const test2Modal = useModal('test2');

  return (
    <Container>
      <FlexBox alignItems="center" justify="space-between">
        <Add />
        <Text
          onClick={() => testModal.openModal()}
          color="primary"
          size="xl"
          as="h1"
          margin="15px"
        >
          Wallet
        </Text>
        <Humburger />
      </FlexBox>
      <div onClick={() => test2Modal.openModal()}>Second Modal</div>
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

      <Modal onClose={() => test2Modal.closeModal()} isOpen={test2Modal.isOpen}>
        <div style={{ padding: ' 50px' }}>TEST 2</div>
      </Modal>

      <Modal onClose={() => testModal.closeModal()} isOpen={testModal.isOpen}>
        <div>TEST</div>
      </Modal>
    </Container>
  );
};

export default Wallet;
