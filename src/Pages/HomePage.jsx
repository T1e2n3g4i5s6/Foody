import * as React from "react";
import {FoodCart, FoodCartTwo} from "../components/FoodCart";
import { Box } from "@mui/material";
import { useAddFood } from "../provider/foodDatasProvider";
import AddFoodModal from "../Modals/addNewFoodModal";
const Home = () => {
  const { foodDatas } = useAddFood();
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={foodContainer}>
        <FoodCartTwo/>
        {foodDatas.length <= 0 ? <p>getting</p> : foodDatas.map((el, index) => <FoodCart index={index} />)}
      </Box>
      <AddFoodModal />
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
export default Home;
