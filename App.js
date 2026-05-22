import { NavigationContainer }
from "@react-navigation/native";

import RootNavigator
from "./app/navigation/RootNavigator";

import {
AuthProvider
}
from "./context/AuthContext";

import {
CartProvider
}
from "./context/CartContext";

export default function App(){

return(

<AuthProvider>

<CartProvider>

<NavigationContainer>

<RootNavigator/>

</NavigationContainer>

</CartProvider>

</AuthProvider>

)

}
