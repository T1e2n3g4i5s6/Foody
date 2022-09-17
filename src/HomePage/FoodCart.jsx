import { Box, Typography, Button } from '@mui/material';
import FoodImg from "../images/addFoodImg.png"
import { useFunction } from '../provider/Function';


const FoodCart = ({ imgSrc, title, portion, price, isAdd = true }) => {
    const {handleOpen} = useFunction();
    return (
        <Box container sx={{height:"30vh", width:"13vw", backgroundColor:"yellow", display:"flex",justifyContent:"space-around", alignItems:"center", flexDirection:"column"}}>
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
                    <Button sx={{borderRadius:"100%", height:"60px", width:"50px", fontSize:"25px"}} variant="contained" color="success">+</Button>
                }
            </Box>
        </Box>
    )
}



export default FoodCart;