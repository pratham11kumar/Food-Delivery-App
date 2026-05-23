import {
View,
Text,
FlatList
}
from "react-native";

import {
useContext
}
from "react";

import {
CartContext
}
from "../../../context/CartContext";

export default function OrdersScreen(){

const {

cart

}

=

useContext(
CartContext
)

return(

<View

style={{

flex:1,

padding:20,

backgroundColor:"white"

}}

>

<Text

style={{

fontSize:28,

fontWeight:"bold",

marginBottom:20

}}

>

My Orders

</Text>

{

cart.length===0

?

(

<Text>

No Orders Yet

</Text>

)

:

(

<FlatList

data={cart}

keyExtractor={(

item,
index

)=>

index.toString()

}

renderItem={({item})=>(

<View

style={{

backgroundColor:"#FF6B35",

padding:15,

borderRadius:10,

marginBottom:10

}}

>

<Text

style={{

fontSize:20,

fontWeight:"bold",

color:"white"

}}

>

{item.name}

</Text>

<Text

style={{

color:"white",

marginTop:5

}}

>

₹{item.price}

</Text>

</View>

)}

/>

)

}

</View>

)

}