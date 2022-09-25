import * as React from "react";
import {Box} from "@mui/material";
import FoodCart from "../components/FoodCart";
import { useAddFood } from "../provider/foodDatasProvider";
  const  Home = () => {

    const {foodDatas} = useAddFood();
    console.log(foodDatas); 

  return (
    <Box sx={{ display: "flex" }}>
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
