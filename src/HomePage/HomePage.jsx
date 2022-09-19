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
  ListItemText,
  Avatar,
  Button
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'; 
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DescriptionIcon from '@mui/icons-material/Description';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Logo from "../images/Logo.png"
import FoodCart from "./FoodCart";
import LoginModal from "./LogIn";
import { useFunction } from "../provider/FunctionProvider";

  const  Home = () => {
    const {handleOpen} = useFunction();
  return (
    <Box sx={{ display: "flex" }}>

      {/* Header heseg */}

      <Box sx={{width:"9vw"}}>
        <Box
          position="fixed"
          sx={{ width: `calc(100% - 240px)`, ml: `240px`}}
          >

          <Toolbar sx={{height:"70px", display:"flex", alignItems:"center", justifyContent:"space-between", color:"black", backgroundColor:"white", borderBottom:"1px solid silver"}}>
            <Typography variant="h5">Захиалах</Typography>
            <Box Item sx={{ display:"flex", alignItems:"center", justifyContent:"space-around",width:"13vw"}}>
              <SearchIcon/>
              <NotificationsActiveIcon/>
              <Box sx={{fontSize:"30px", color:"silver"}}>|</Box>
              <Typography variant="h5">Tengis</Typography>
              <Avatar/>
            </Box>
          </Toolbar>
        </Box>
      </Box>

      <Box>
        <Drawer
          sx={{
            width:"40px",
            "& .MuiDrawer-paper": {
              width: 240,
              backgroundColor:"#000723",
              paddingTop:"40px",
              width:"240px"
            },
          }}
          variant="permanent"
          anchor="left">
          <img style={{width:"126px", height:"55.17px", marginLeft:"50px", marginBottom:"20px"}} src={Logo}/>
          <List sx={{backgroundColor:"#000723", color:"white"}} component="nav" aria-label="mailbox folders">
              <ListItem button>
                <DescriptionIcon/>
                <ListItemText primary="Захиалга" />
              </ListItem>
              <ListItem button divider>
                <EqualizerIcon/>
                <ListItemText primary="График" />
              </ListItem>
              <ListItem button>
                  <SettingsIcon/>
                <ListItemText primary="Тохиргоо" />
              </ListItem>
              <ListItem button>
                <RestaurantIcon/>
                <ListItemText primary="Меню" />
              </ListItem>
              <Button onClick={handleOpen} sx={{width:"100%"}}  variant="contained" color="success">
                Нэвтрэх
              </Button>   
              <LoginModal/>      
          </List>
        </Drawer>
      </Box>

        <Box sx={{height:"auto%", width:"92vw", backgroundColor:"red",marginTop:"70px", display:"flex",flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-between"}}>
          <FoodCart/>
          <FoodCart/> 
          <FoodCart/> 
          <FoodCart/> 
          <FoodCart/> 
          <FoodCart/> 
          <FoodCart/> 
          <FoodCart/> 
          <FoodCart/> 
          <FoodCart/>
          <FoodCart/>
          <FoodCart/>
          <FoodCart/>
          <FoodCart/>
        </Box>
    </Box>
  );
}
export default Home;
