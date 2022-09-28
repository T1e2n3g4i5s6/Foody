import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import { Sidebar } from "./SideBar";
import { Box } from "@mui/material";

export const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      <Box sx={{backgroundColor:"#5F9EA0", pt: 10, pl: open ? 0 : 0 }}>
        <Outlet />
      </Box>
    </>
  );
};
