import {
    Box,
    Typography,
    Button,
    Modal,
    FormControl,
    InputLabel,
    TextField,
} from '@mui/material';
import { useFunction } from '../provider/FunctionProvider';
import { useAddFood } from '../provider/foodDatasProvider';

const FoodAboutModal = () => {

    const { openTwo, handleCloseTwo } = useFunction();
    const {chosenFood, setChosenFood} = useAddFood();
    const orts = chosenFood.recipe;
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
                        {/* <img src={chosenFood.image} style={imgStyle}/> */}
                    </Box>
                    <Box sx={midMenuContainerStyle}>
                        {/* <Typography variant='h6'>{chosenFood.description}</Typography> */}
                    </Box>
                </Box>
                <Box style={bottomContainerStyle}>
                        <Typography variant='h6' style={{ marginLeft: "2vw", textAlign:"center"}}>Орц,найрлага</Typography>
                    <Box style={bottomContainerMidStyle}>
                        
                        <Box>
                            <InputLabel sx={textStyle} shrink >Сармис</InputLabel>
                            <Box size='small' sx={styleInput} placeholder='Ширхэг'></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

const style = {
    width:"43vw",
    height: "98vh",
    backgroundColor: "#F5DEB3",
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    transform: 'translate(+60%, 1%)',
};
const styleInput = {
    width: "30ch",
    height:"5ch",
    border:"1px solid black"
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
    height: "42%",
    display: "flex",
    flexDirection: "row",
    borderBottom:"1px solid black"
}
const imgStyle = {
    height:"45%",
    width:"55%"
}
const midConteinerImgStyle = {
    width: "55%",
    height: "100%",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
}
const midMenuContainerStyle = {
    width: "60%",
    height: "100%",
    display: "flex",
    alignItems:"center"
}
const bottomContainerStyle = {
    height: "52%",
    width: "100%",
    borderRadius: "0px 0px 30px 30px"
}
const bottomContainerMidStyle = {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around"
}
export default FoodAboutModal;