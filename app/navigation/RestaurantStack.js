import {
createNativeStackNavigator
}
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

<Stack.Navigator

screenOptions={{

animation:

"slide_from_right",

headerStyle:{

backgroundColor:
"#FF6B35"

},

headerTintColor:
"white"

}}

>

<Stack.Screen

name="Home"

component={
HomeScreen
}

options={{

title:
"Restaurants"

}}

/>

<Stack.Screen

name="RestaurantDetail"

component={
RestaurantDetail
}

options={{

title:
"Restaurant",

animation:
"fade"

}}

/>

<Stack.Screen

name="Cart"

component={
CartScreen
}

options={{

title:
"Cart",

animation:
"slide_from_bottom"

}}

/>

</Stack.Navigator>

)

}