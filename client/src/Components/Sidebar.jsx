import { Link } from "react-router-dom";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReportIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle, isMobile }) => {
  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ mt: 7 }}>
        <ListItem
          button
          component={Link}
          to="/home"
          onClick={isMobile ? handleDrawerToggle : null}
          sx={{ my: 3, height: "60px" }} // Adjust height if needed
        >
          <ListItemIcon sx={{ minWidth: "40px", color: "black" }}>
            <HomeIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{ fontSize: "1.2rem" }} // Increase text size
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/reports"
          onClick={isMobile ? handleDrawerToggle : null}
          sx={{ my: 3, height: "60px" }} // Adjust height if needed
        >
          <ListItemIcon
            sx={{ minWidth: "40px", color: "black" }} // Adjust icon container width if needed
          >
            <ReportIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary="Reports"
            primaryTypographyProps={{ fontSize: "1.2rem" }} // Increase text size
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/settings"
          onClick={isMobile ? handleDrawerToggle : null}
          sx={{ height: "60px" }} // Adjust height if needed
        >
          <ListItemIcon
            sx={{ minWidth: "40px", color: "black" }} // Adjust icon container width if needed
          >
            <SettingsIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary="Settings"
            primaryTypographyProps={{ fontSize: "1.2rem" }} // Increase text size
          />
        </ListItem>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {}}
          sx={{ mx: 2, mt: "4rem" }}
        >
          new Transaction
        </Button>
      </List>
    </div>
  );

  return (
    <>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
