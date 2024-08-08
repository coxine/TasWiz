import * as React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { GitHub, Home } from "@mui/icons-material";
import { Link } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TasWiz
          </Typography>
          <Link href="https://github.com/coxine/TasWiz">
            <IconButton>
              <GitHub />
            </IconButton>
          </Link>
          <Link href="/">
            <IconButton>
              <Home />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
