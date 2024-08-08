import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { useAuth } from "./AuthContext";

const GuestRoute = ({ children }) => {
  const { isTokenValid } = useAuth();
  if (!isTokenValid) {
    return children;
  }

  return <Navigate to="/dashboard" />;
};

GuestRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default GuestRoute;
