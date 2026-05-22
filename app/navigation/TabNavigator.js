import { createBottomTabNavigator }
from "@react-navigation/bottom-tabs";

import { Ionicons }
from "@expo/vector-icons";

import { useContext }
from "react";

import RestaurantStack
from "./RestaurantStack";

import SearchScreen
from "../screens/tabs/SearchScreen";

import OrdersScreen
from "../screens/tabs/OrdersScreen";

import DrawerNavigator
from "./DrawerNavigator";

import { CartContext }
from "../../context/CartContext";

const Tab =
createBottomTabNavigator();

export default function TabNavigator(){

const { cart } =
useContext(CartContext);

return(

<Tab.Navigator

screenOptions={({route})=>({

tabBarIcon:({
color,
size
})=>{

let iconName;

if(
route.name==="Home"
){

iconName="home";

}

else if(
route.name==="Search"
){

iconName="search";

}

else if(
route.name==="Orders"
){

iconName="receipt";

}

else{

iconName="person";

}

return(

<Ionicons

name={iconName}

size={size}

color={color}

/>

)

},

tabBarActiveTintColor:
"#FF6B35",

tabBarInactiveTintColor:
"gray",

headerShown:false

})}

>

<Tab.Screen

name="Home"

component={RestaurantStack}

/>

<Tab.Screen

name="Search"

component={SearchScreen}

/>

<Tab.Screen

name="Orders"

component={OrdersScreen}

options={{

tabBarBadge:

cart.length>0

?

cart.length

:

null

}}

/>

<Tab.Screen

name="Profile"

component={DrawerNavigator}

/>

</Tab.Navigator>

)

}