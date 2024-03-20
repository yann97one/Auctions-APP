import { createContext, ReactNode, useContext, useState } from "react";
import { JwtPayload } from "src/api/loginService/types";

interface Props{
    children: ReactNode
}

interface Values{
    user:JwtPayload | null,
    setUser: (user:JwtPayload)=>void,
}

const INITIAL_VALUE:Values = {
    user:null,
    setUser:()=>{}
}

const UserContext = createContext(INITIAL_VALUE);

export const UserProvider = ({children}:Props) => {
    const [user, setUser] = useState<JwtPayload | null>(null);
    const value : Values = {user, setUser};

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    const context = useContext(UserContext);

    if(!context){
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
}