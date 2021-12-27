import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from './routes';

import { GlobalStyles, themeConfig } from '@theme';
import 'animate.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </QueryClientProvider>,

  document.getElementById('app'),
);

module.hot.accept(); // Hot Module Replacement

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/pwabuilder-sw.js');
  });
}
