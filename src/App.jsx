import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./utils/AuthContext";
import DashboardPage from "./pages/Dashboard";
import GuestRoute from "./utils/GuestRoute";
import HomePage from "./pages/Home";
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
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={
            <GuestRoute>
              <SignInPage />
            </GuestRoute>
          } />

          <Route path="/signup" element={
            <GuestRoute>
              <SignUpPage />
            </GuestRoute>
          } />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
