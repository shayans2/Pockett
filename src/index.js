import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ToastProvider } from './contexts/Toast';
import { Routes } from './routes';

import { GlobalStyles, themeConfig } from '@theme';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={themeConfig}>
      <ToastProvider>
        <GlobalStyles />
        <Routes />
      </ToastProvider>
    </ThemeProvider>
  </QueryClientProvider>,

  document.getElementById('app'),
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
