import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
const useAuthContext =()=>{
    return useContext(AuthContext);
}
const AuthContextProvider = ({children})=>{
    const[authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    return(
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthContextProvider, useAuthContext };