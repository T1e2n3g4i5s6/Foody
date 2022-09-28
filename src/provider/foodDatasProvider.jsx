import { createContext, useContext, useState } from "react";
import {useGetDocFirebase} from "../customHook/getDocCustomHook"
const FoodDatasContext = createContext({});

export const FoodDatasProvider = ({children}) => {

    const [food, setFood] = useState();
    const [foodDatas] = useGetDocFirebase("Foods")

    return(
        <FoodDatasContext.Provider value={{food, setFood,foodDatas}}>
            {children}
        </FoodDatasContext.Provider>
    )
}
export const useAddFood = () => useContext(FoodDatasContext)

