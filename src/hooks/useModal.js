import React from 'react';

export const useModal = (name) => {
  const [isModalOpen, setIsModalOpen] = React.useState({
    [name]: false,
  });

  const openModal = () => {
    setIsModalOpen((prevState) => ({ ...prevState, [name]: true }));
  };

  const closeModal = () => {
    setIsModalOpen((prevState) => ({ ...prevState, [name]: false }));
  };

  return {
    openModal,
    closeModal,
    isOpen: isModalOpen[name],
  };
};
