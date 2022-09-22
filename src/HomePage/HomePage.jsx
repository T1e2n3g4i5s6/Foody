import * as React from "react";
import {Box} from "@mui/material";
import FoodCart from "./FoodCart";
import SideBar from "./SideBar";
import {useHookTest} from "../customHook/getDocCustomHook";
import NavBar from "./NavBar";


  const  Home = () => {

    const data = useHookTest("Kb2TNAOl8Qe3ugcyRBi1")

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar/>
      <SideBar/>

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
