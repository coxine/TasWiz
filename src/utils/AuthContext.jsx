import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import config from "../config/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const isTokenValid = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${config.backendUrl}/api/isTokenValid`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("请求失败", error);
      return false;
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        `${config.backendUrl}/api/login`,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        console.log("登录成功");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        alert("登录失败，请重试");
        throw new Error("登录失败，请重试");
      }
    } catch (error) {
      alert("登录失败，请重试");
      throw new Error("登录失败，请重试", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }; const register = async (username, password) => {
    try {
      const response = await axios.post(
        `${config.backendUrl}/api/register`,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        console.log("注册成功");
      } else {
        alert("注册失败，请重试");
        throw new Error("注册失败，请重试");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("用户名已存在");
        throw new Error("用户名已存在");
      } else {
        alert("注册失败，请重试");
        throw new Error("注册失败，请重试");
      }
    }
  };



  return (
    <AuthContext.Provider value={{ register, login, logout, isTokenValid }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
