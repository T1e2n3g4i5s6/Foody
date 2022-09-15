import React, { useState } from "react";
import {Grid, Button, Stack, TextField, Divider} from "@mui/material"
import {ListItem, List, ListItemText} from "@mui/material"
import "./HomePageStyle.css"
import img from "../images/Logo.png"
const HomePage = () =>{
    const [open, setOpen] = useState(false);
    const style = {
        color: "white",
        width: "100%",
    }
    return(
        <Grid container>
            <Grid className="MenuContainer" md={2}>
                <Stack spacing={2}>
                    <img style={{width:"10vh"}} src={img}/>
                    {/* <Button variant="outlined">Захиалга</Button>
                    <Button variant="outlined">График</Button>
                    <Button variant="outlined">Тохиргоо</Button>
                    <Button variant="outlined">Меню</Button> */}
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Захиалга" />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="График" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Тохиргоо" />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText primary="Меню" />
                        </ListItem>
                    </List>
                    <Button onClick={() =>setOpen(prevVal=>!prevVal)} size="medium" variant="outlined">Нэвтрэх</Button>
                </Stack>
            </Grid>

                <Grid sx={{height:50 + "vh", backgroundColor:"silver",display: "flex", alignItems: "center", justifyContent: "center", display: open === true ? "block" : "none"}} md={4}>
                    <Stack spacing={4} sx={{display: "flex", alignItems: "center"}}>
                        <p>Нэвтрэх</p>
                        <TextField label="Email"/>
                        <TextField label="Password"/>
                        <Button  color="success" variant="contained" >Нэвтрэх</Button>
                    </Stack>
                </Grid>
            
        </Grid>
    )
}
export default HomePage;