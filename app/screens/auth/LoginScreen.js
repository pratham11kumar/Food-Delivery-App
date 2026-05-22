import {
View,
Button
}
from "react-native";

import {
useContext
}
from "react";

import {
AuthContext
}
from "../../../context/AuthContext";

export default function LoginScreen(){

const { login } =
useContext(
AuthContext
);

return(

<View

style={{

flex:1,

justifyContent:"center",

alignItems:"center"

}}

>

<Button

title="Login"

onPress={()=>{

login();

}}

/>

</View>

)

}