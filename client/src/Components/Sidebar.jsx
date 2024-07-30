// Sidebar.jsx
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose} variant="persistent">
    <List>
      <ListItem button component={Link} to="/home">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/booking">
        <ListItemText primary="Booking" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
