import { useState} from 'react';
import FoodImg from "../images/addFoodImg.png"
import { Box, Typography, Button, Paper} from '@mui/material';
import AddFoodModal from './addNewFoodModal';
import { useFunction } from '../provider/FunctionProvider';

const FoodCart = ({ imgSrc, title, portion, price, isAdd = true }) => {
    const {handleOpenTwo} = useFunction();
    return (
        <Paper elevation={3} container sx={{height:"30vh", width:"12vw", backgroundColor:"yellow", display:"flex",justifyContent:"space-around", alignItems:"center", flexDirection:"column", margin:"50px", borderRadius:"15px"}}>
            <Box>
                <img src={FoodImg}/>
            </Box>
            <Box sx={{height:"200px",display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                <Typography variant="h4">Tsuiwan</Typography>
                {!isAdd && <Typography>{portion}</Typography>}
                {!isAdd ?
                    <Box>
                        <Typography>{price}</Typography>
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