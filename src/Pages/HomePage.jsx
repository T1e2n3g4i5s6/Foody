import * as React from "react";
import {Box} from "@mui/material";
import FoodCart from "../components/FoodCart";
import { useAddFood } from "../provider/foodDatasProvider";
  const  Home = () => {
  const {foodDatas} = useAddFood();
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{height:"auto%", width:"100%", backgroundColor:"red", display:"flex", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-between"}}>
        {foodDatas.length<=0?<p>getting</p>:foodDatas.map((el, index) => <FoodCart index={index}/>)}
      </Box>
    </Box>
  );
}
export default Home;
