import {
  Drawer,
  IconButton,
  List,
  Button,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { DrawerStyle } from "./SideBarStyle";
import { useFunction } from "../provider/FunctionProvider";
import LoginModal from "./LogInModal";
import Logo from "../images/Logo.png";
import {listItem, DrawerHeader} from "./SideBarStyle";

export const Sidebar = ({ handleDrawerClose, open }) => {

  const theme = useTheme();
  const navigate = useNavigate();
  const {handleOpen} = useFunction();

  return (
    <>
      <Drawer sx={DrawerStyle}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton sx={{color:"white"}} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Box sx={{width:'100%',display:"flex", justifyContent:"center"}}>
          <img src={Logo} style={{width:"60%"}}/>
        </Box>

        <List>
          {listItem.map(({ title, icon, href }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(href);
                }}
              >
                <ListItemIcon sx={{color:'white'}}>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Button onClick={handleOpen} sx={{width:"100%"}}  variant="contained" color="success">
          Нэвтрэх
        </Button>  

        <LoginModal/>

      </Drawer>
    </>
  );
};
