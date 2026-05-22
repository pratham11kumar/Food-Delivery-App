import { createNativeStackNavigator }
from "@react-navigation/native-stack";

import OnboardingScreen
from "../screens/home/OnboardingScreen";

import HomeScreen
from "../screens/home/HomeScreen";

import RestaurantDetail
from "../screens/home/RestaurantDetail";

import CartScreen
from "../screens/home/CartScreen";

const Stack =
createNativeStackNavigator();

export default function MainStack(){

return(

<Stack.Navigator>

<Stack.Screen

name="Onboarding"

component={
OnboardingScreen
}

options={{
headerShown:false
}}

/>

<Stack.Screen

name="Home"

component={
HomeScreen
}

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

component={
RestaurantDetail
}

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

component={
CartScreen
}

options={{

title:"Cart",

headerStyle:{
backgroundColor:"#FF6B35"
},

headerTintColor:"white"

}}

 />

</Stack.Navigator>

)

}