import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '@components/common/PrivateRoute';
import { RouteLoading } from '@components/common/RouteLoading';

import { Private } from '@containers/Private';

const App = React.lazy(() => import('@containers/App'));
const Login = React.lazy(() => import('@containers/Login'));
const Register = React.lazy(() => import('@containers/Register'));

export const Routes = () => {
  return (
    <React.Suspense fallback={<RouteLoading />}>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

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
    </React.Suspense>
  );
};
