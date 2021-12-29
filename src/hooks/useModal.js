import React from 'react';

export const useModal = (name) => {
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
