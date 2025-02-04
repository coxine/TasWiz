import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./utils/AuthContext";
import ChangePasswordPage from "./pages/auth/ChangePassword";
import DashboardPage from "./pages/Dashboard";
import Footer from "./components/Footer";
import GuestRoute from "./utils/GuestRoute";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import React from "react";
import SignInPage from "./pages/auth/SignIn";
import SignUpPage from "./pages/auth/SignUp";

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signin"
            element={
              <GuestRoute>
                <SignInPage />
              </GuestRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <GuestRoute>
                <SignUpPage />
              </GuestRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="change-password"
            element={
              <ProtectedRoute>
                <ChangePasswordPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
};

export default App;
