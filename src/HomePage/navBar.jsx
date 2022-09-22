import { Box, Toolbar, Avatar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const NavBar = () => {
return(

    <Box sx={{width:"8vw"}}>
        <Box
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: `240px`}}
        >

        <Toolbar sx={{height:"70px", display:"flex", alignItems:"center", justifyContent:"space-between", color:"black", backgroundColor:"white", borderBottom:"1px solid silver"}}>
            <Typography variant="h5">Захиалах</Typography>
            <Box Item sx={{ display:"flex", alignItems:"center", justifyContent:"space-around",width:"13vw"}}>
            <SearchIcon/>
            <NotificationsActiveIcon/>
            <Box sx={{fontSize:"30px", color:"silver"}}>|</Box>
            <Typography variant="h5">Tengis</Typography>
            <Avatar/>
            </Box>
        </Toolbar>
        </Box>
    </Box>
    )
}
export default NavBar;