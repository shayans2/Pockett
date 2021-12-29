import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Space, FlexBox, Button, Input } from '@theme';

const AddContainer = styled.div`
  background-color: #274c57;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px;
  overflow: scroll;
`;

const InputDes = styled(Input)`
  height: 100px;
  color: '#a8b2b7';
`;
const InputSpend = styled(Input)`
  color: '#a8b2b7';
  border: 1px solid #e76f51;
`;

const InputDesSpend = styled(Input)`
  height: 100px;
  color: '#a8b2b7';
  border: 1px solid #e76f51;
`;

const EarnButton = styled(Button)`
  background-color: #2a9d8f;
  width: 160px;
  height: 50px;
  color: white;
`;
const SpendButton = styled(Button)`
  background-color: #e76f51;
  width: 160px;
  height: 50px;
  color: white;
`;

const BottomFixed = styled.div`
  position: absolute;
  top: auto;
  bottom: 0%;
  height: auto;
  padding: 0px 16px 24px;
  left: 0;
  right: 0;
`;
const Add = () => {
  const [type, setType] = useState('earn');
  return (
    <AddContainer>
      <Space size="md" />
      <FlexBox alignItems="center" justify="space-around" gap="16px">
        <EarnButton
          text="Earn"
          onClick={() => {
            setType('earn');
          }}
        />
        <SpendButton
          text="Spend"
          onClick={() => {
            setType('spend');
          }}
        />
      </FlexBox>
      <Space size="md" />
      <Text color="white" size="xl" as="h1">
        {type === 'earn' ? 'Earn' : 'Spend'}
      </Text>
      <Space size="md" />
      {type === 'earn' ? (
        <>
          <Input
            name="amount"
            placeholder="Amount of your money you earn"
            type="number"
            // onChange={}
            // value={}
            large
          />
          <Space size="md" />
          <InputDes
            name="description"
            placeholder="Description"
            type="text"
            // onChange={}
            // value={}
            large
          />
        </>
      ) : (
        <>
          {' '}
          <InputSpend
            name="amount"
            placeholder="Amount of your money you Spend"
            type="number"
            // onChange={}
            // value={}
            large
          />
          <Space size="md" />
          <InputDesSpend
            name="description"
            placeholder="Description"
            type="text"
            // onChange={}
            // value={}
            large
          />
        </>
      )}
      <BottomFixed>
        <Space size="lg" />
        <Button type="submit" large text="Submit" />
      </BottomFixed>
    </AddContainer>
  );
};

export default Add;
