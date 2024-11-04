import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = false; 
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
