import React from 'react';

const ToastContext = React.createContext();

export const useToast = () => {
  return React.useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState('');

  const showToast = (message = 'Something went wrong!') => {
    setIsToastVisible(true);
    setToastMessage(message);
  };

  const closeToast = () => {
    setIsToastVisible(false);
  };

  return (
    <ToastContext.Provider
      value={{
        showToast,
        closeToast,
        isToastVisible,
        toastMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
