import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = false; // Aqui você pode usar o estado de autenticação real
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
