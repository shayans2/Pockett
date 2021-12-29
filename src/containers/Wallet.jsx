import React from 'react';
import styled from 'styled-components';
import { useModal } from '@hooks/useModal';
import TransactionsItem from '@components/TransactionsItem';
import Ham from '@components/HamburgerMenu';
import { Text, Space, FlexBox, Modal, Add, Hamburger } from '@theme';
import { useOnClickOutside } from '@hooks/useOnClickOutside';

const Container = styled.div`
  background-color: #14242a;
  height: 100%;
  padding: 0px 16px;
  overflow: scroll;
`;

const AddAmount = React.lazy(() => import('@components/Add'));

const Wallet = () => {
  const AddModal = useModal(AddAmount);
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  React.useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <Container>
      <FlexBox alignItems="center" justify="space-between">
        <div ref={node}>
          <Hamburger open={open} setOpen={setOpen} />
          <Ham open={open} setOpen={setOpen} />
        </div>
        <Text color="primary" size="xl" as="h1" margin="15px">
          Wallet
        </Text>
        <div></div>
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
