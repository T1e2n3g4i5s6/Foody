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
import Logo from "../images/Logo.png";
import LoginModal from "../Modals/LogInModal";
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useFunction } from "../provider/FunctionProvider";
import SettingsIcon from "@mui/icons-material/Settings";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DescriptionIcon from "@mui/icons-material/Description";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


export const Sidebar = ({ handleDrawerClose, open }) => {

  const theme = useTheme();
  const navigate = useNavigate();
  const { handleOpen } = useFunction();

  return (
    <>
      <Drawer sx={DrawerStyle}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton sx={{ color: "white" }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Box sx={logoContainer}>
          <img src={Logo} style={{ width: "60%" }} />
        </Box>

        <List>
          {listItem.map(({ title, icon, href }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(href);
                }}
              >
                <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Button onClick={handleOpen} sx={{ width: "100%" }} variant="contained" color="success">
          ??????????????
        </Button>

        <LoginModal />

      </Drawer>
    </>
  );
};
const logoContainer = {
  width: '100%',
  display: "flex",
  justifyContent: "center"
}
const DrawerStyle = {
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    backgroundColor: "#000723",
    color: "white",

  },
}
const listItem = [
  { title: "????????????????", href: "order", icon: <DescriptionIcon /> },
  { title: "????????????", href: "grapic", icon: <EqualizerIcon /> },
  { title: "????????????????", href: "settings", icon: <SettingsIcon /> },
  { title: "????????", href: "menu", icon: <RestaurantIcon /> },
];
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
