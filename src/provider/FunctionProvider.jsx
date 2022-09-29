import { createContext, useState, useContext } from "react";

const FunctionContext = createContext();

export const FunctionProvider = ({children}) => {

    const [openTwo, setOpenTwo] = useState(false);
    const handleOpenTwo = () => setOpenTwo(true);
    const handleCloseTwo = () => setOpenTwo(false);

    return(
        <FunctionContext.Provider value={{openTwo, handleCloseTwo, handleOpenTwo}}>
            {children}
        </FunctionContext.Provider>
    )
}
export const useFunction = () => useContext(FunctionContext);

