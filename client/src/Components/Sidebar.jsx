import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle, isMobile }) => {
  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="settings" />
        </ListItem>
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
