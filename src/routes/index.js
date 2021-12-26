import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import { App } from '@containers/App';
import { Private } from '@containers/Private';
import { Login } from '@containers/Login';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="private"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};
