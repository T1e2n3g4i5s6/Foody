import { createContext, useState, useContext, useEffect } from "react";
import { Navigate, Outlet } from 'react-router-dom';
const FunctionContext = createContext();

export const FunctionProvider = ({children}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openTwo, setOpenTwo] = useState(false);
    const handleOpenTwo = () => setOpenTwo(true);
    const handleCloseTwo = () => setOpenTwo(false);

    const [loggedIn, setLoggedIn] = useState(true);
    const loggedInOpen = () => setLoggedIn(true);
    const loggedInClose = () => setLoggedIn(false);
    return(
        <FunctionContext.Provider value={{open, handleClose, handleOpen, loggedIn,loggedInOpen,setLoggedIn, openTwo, handleCloseTwo, handleOpenTwo}}>
            {children}
        </FunctionContext.Provider>
    )
}
export const ProtectedRoutes = () => {
    const {loggedIn} = useFunction();
    return(loggedIn ? <Outlet/> : <Navigate to="login" />)
  }
export const useFunction = () => useContext(FunctionContext);

