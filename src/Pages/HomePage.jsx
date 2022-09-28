import * as React from "react";
import FoodCart from "../components/FoodCart";
import { Box } from "@mui/material";
import { useAddFood } from "../provider/foodDatasProvider";
const Home = () => {
  const { foodDatas } = useAddFood();
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={foodContainer}>
        {foodDatas.length <= 0 ? <p>getting</p> : foodDatas.map((el, index) => <FoodCart index={index} />)}
      </Box>
    </Box>
  );
}
const foodContainer = {
  height: "auto%",
  width: "100%",
  backgroundColor: "red",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignContent: "space-between"
}
export default Home;
