import * as React from "react";
import {
  AddCircle,
  Dashboard,
  FileDownload,
  Home,
  Logout,
  Password,
  Person,
  Tune,
} from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NewProjectDialog from "./dialog/NewProjectDialog";
import { getProjects } from "../utils/Project";
import { useAuth } from "../utils/AuthContext";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };
  const handleDownloadProjects = async () => {
    const result = await getProjects();
    const username = localStorage.getItem("username");
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const data = JSON.stringify(result.data, null, 2);
    const blob = new Blob([data], { type: "text/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${username}-${date}-${time}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Add a new project
  const [newProjectDialogOpen, setNewProjectDialogOpen] = React.useState(false);
  const handleNewProjectDialogOpen = () => {
    setNewProjectDialogOpen(true);
  }
  const handleNewProjectDialogClose = () => {
    setNewProjectDialogOpen(false);
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={menuOpen ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<Tune />}
      >
        操作中心
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem disableRipple>
          <Person />
          {`当前用户：${localStorage.getItem("username")}`}
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        {window.location.pathname !== "/" && (
          <MenuItem
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <Home />
            首页
          </MenuItem>
        )}

        {window.location.pathname !== "/dashboard" && (
          <MenuItem
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          >
            <Dashboard />
            看板
          </MenuItem>
        )}

        {window.location.pathname === "/dashboard" && (
          <div>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={handleNewProjectDialogOpen}
            >
              <AddCircle />
              新增项目
            </MenuItem>
            <MenuItem
              onClick={handleDownloadProjects}
            >
              <FileDownload />
              导出所有项目
            </MenuItem>
          </div>
        )
        }

        <Divider sx={{ my: 0.5 }} />

        <MenuItem
          onClick={() => {
            window.location.href = "/change-password";
          }}
        >
          <Password />
          更改密码
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Logout />
          登出
        </MenuItem>
      </StyledMenu >
      <NewProjectDialog
        open={newProjectDialogOpen}
        handleClose={handleNewProjectDialogClose}
      />
    </div >
  );
}
