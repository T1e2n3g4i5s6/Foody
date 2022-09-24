import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"
const drawerWidth = 240;

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

export const Navbar = ({ open, handleDrawerOpen }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between",color:"black", backgroundColor:"white", borderBottom:"1px solid silver"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" noWrap component="div">
            Захиалах
          </Typography>

          <Box sx={{width:"12vw",display:"flex",justifyContent:"space-around", flexDirection:"row", alignItems:'center'}}>
            <SearchIcon/>
            <NotificationsActiveIcon/>
            <Box sx={{fontSize:"30px", color:"silver"}}>|</Box>
            <Typography variant="h5">Tengis</Typography>
            <Avatar/>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
};
