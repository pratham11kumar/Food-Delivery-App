import { createNativeStackNavigator }
from "@react-navigation/native-stack";

import HomeScreen
from "../screens/home/HomeScreen";

import RestaurantDetail
from "../screens/home/RestaurantDetail";

import CartScreen
from "../screens/home/CartScreen";

const Stack =
createNativeStackNavigator();

export default function RestaurantStack(){

return(

<Stack.Navigator>

<Stack.Screen

name="Home"

component={HomeScreen}

options={{

title:"Restaurants",

headerStyle:{
backgroundColor:"#FF6B35"
},

headerTintColor:"white"

}}

/>

<Stack.Screen

name="RestaurantDetail"

component={RestaurantDetail}

options={{

title:"Restaurant",

headerStyle:{
backgroundColor:"#FF6B35"
},

headerTintColor:"white"

}}

 />

<Stack.Screen

name="Cart"

component={CartScreen}

options={{

headerStyle:{
backgroundColor:"#FF6B35"
},

headerTintColor:"white"

}}

 />

</Stack.Navigator>

)

}