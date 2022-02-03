import * as React from 'react';

export const useModal = (name: string) => {
  const [isModalOpen, setIsModalOpen] = React.useState({
    [name]: false,
  });

  const open = () => {
    setIsModalOpen((prevState) => ({ ...prevState, [name]: true }));
  };

  const close = () => {
    setIsModalOpen((prevState) => ({ ...prevState, [name]: false }));
  };

  return {
    open,
    close,
    isOpen: isModalOpen[name],
  };
};
