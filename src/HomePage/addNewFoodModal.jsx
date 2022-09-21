import {
    Box,
    Typography,
    Button,
    Modal,
    Input,
    FormControl,
    InputLabel,
    TextField
} from '@mui/material';
import Img from "../images/Img.png"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useFunction } from '../provider/FunctionProvider';

const style = {
    width:700,
    height:1000,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius:"20px",
    display:"flex",
    flexDirection:"column",
    transform: 'translate(+100%, +4%)',
};

const styleInput = {
    width:"30ch",

}

const AddFoodModal = () => {

    const {openTwo,handleCloseTwo} = useFunction();

    return(
        <Modal
            open={openTwo}
            onClose={handleCloseTwo}
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
                    <Box sx={{width:"40%", height:"100%", backgroundColor:'red'}}>
                        <img src={Img}/>
                        <CameraAltIcon/>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column",width:"60%", height:"100%",justifyContent:"space-between"}}>
                    <FormControl variant="standard">
                        <InputLabel shrink >Bootstrap</InputLabel>
                        <TextField sx={styleInput} placeholder='Энд бичнэ үү'></TextField>
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink >Bootstrap</InputLabel>
                        <TextField sx={styleInput} placeholder='Энд бичнэ үү'></TextField>
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink >Bootstrap</InputLabel>
                        <TextField sx={styleInput} placeholder='Энд бичнэ үү'></TextField>
                    </FormControl>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}
export default AddFoodModal;