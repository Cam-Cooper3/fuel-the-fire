// frontend/src/components/ProtectedRoute.tsx
// Prevents users from accessing the account page unless logged in

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    // show a loading spinner while checking auth state
    return <div>Loading...</div>;
  }

  return token ? <Outlet /> : <Navigate to="/auth" state={{ showLogin: true }} />;
};

export default ProtectedRoute;
