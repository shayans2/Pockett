import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
// import { PrivateRoute } from '@components/common/PrivateRoute';
import { Loading } from '@components/common/Loading';

// import { Private } from '@containers/Private';

const App = React.lazy(() => import('@containers/App'));
const Login = React.lazy(() => import('@containers/Login'));
const Register = React.lazy(() => import('@containers/Register'));
const Wallet = React.lazy(() => import('@containers/Wallet'));

export const Routes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />

          {/* <Route
            path="private"
            element={
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            }
          /> */}
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};
