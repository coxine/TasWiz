import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const isTokenValid = localStorage.getItem("token") !== null;
  if (!isTokenValid) {
    return <Navigate to="/signin" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
