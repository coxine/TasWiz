import * as React from "react";




import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { AppRegistration, Dashboard, Home, Login, Logout } from "@mui/icons-material";
import GuestComponent from "../utils/GuestComponent";
import { Link } from "@mui/material";
import ProtectedComponent from "../utils/ProtectedComponent";


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TasWiz
          </Typography>
          <Link href="/">
            <Tooltip title="主页">
              <IconButton>
                <Home />
              </IconButton>
            </Tooltip>
          </Link>
          <GuestComponent>
            <Link href="/signin">
              <Tooltip title="登录">
                <IconButton>
                  <Login />
                </IconButton>
              </Tooltip>
            </Link>
            <Link href="/signup">
              <Tooltip title="注册">
                <IconButton>
                  <AppRegistration />
                </IconButton>
              </Tooltip>
            </Link>
          </GuestComponent>
          <ProtectedComponent>
            <Link href="/dashboard">
              <Tooltip title="看板">
                <IconButton>
                  <Dashboard />
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip title="登出">
              <IconButton onClick={() => {

                window.location.href = "/";
              }}>
                <Logout />
              </IconButton>
            </Tooltip>
          </ProtectedComponent>
        </Toolbar>
      </AppBar>
    </Box >
  );
}
