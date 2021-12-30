import React from 'react';
import styled from 'styled-components';

import { useForm } from '@hooks/useForm';
import { Text, Space, FlexBox, Button, Input } from '@theme';

import { constants } from '@constants';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkestBlue};
  height: 300px;
  padding: 10px 16px 24px 16px;
`;

const EarnButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 180px;
`;

const SpendButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 180px;
`;

const AddTransaction = ({ modal }) => {
  const [type, setType] = React.useState(null);

  const form = useForm(
    {
      initialValues: {
        amount: '',
        description: '',
      },
    },
    {
      onSubmit: ({ values }) => {
        console.log(values, type, 'Values!');
      },
    },
  );

  return (
    <Container
      onTouchEnd={!modal.isOpen ? modal.open : null}
      // onTouchMove={!modal.isOpen ? modal.open : null}
    >
      <Space size="xl" />
      <Text color="white" weight="bold">
        Add Transaction
      </Text>
      <Space size="32px" />
      <form onSubmit={form.handleSubmit}>
        <Input
          name="amount"
          placeholder="Amount 💸"
          inputmode="numeric"
          pattern="[0-9]*"
          type="text"
          onChange={form.handleChange}
          value={form.values.amount}
          large
        />
        <Space size="md" />
        <Input
          name="description"
          placeholder="Description"
          type="text"
          onChange={form.handleChange}
          value={form.values.description}
          large
        />

        <Space size="lg" />

        <FlexBox alignItems="center" justify="center" gap="12px">
          <EarnButton text="Earned" onClick={() => setType(constants.EARNED)} />
          <SpendButton text="Spent" onClick={() => setType(constants.SPENT)} />
        </FlexBox>
      </form>
    </Container>
  );
};

export default AddTransaction;
