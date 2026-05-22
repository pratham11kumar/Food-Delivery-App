import {
createContext,
useState,
useEffect
}
from "react";

import AsyncStorage
from "@react-native-async-storage/async-storage";

export const AuthContext =
createContext();

export function AuthProvider(
{children}
){

const [user,setUser] =
useState(null);

const [loading,setLoading] =
useState(true);

useEffect(()=>{

checkLogin();

},[])

async function checkLogin(){

const savedUser =
await AsyncStorage.getItem(
"user"
);

if(savedUser){

setUser(
JSON.parse(savedUser)
);

}

setLoading(false);

}

async function login(){

const mockUser = {

name:"Pratham"

};

setUser(mockUser);

await AsyncStorage.setItem(

"user",

JSON.stringify(mockUser)

);

}

async function logout(){

setUser(null);

await AsyncStorage.removeItem(
"user"
);

}

return(

<AuthContext.Provider

value={{

user,
loading,
login,
logout

}}

>

{children}

</AuthContext.Provider>

)

}