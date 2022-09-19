import { createContext, useState, useContext } from "react";

const FunctionContext = createContext();

export const FunctionProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <FunctionContext.Provider value={{open, setOpen, handleClose, handleOpen}}>
            {children}
        </FunctionContext.Provider>
    )
}
export const useFunction = () => useContext(FunctionContext);