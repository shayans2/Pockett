import React from 'react';
import { Navigate } from 'react-router-dom';
import { authService } from '@api';

export const PrivateRoute = ({ children }) => {
  const currentUser = authService.getCurrentUser();

  return currentUser ? children : <Navigate to="/login" />;
};
