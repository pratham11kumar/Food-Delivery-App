import {
View,
Text,
Button
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

export default function RestaurantDetail(
{
route,
navigation
}
){

const {

name="Restaurant",

price=0,

id

}

=

route.params || {};

const {

cart,
setCart

}

=

useContext(
CartContext
);

function addCart(){

setCart([

...cart,

{

name,
price

}

])

}

return(

<View

style={{

flex:1,

justifyContent:"center",

padding:20

}}

>

<Text

style={{

fontSize:28,

fontWeight:"bold"

}}

>

{name}

</Text>

<Text

style={{

fontSize:20,

marginTop:10

}}

>

₹{price}

</Text>

<Text

style={{

fontSize:18,

marginTop:10,

marginBottom:20

}}

>

Restaurant ID:

{id}

</Text>

<View>

<Button

title="Add To Cart"

onPress={
addCart
}

/>

</View>

<View
style={{
marginTop:15
}}
>

<Button

title="Go To Cart"

onPress={()=>{

navigation.navigate(
"Cart"
)

}}

/>

</View>

</View>

)

}