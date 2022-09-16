import { Box, Typography, Button } from '@mui/material';

const FoodCart = ({ imgSrc, title, portion, price, isAdd = false }) => {
    return (
        <Box>
            <Box>
                <img />
            </Box>
            <Box>
                <Typography>{title}</Typography>
                {!isAdd && <Typography>{portion}</Typography>}
                {!isAdd ?
                    <Box>
                        <Typography>{price}</Typography>
                        <Button></Button>
                    </Box> :
                    <Button></Button>
                }
            </Box>
        </Box>
    )
}

export default FoodCart;