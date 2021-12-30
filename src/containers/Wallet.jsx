import React from 'react';
import styled from 'styled-components';

import { useQuery, useMutation } from 'react-query';
import { authService } from '@api';
import { RouteLoading } from '@components/common/RouteLoading';
import axios from 'axios';
import { useModal } from '@hooks/useModal';
import { TransactionsItem } from '@components/TransactionItem';
import { Header } from '@components/common/Header';

const AddTransaction = React.lazy(() => import('@components/AddTransaction'));

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

const Wallet = () => {
  const addTransactionModal = useModal('add-transaction-modal');
  const selectWalletModal = useModal('add-transaction-modal2');
  const userJWT = authService.getJwt();
  const user = authService.getUser();
  const defaultWalletId = user.data.defaultWallet;

  const transactions = useQuery('transactions', () =>
    axios.get(`https://pockett.bamdad.dev/api/transaction/${defaultWalletId}`, {
      headers: { Authorization: userJWT },
    }),
  );

  const addTransaction = useMutation((data) => {
    return axios.post('https://pockett.bamdad.dev/api/transaction/', data, {
      headers: { Authorization: userJWT },
    });
  });

  React.useEffect(() => {
    if (addTransaction.isSuccess) transactions.refetch();

    return () => {
      transactions.remove();
    };
  }, [addTransaction.isSuccess]);

  // if (addTransaction.isSuccess) {
  // console.log('SUCCESS');
  // }
  // if (transactions.isLoading || addTransaction.isLoading)
  //   return <RouteLoading />;
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

      {transactions.isLoading ? (
        <RouteLoading />
      ) : (
        transactions.data.data.map((transaction) => (
          <TransactionsItem
            key={transaction.id}
            {...transaction}
            type={transaction.type === 0 ? constants.EARNED : constants.SPENT}
          />
        ))
      )}

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
        {/* <React.Suspense fallback="Loading"> */}
        <AddTransaction
          modal={addTransactionModal}
          addTransaction={addTransaction}
        />
        {/* </React.Suspense> */}
      </Modal>
    </Container>
  );
};

export default Wallet;
