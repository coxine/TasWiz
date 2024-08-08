import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

const GuestComponent = ({ children }) => {
    const { isTokenValid } = useAuth();
    if (!isTokenValid) {
        return children;
    }

    return null;
};

GuestComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GuestComponent;
