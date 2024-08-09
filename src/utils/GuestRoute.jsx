import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";


const GuestRoute = ({ children }) => {

  const isTokenValid = localStorage.getItem("token") !== null;
  if (!isTokenValid) {
    return children;
  }

  return <Navigate to="/dashboard" />;
};

GuestRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default GuestRoute;
