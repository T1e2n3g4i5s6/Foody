import { useState} from 'react';
import FoodImg from "../images/addFoodImg.png"
import { Box, Typography, Button, Paper} from '@mui/material';
import AddFoodModal from '../Modals/addNewFoodModal';
import { useFunction } from '../provider/FunctionProvider';
import { useAddFood } from '../provider/foodDatasProvider';

const FoodCart = ({isAdd = true, index }) => {
    const {handleOpenTwo} = useFunction();
    const {foodDatas} = useAddFood();
console.log(foodDatas[index].image);
    return (
        <Paper elevation={3} container sx={{height:"30vh", width:"12vw", backgroundColor:"yellow", display:"flex",justifyContent:"space-around", alignItems:"center", flexDirection:"column", margin:"50px", borderRadius:"15px"}}>
            <Box>
                <img src={foodDatas[index].image}/>
            </Box>
            <Box sx={{height:"200px",display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                <Typography variant="h5">{foodDatas[index].name}</Typography>
                {!isAdd && <Typography>{foodDatas[index].portion}</Typography>}
                {!isAdd ?
                    <Box>
                        <Typography>{foodDatas[index].price}₮</Typography>
                        <Button></Button>
                    </Box> :
                    <Button onClick={handleOpenTwo} sx={{borderRadius:"50%", height:"55px", fontSize:"25px"}} variant="contained" color="success">+</Button>
                }
            </Box>
                    <AddFoodModal/>
        </Paper>
    )
}



export default FoodCart;