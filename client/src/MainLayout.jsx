// src/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Components/Sidebar";

const MainLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Cashly
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        isMobile={isMobile}
      />
      <main
        style={{
          flexGrow: 1,
          padding: theme.spacing(3),
          marginLeft: isMobile ? 0 : 240,
        }}
      >
        <Toolbar />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
