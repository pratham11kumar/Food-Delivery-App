import { NavigationContainer }
from "@react-navigation/native";

import * as Linking
from "expo-linking";

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

const linking={

prefixes:[

Linking.createURL("/"),

"foodapp://"

],

config:{

screens:{

Main:{

screens:{

Home:{

screens:{

RestaurantDetail:

"restaurant/:id"

}

}

}

}

}

}

}

export default function App(){

return(

<AuthProvider>

<CartProvider>

<NavigationContainer
linking={linking}
>

<RootNavigator/>

</NavigationContainer>

</CartProvider>

</AuthProvider>

)

}
