import { createContext, useState, useContext } from "react";

const FunctionContext = createContext();

export const FunctionProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openTwo, setOpenTwo] = useState(false);
    const handleOpenTwo = () => setOpenTwo(true);
    const handleCloseTwo = () => setOpenTwo(false);
    return(
        <FunctionContext.Provider value={{open, handleClose, handleOpen, openTwo, handleCloseTwo, handleOpenTwo}}>
            {children}
        </FunctionContext.Provider>
    )
}
export const useFunction = () => useContext(FunctionContext);

