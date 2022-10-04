import { Box, Typography, Button, Paper } from '@mui/material';
import Logo from "../images/addFoodImg.png"
import { useFunction } from '../provider/FunctionProvider';
import { useAddFood } from '../provider/foodDatasProvider';

export const FoodCart = ({index}) => {
    const { foodDatas } = useAddFood();
    const {handleOpenTwo} = useFunction();
    return (
        <Paper elevation={5} container sx={PaperStyle}>
            <Box>
                <img  style={imgStyle} src={foodDatas[index].image} />
            </Box>
            <Box sx={textContainer}>
                <Typography variant='h5'>{foodDatas[index].name}</Typography>
                <Typography sx={textOne}>{foodDatas[index].portion}</Typography>
            </Box>
            <Box sx={bottomContainer}>
                    <Box sx={bottomContainerOne}>
                        <Typography variant='h5'>{foodDatas[index].price}₮</Typography>
                        <Button variant="contained" color="success" sx={plusButtonStyleOne} onClick={handleOpenTwo}>+</Button>
                    </Box>
            </Box>
        </Paper>
    )
}
export const FoodCartTwo = () => {
    const { handleOpen } = useFunction();
    return(
        <Paper elevation={5} container sx={PaperStyle}>
            <Box>
                <img style={imgStyle} src={Logo} />
            </Box>
            <Box sx={textContainer}>
                <Typography variant='h5'>Шинэ хоол нэмэх</Typography>
                <Typography sx={textOne}></Typography>
            </Box>
            <Box sx={bottomContainer}>
                <Box sx={bottomContainerTwo}>
                    <Typography variant='h5'></Typography>
                    <Button onClick={handleOpen} sx={plusButtonStyle} variant="contained" color="success">+</Button>
                </Box>
            </Box>
        </Paper>
        )
}
const textOne = {
    color:'#D2B48C', 
    fontSize:'15px'
}
const PaperStyle = {
    height: "250px",
    width: "250px",
    borderRadius: "10px",
    paddingBottom:"130px",
    backgroundColor: "#FAEBD7",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent:"space-around",
    margin: "150px 50px 50px 50px",
    paddingTop:"45px"
}
const imgStyle = {
    height: "auto",
    width: "130px",
    borderRadius: "100%",
}
const textContainer = {
    height: "100px",
    width:"100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    // marginTop:'30px'
}
const plusButtonStyle = {
    height: "55px",
    fontSize: "25px",
    borderRadius: "50%",
}
const plusButtonStyleOne = {
    color:"white",
    height: "30px",
    fontSize: "20px",
    backgroundColor:"#66B60F",
}
const bottomContainer = {
    width:"100%",
    height:'100px',
    display:"flex",
}
const bottomContainerOne = {
    height:"100px",
    width:"100%",
    display:"flex",
    alignItems:"flex-end",
    flexDirection:"row",
    justifyContent:"space-evenly"
}
const bottomContainerTwo = {
    height:"100px",
    width:"100%",
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"center"
}