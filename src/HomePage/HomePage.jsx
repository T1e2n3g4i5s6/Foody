import * as React from "react";
import {
  Box, 
  Drawer, 
  CssBaseline,
  AppBar, 
  Toolbar, 
  List, 
  Typography, 
  Divider, 
  ListItem, 
  ListItemButton, 
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {SettingsIcon, EqualizerIcon} from "@mui/icons-material";
import Logo from "../images/Logo.png"

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: `240px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Захиалах
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          backgroundColor: "blue",
          height:"100vh",
          width: "20vw",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
        variant="permanent"
        anchor="left">
        <img style={{height:"auto", width:"7vw"}} src={Logo}/>
        <List sx={{backgroundColor:"#000723", color:"white"}} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Захиалга" />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="График" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Тохиргоо" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Меню" />
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
