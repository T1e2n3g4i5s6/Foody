import { Box, Typography, Button } from '@mui/material';
import FoodImg from "../images/addFoodImg.png"
import { useState} from 'react';
import {Modal} from '@mui/material';
import Img from "../images/Img.png"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {Input} from '@mui/material';

const style = {
    width:700,
    height:1200,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius:"20px",
    display:"flex",
    flexDirection:"column"
  };

const FoodCart = ({ imgSrc, title, portion, price, isAdd = true }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box container sx={{height:"30vh", width:"12vw", backgroundColor:"yellow", display:"flex",justifyContent:"space-around", alignItems:"center", flexDirection:"column", margin:"50px", borderRadius:"15px"}}>
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
                    <Button onClick={handleOpen} sx={{borderRadius:"50%", height:"55px", fontSize:"25px"}} variant="contained" color="success">+</Button>
                }
            </Box>
            <Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box sx={{width:"100%", height:"5vh",display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", borderBottom:"1px solid silver"}}>
                            <Button variant='contained' color='error'>X</Button>
                            <Typography variant='h5'>Хоол нэмэх</Typography>
                            <Button variant='contained' color='success'>Хадгалах</Button>
                        </Box>
                        <Box sx={{width:"100%", height:"20vh", backgroundColor:"yellow", display:"flex", flexDirection:"row"}}>
                            <Box sx={{width:"40%", height:"100%"}}>
                                <img src={Img}/>
                                <CameraAltIcon/>
                            </Box>
                            <Box style={{display:"flex", flexDirection:"column",width:"60%", height:"100%",}}>
                                <Input placeholder='Энд бичнэ үү'></Input>
                                <Input  placeholder='Энд бичнэ үү'></Input>
                                <Input  placeholder='Энд бичнэ үү'></Input>
                            </Box>
                        </Box>
                    </Box>

                </Modal>
            </Box>

        </Box>
    )
}



export default FoodCart;