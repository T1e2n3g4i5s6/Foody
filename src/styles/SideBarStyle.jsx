import DescriptionIcon from "@mui/icons-material/Description";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SettingsIcon from "@mui/icons-material/Settings";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {styled} from "@mui/material/styles"

export const DrawerStyle = {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      backgroundColor:"#000723",
      color:"white",
      
    },
  }
export const listItem = [
  { title: "Захиалга", href: "order", icon: <DescriptionIcon/> },
  { title: "График", href: "grapic", icon: <EqualizerIcon/> },
  { title: "Тохиргоо", href: "settings", icon: <SettingsIcon/> },
  { title: "Меню", href: "menu", icon: <RestaurantIcon/> },
];
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));