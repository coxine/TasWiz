import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

const ProtectedComponent = ({ children }) => {
    const { isTokenValid } = useAuth();
    if (!isTokenValid) {
        return null;
    }

    return children;
};

ProtectedComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedComponent;
