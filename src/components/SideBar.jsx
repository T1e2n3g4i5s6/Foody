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
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DescriptionIcon from "@mui/icons-material/Description";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


export const Sidebar = ({ handleDrawerClose, open }) => {

  const theme = useTheme();
  const navigate = useNavigate();

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
  { title: "Меню", href: "menu", icon: <RestaurantIcon /> },
  { title: "Захиалга", href: "order", icon: <DescriptionIcon /> },
  { title: "График", href: "grapic", icon: <EqualizerIcon /> },
  { title: "Тохиргоо", href: "settings", icon: <SettingsIcon /> },
];
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
