import * as React from "react";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  AppRegistration,
  Dashboard,
  Home,
  Login,
  Logout,
  Person,
} from "@mui/icons-material";
import GuestComponent from "../utils/GuestComponent";
import { Link } from "@mui/material";
import ProtectedComponent from "../utils/ProtectedComponent";
import UserMenu from "./UserMenu";
import { useAuth } from "../utils/AuthContext";

export default function Header() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TasWiz
          </Typography>
          <ProtectedComponent>
            <UserMenu />
          </ProtectedComponent>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
