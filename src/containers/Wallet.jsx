import React from 'react';
import styled from 'styled-components';

import { useModal } from '@hooks/useModal';
import { TransactionsItem } from '@components/TransactionItem';
import { Header } from '@components/common/Header';
const AddTransaction = React.lazy(() => import('@components/AddTransaction'));
import { authService } from '@api';
import { Text, Space, FlexBox, Modal } from '@theme';
import { constants } from '@constants';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBG};
  height: calc(100% - 80px);
  padding: 0px 16px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TransactionItemsContainer = styled.div`
  /* height: calc(100% - 180px);
  overflow: scroll; */
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

const Wallet = () => {
  const addTransactionModal = useModal('add-transaction-modal');
  const selectWalletModal = useModal('add-transaction-modal2');

  return (
    <Container>
      <Header action={selectWalletModal.open} hasHamburger>
        Wallet
      </Header>
      <Space size="32px" />
      <FlexBox alignItems="center">
        <Text color="white" weight="bold" size="body">
          Transactions
        </Text>
      </FlexBox>
      <Space size="md" />
      <TransactionItemsContainer>
        <TransactionsItem />
        <TransactionsItem type={constants.EARNED} />
        <TransactionsItem />
        <TransactionsItem />
        <TransactionsItem type={constants.EARNED} />
        <TransactionsItem />
        <TransactionsItem />
        <TransactionsItem type={constants.EARNED} />
        <TransactionsItem />
        <TransactionsItem type={constants.EARNED} />
      </TransactionItemsContainer>

      <Modal
        onClose={selectWalletModal.close}
        isOpen={selectWalletModal.isOpen}
      >
        <div style={{ padding: '100px 20px' }}>
          Here goes some cool wallet selection...
        </div>
      </Modal>

      <Modal
        onClose={addTransactionModal.close}
        isOpen={addTransactionModal.isOpen}
        minHeight="80px"
      >
        <React.Suspense fallback="Loading">
          <AddTransaction modal={addTransactionModal} />
        </React.Suspense>
      </Modal>
    </Container>
  );
};

export default Wallet;
