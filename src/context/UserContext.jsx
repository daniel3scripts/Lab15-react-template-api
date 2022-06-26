import { createContext,useState } from "react";
export  const UserContext=createContext();

export const UserProvider=({children})=>{
    const [user,setUser]=useState(
        JSON.parse(localStorage.getItem("user")) || {}
    )
    const {isAuth,setIsAuth}=useState(
        JSON.parse(localStorage.getItem("isAuth")) || false
    );
    
    const saveUser =(user)=>{
        localStorage.setItem("user".JSON.stringify(user))
        localStorage.setItem("isAuth",JSON,stringify(true))
        setUser(user);
        setIsAuth(true);
    }
    
    const logout =()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("isAuth");
        setUser({});
        setIsAuth(false);
    }
    
    //paara su uso de esto con Context necesitamos exportarlo usando el provider
    return(
        <UserContext.Provider 
         value={{user,isAuth,
         saveUser,logout}}>
            {children}

        </UserContext.Provider>
    )
}


