import * as React from 'react';

interface ToastContextProps {
  showToast: (message?: string) => void;
  closeToast: () => void;
  isToastVisible: boolean;
  toastMessage: string;
}

const ToastContext = React.createContext<ToastContextProps | null>(null);

export const useToast = () => {
  return React.useContext(ToastContext);
};

interface ToastProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
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
