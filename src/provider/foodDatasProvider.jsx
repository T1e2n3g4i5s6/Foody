import { createContext, useContext, useState } from "react";
import {useGetDocFirebase} from "../customHook/getDocCustomHook"
const FoodDatasContext = createContext({});

export const FoodDatasProvider = ({children}) => {

    const [chosenFood, setChosenFood] = useState();
    const [foodDatas] = useGetDocFirebase("Foods")

    return(
        <FoodDatasContext.Provider value={{chosenFood, setChosenFood,foodDatas}}>
            {children}
        </FoodDatasContext.Provider>
    )
}
export const useAddFood = () => useContext(FoodDatasContext)

