import { createContext, useState, useContext } from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    return(
        <UserDataContext.Provider value={{email, setEmail, password, setPassword, name, setName}}>
            {children}
        </UserDataContext.Provider>
    )
}
export const UserData = () => useContext(UserDataContext);

