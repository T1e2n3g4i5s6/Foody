import * as React from "react";
import { Box } from "@mui/material";
import AddFoodModal from "../Modals/addNewFoodModal";
import FoodAboutModal from "../Modals/foodAboutModal";
import { useAddFood } from "../provider/foodDatasProvider";
import {FoodCart, FoodCartTwo} from "../components/FoodCart";

const Menu = () => {
  const { foodDatas } = useAddFood();
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={foodContainer}>
        <FoodCartTwo/>
        {foodDatas.map((el, index) => <FoodCart index={index} />)}
      </Box>
      <FoodAboutModal/>
      <AddFoodModal/>
    </Box>
  );
}
const foodContainer = {
  height: "auto%",
  width: "100%",
  backgroundColor: "#5F9EA0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignContent: "space-between"
}
export default Menu;
