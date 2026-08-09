import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    // Redirect them to login, but remember where they were trying to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user exists, let them through to the child routes!
  return <Outlet />;
};

export default ProtectedRoute;