import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./utils/AuthContext";
import DashboardPage from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import React from "react";
import SignInPage from "./pages/auth/SignIn";
import SignUpPage from "./pages/auth/SignUp";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
