import SettingsIcon from '@mui/icons-material/Settings'; 
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DescriptionIcon from '@mui/icons-material/Description';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import{
    Drawer, 
    List,
    ListItem, 
    ListItemText,
    Button,
    Box,
} from "@mui/material"
import Logo from "../images/Logo.png"
import LoginModal from './LogInModal';
import { useFunction } from '../provider/FunctionProvider';

const NavBar = () => {

    const {handleOpen} = useFunction();

    return(
      <Box>
        <Drawer
          sx={{
            width:"40px",
            "& .MuiDrawer-paper": {
              width: 240,
              backgroundColor:"#000723",
              paddingTop:"40px",
              width:"240px"
            },
            }}
            variant="permanent"
            anchor="left">
          <img style={{width:"126px", height:"55.17px", marginLeft:"50px", marginBottom:"20px"}} src={Logo}/>
          <List sx={{backgroundColor:"#000723", color:"white"}} component="nav" aria-label="mailbox folders">
              <ListItem button>
                <DescriptionIcon/>
                <ListItemText primary="Захиалга" />
              </ListItem>
              <ListItem button divider>
                <EqualizerIcon/>
                <ListItemText primary="График" />
              </ListItem>
              <ListItem button>
                  <SettingsIcon/>
                <ListItemText primary="Тохиргоо" />
              </ListItem>
              <ListItem button>
                <RestaurantIcon/>
                <ListItemText primary="Меню" />
              </ListItem>
              <Button onClick={handleOpen} sx={{width:"100%"}}  variant="contained" color="success">
                Нэвтрэх
              </Button>   
              <LoginModal/>      
          </List>
        </Drawer>
      </Box>
    )
}
export default NavBar;