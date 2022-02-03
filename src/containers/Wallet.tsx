import React from 'react';
import styled from 'styled-components';

import { useQuery, useMutation } from 'react-query';
import { request, authService } from '@api';

import { useModal } from '@hooks/useModal';
import { TransactionsItem } from '@components/TransactionItem';
import { Header } from '@components/common/Header';

const AddTransaction = React.lazy(() => import('@components/AddTransaction'));

import { Text, Space, FlexBox, Modal, Spinner } from '@theme';
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

const SpinnerWrapper = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.primaryBG};
  height: 200px;
`;

const Wallet = () => {
  const addTransactionModal = useModal('add-transaction-modal');
  const selectWalletModal = useModal('add-transaction-modal2');
  const user = authService.getUser();
  const defaultWalletId = user.data.defaultWallet;

  const transactions = useQuery('transactions', () =>
    request('getTransactions', { urlParams: { id: defaultWalletId } }),
  );

  const addTransaction = useMutation((data) => {
    return request('addTransaction', { data });
  });

  React.useEffect(() => {
    if (transactions.data?.data.transactions.length === 0)
      setTimeout(() => addTransactionModal.open(), 500);
  }, [transactions.data?.data.transactions.length]);

  React.useEffect(() => {
    if (addTransaction.isSuccess) transactions.refetch();

    return () => {
      transactions.remove();
    };
  }, [addTransaction.isSuccess]);

  return (
    <Container>
      <Header action={selectWalletModal.open} hasHamburger>
        <>Wallet</>
      </Header>
      <Space size="2xl" />
      <FlexBox alignItems="center" justify="space-between">
        <Text color="white" weight="bold" size="body">
          Transactions
        </Text>
        {transactions.data?.data?.wallet.balance ? (
          <Text color="white" weight="light" size="body">
            Balance: {transactions.data.data.wallet.balance.toLocaleString()}{' '}
            <Text color="white" as="span">
              {constants.IRT}
            </Text>
          </Text>
        ) : null}
      </FlexBox>
      <Space size="md" />

      {transactions.isLoading ? (
        <SpinnerWrapper alignItems="center" justify="center">
          <Spinner />
        </SpinnerWrapper>
      ) : transactions.data.data.transactions.length ? (
        transactions.data.data.transactions.map((transaction) => (
          <TransactionsItem
            key={transaction.id}
            {...transaction}
            type={transaction.type === 0 ? constants.EARNED : constants.SPENT}
          />
        ))
      ) : (
        <Text
          color="white"
          weight="light"
          size="body"
          align="center"
          margin="50px 0px"
        >
          No transactions yet
        </Text>
      )}

      <Modal
        onClose={selectWalletModal.close}
        isOpen={selectWalletModal.isOpen}
        minHeight={0} // To be removed
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
        <React.Suspense
          fallback={
            <SpinnerWrapper alignItems="center" justify="center">
              .
            </SpinnerWrapper>
          }
        >
          <AddTransaction
            modal={addTransactionModal}
            addTransaction={addTransaction}
          />
        </React.Suspense>
      </Modal>
    </Container>
  );
};

export default Wallet;
