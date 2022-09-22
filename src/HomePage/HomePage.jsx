import * as React from "react";
import {
  Box,
  Toolbar, 
  Typography, 
  Avatar,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FoodCart from "./FoodCart";
import NavBar from "./navBar";
import {useHookTest} from "../customHook/getDocCustomHook";


  const  Home = () => {

    const data = useHookTest("Kb2TNAOl8Qe3ugcyRBi1")

  return (
    <Box sx={{ display: "flex" }}>

      {/* Header heseg */}

      <Box sx={{width:"8vw"}}>
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

        <NavBar/>

      <Box sx={{height:"auto%", width:"92vw",marginTop:"70px", backgroundColor:"red", display:"flex",flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-between"}}>
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
