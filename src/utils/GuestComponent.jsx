import PropTypes from "prop-types";

const GuestComponent = ({ children }) => {
  const isTokenValid = localStorage.getItem("token") !== null;
  if (!isTokenValid) {
    return children;
  }

  return null;
};

GuestComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestComponent;
