import { createContext, useContext, useState } from "react";

const FunctionContext = createContext({});

export const FunctionProvider = ({children}) => {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <FunctionContext.Provider value={{open, setOpen, handleOpen, handleClose}}>
            {children}
        </FunctionContext.Provider>
    )
}
export const useFunction = () => useContext(FunctionContext)