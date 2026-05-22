import {
createDrawerNavigator,
DrawerContentScrollView,
DrawerItem
}
from "@react-navigation/drawer";

import {
View,
Text
}
from "react-native";

import {
useContext
}
from "react";

import {
AuthContext
}
from "../../context/AuthContext";

import MyOrders
from "../screens/drawer/MyOrders";

import Settings
from "../screens/drawer/Settings";

import Help
from "../screens/drawer/Help";

const Drawer =
createDrawerNavigator();

function CustomDrawer(
props
){

const {
logout
}
=
useContext(
AuthContext
);

return(

<DrawerContentScrollView
{...props}
>

<View
style={{
padding:20,
borderBottomWidth:1,
borderColor:"#ddd"
}}
>

<View

style={{

height:70,
width:70,

borderRadius:35,

backgroundColor:"#FF6B35",

justifyContent:"center",

alignItems:"center"

}}

>

<Text
style={{
fontSize:28,
color:"white"
}}
>

P

</Text>

</View>

<Text
style={{
fontSize:22,
fontWeight:"bold",
marginTop:10
}}
>

Pratham

</Text>

<Text>

food@delivery.com

</Text>

</View>

<DrawerItem

label="Logout"

onPress={
logout
}

/>

</DrawerContentScrollView>

)

}

export default function DrawerNavigator(){

return(

<Drawer.Navigator

drawerContent={
(props)=>

<CustomDrawer
{...props}
/>

}

>

<Drawer.Screen

name="My Orders"

component={MyOrders}

/>

<Drawer.Screen

name="Settings"

component={Settings}

/>

<Drawer.Screen

name="Help"

component={Help}

/>

</Drawer.Navigator>

)

}