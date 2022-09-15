import React, { useState } from "react";
import {Grid, Button, Stack, TextField, Divider, Avatar} from "@mui/material"
import {ListItem, List, ListItemText} from "@mui/material"
import "./HomePageStyle.css"
import img from "../images/Logo.png"
import Frame from "../images/Frame.png"
import FrameOne from "../images/FrameOne.png"
import FrameTwo from "../images/FrameTwo.png"
import FrameThree from "../images/FrameThree.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const HomePage = () =>{
    const [open, setOpen] = useState(false);
    const style = {
        color: "white", 
        width: "10vw",
    }
    const topContainer = {
        height:8 + "vh", 
        backgroundColor:"silver",
        display: "flex",
        alignItems: "center",
        flexDirection:"row",
        justifyContent: "space-between",
    }
    const topContainerTwo = {
        height:8 + "vh",
        display: "flex",
        alignItems: "center",
        flexDirection:"row",
        justifyContent: "space-around",
    }
    return(
        <Grid container>
            <Grid className="MenuContainer" md={2}>
                <Stack spacing={3}>
                    <img style={{width:"10vh"}} src={img}/>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem  button >
                            <img src={Frame}/>
                            <ListItemText primary="Захиалга" />
                        </ListItem>

                        <ListItem button >
                            <img src={FrameOne}/>
                            <ListItemText primary="График" />
                        </ListItem>
                        <ListItem button>
                            <img src={FrameThree}/>
                            <ListItemText primary="Тохиргоо" />
                        </ListItem>

                        <ListItem button >
                            <img src={FrameTwo}/>
                            <ListItemText primary="Меню" />
                        </ListItem>
                    </List>
                    <Button onClick={() =>setOpen(prevVal=>!prevVal)} size="medium" variant="outlined">Нэвтрэх</Button>
                </Stack>
            </Grid>
        
                <Grid sx={{height:40 + "vh", backgroundColor:"silver", display: open === true ? "block" : "none"}} md={3}>
                    <Stack spacing={4} sx={{display: "flex", alignItems: "center"}}>
                        <p>Нэвтрэх</p>
                        <TextField label="Email"/>
                        <TextField label="Password"/>
                        <Button  color="success" variant="contained" >Нэвтрэх</Button>
                    </Stack>
                </Grid>

            <Grid container sx={topContainer} md={10}>
                <p>Захиалга</p>
                <Grid sx={topContainerTwo} md={3}>
                    <SearchIcon/>
                    <NotificationsActiveIcon/>
                    <p>Tengis</p>
                    <Avatar></Avatar>
                </Grid>
            </Grid>
            
        </Grid>
    )
}
export default HomePage;