import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import config from "../config/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    AuthProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (username, password) => {
        const response = await fetch(`${config.backendUrl}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            setIsAuthenticated(true);
            return true;
        } else {
            console.error("登录失败");
            return false;
        }
    };
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
