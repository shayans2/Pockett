import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  // Private condition * Needs to be changed *
  return false ? children : <Navigate to="/" />;
};
