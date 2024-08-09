import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import ProtectedComponent from "../utils/ProtectedComponent";
import UserMenu from "./UserMenu";

export default function Header() {

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
