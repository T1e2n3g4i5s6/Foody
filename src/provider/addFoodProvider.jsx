import { createContext, useContext, useState } from "react";

const addFoodContext = createContext({});

export const addFoodProvider = ({children}) => {
    const [food, setFood] = useState();
    return(
        <addFoodContext.Provider value={{food, setFood}}>
            {children}
        </addFoodContext.Provider>
    )
}
export const useAddFood = () => useContext(addFoodContext)