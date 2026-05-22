import {
useContext
}
from "react";

import {
ActivityIndicator,
View
}
from "react-native";

import {
createNativeStackNavigator
}
from "@react-navigation/native-stack";

import LoginScreen
from "../screens/auth/LoginScreen";

import TabNavigator
from "./TabNavigator";

import {
AuthContext
}
from "../../context/AuthContext";

const Stack=
createNativeStackNavigator();

export default function RootNavigator(){

const {

user,
loading

}

=

useContext(
AuthContext
)

if(loading){

return(

<View

style={{

flex:1,

justifyContent:"center",

alignItems:"center"

}}

>

<ActivityIndicator
size="large"
/>

</View>

)

}

return(

<Stack.Navigator>

{

user

?

(

<Stack.Screen

name="Main"

component={TabNavigator}

options={{
headerShown:false
}}

/>

)

:

(

<Stack.Screen

name="Login"

component={LoginScreen}

options={{
headerShown:false
}}

/>

)

}

</Stack.Navigator>

)

}