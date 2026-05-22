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

export default function CartScreen(){

const { cart } =
useContext(
CartContext
);

function renderItem(
{item}
){

return(

<View

style={{

backgroundColor:"#FF6B35",

padding:15,

borderRadius:12,

marginBottom:15

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

)

}

return(

<View

style={{

flex:1,

padding:20

}}

>

<Text

style={{

fontSize:28,

fontWeight:"bold",

marginBottom:20

}}

>

My Cart

</Text>

{

cart.length===0

?

(

<Text>

Cart Empty

</Text>

)

:

(

<FlatList

data={cart}

renderItem={
renderItem
}

keyExtractor={

(_,index)=>

index.toString()

}

/>

)

}

</View>

)

}