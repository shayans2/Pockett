import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { authService } from '@api';

interface PrivateRouteProps {
  children: React.ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const currentUser = authService.getUser();

  return currentUser ? children : <Navigate to="/login" />;
};
