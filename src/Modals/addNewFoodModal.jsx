import {
    Box,
    Typography,
    Button,
    Modal,
    Input,
    FormControl,
    InputLabel,
    TextField,
    MenuItem,
    Select
} from '@mui/material';
import Img from "../images/Img.png"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useState } from 'react';
import { useFunction } from '../provider/FunctionProvider';

const AddFoodModal = () => {

    const [foodType, setfoodType] = useState('');
    const { openTwo, handleCloseTwo } = useFunction();

    const handleChange = (e) => {
        setfoodType(e.target.value);
    };

    return (
        <Modal
            open={openTwo}
            onClose={handleCloseTwo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={topContainerStyle}>
                    <Button variant='contained' color='error'>X</Button>
                    <Typography variant='h5'>Хоол нэмэх</Typography>
                    <Button variant='contained' color='success'>Хадгалах</Button>
                </Box>
                <Box sx={midConteinerStyle}>
                    <Box sx={midConteinerImgStyle}>
                        <img src={Img} />
                        <CameraAltIcon sx={{ marginTop: "100px" }} />
                    </Box>
                    <Box sx={midMenuContainerStyle}>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Хоолны нэр</InputLabel>
                            <TextField size='small' sx={styleInput} placeholder='Энд бичнэ үү'></TextField>
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Дэлгэрэнгүй</InputLabel>
                            <TextField sx={styleInput} placeholder='Энд бичнэ үү'></TextField>
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Хоолны үнэ</InputLabel>
                            <TextField size='small' sx={styleInput} placeholder='Энд бичнэ үү'></TextField>
                        </FormControl>
                        <FormControl size='small' sx={styleInput}>
                            <InputLabel>Төрөл</InputLabel>
                            <Select
                                value={foodType}
                                label="Төрөл"
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>Төрөлгүй</MenuItem>
                                <MenuItem value={1}>Цагаан хоол</MenuItem>
                                <MenuItem value={2}>Цавуулаггүй</MenuItem>
                                <MenuItem value={3}>Халуун ногоотой</MenuItem>
                                <MenuItem value={4}>Хөнгөн хоол</MenuItem>
                                <MenuItem value={5}>Хүнд хоол</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box style={bottomContainerStyle}>
                    <Box style={bottomContainerTopStyle}>
                        <Typography variant='h6' style={{ marginLeft: "2vw" }}>Орц,найрлага</Typography>
                        <Button variant='contained' color='info'>Орц нэмэх</Button>
                    </Box>
                    <Box style={bottomContainerMidStyle}>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Сармис</InputLabel>
                            <TextField size='small' sx={styleInput} placeholder='Ширхэг'></TextField>
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Гахайн мах</InputLabel>
                            <TextField size='small' sx={styleInput} placeholder='Грамм'></TextField>
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Хар перц</InputLabel>
                            <TextField size='small' sx={styleInput} placeholder='Грамм'></TextField>
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Дофү</InputLabel>
                            <TextField size='small' sx={styleInput} placeholder='Грамм'></TextField>
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Гочугару</InputLabel>
                            <TextField size='small' sx={styleInput} placeholder='Грамм'></TextField>
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel sx={textStyle} shrink >Давс</InputLabel>
                            <TextField size='small' sx={styleInput} placeholder='Грамм'></TextField>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

const style = {
    width: 700,
    height: 1000,
    backgroundColor: "background.paper",
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    transform: 'translate(+100%, +4%)',
};
const styleInput = {
    width: "30ch",
}
const textStyle = {
    marginTop: "-20px"
}
const topContainerStyle = {
    width: "100%",
    height: "6%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottom: "1px solid silver"
}
const midConteinerStyle = {
    width: "100%",
    height: "32%",
    display: "flex",
    flexDirection: "row"
}
const midConteinerImgStyle = {
    width: "40%",
    height: "80%",
    display: 'flex',
    alignItems: "flex-end",
    justifyContent: "center",
    borderBottom: "1px solid silver"
}
const midMenuContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
}
const bottomContainerStyle = {
    height: "62%",
    width: "100%",
    borderRadius: "0px 0px 30px 30px"
}
const bottomContainerTopStyle = {
    width: "90%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}
const bottomContainerMidStyle = {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around"
}
export default AddFoodModal;