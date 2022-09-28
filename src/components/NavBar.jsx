import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"

export const Navbar = ({ open, handleDrawerOpen }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={toolbarStyle}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography style={fontSize}>
            Захиалах
          </Typography>

          <Box sx={iconsContainer}>
            <SearchIcon style={iconStyle}/>
            <NotificationsActiveIcon style={iconStyle}/>
            <Box sx={{fontSize:"3vh", color:"silver"}}>|</Box>
            <Typography style={fontSize}>Tengis</Typography>
            <Avatar/>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
};


const drawerWidth = 240;
const iconStyle = {
  height:'2vh'
};
const fontSize = {
  fontSize:"2vh"
};
const toolbarStyle = {
  display:"flex",
  justifyContent:"space-between",
  color:"black",
  backgroundColor:"white",
  borderBottom:"1px solid silver"
}
const iconsContainer = {
  width:"12vw",
  display:"flex",
  justifyContent:"space-around",
  flexDirection:"row",
  alignItems:'center'
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));