import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { useAuth } from './AuthContext';



const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;