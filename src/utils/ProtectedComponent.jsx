import PropTypes from "prop-types";

const ProtectedComponent = ({ children }) => {
  const isTokenValid = localStorage.getItem("token") !== null;
  if (!isTokenValid) {
    return null;
  }

  return children;
};

ProtectedComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedComponent;
