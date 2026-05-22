import {
View,
Text,
TouchableOpacity,
FlatList
}
from "react-native";

export default function HomeScreen(
{navigation}
){

const restaurants=[

{
id:"1",
name:"Burger Hub",
price:299
},

{
id:"2",
name:"Pizza Point",
price:399
},

{
id:"3",
name:"Biryani House",
price:249
},

{
id:"4",
name:"Pasta Corner",
price:349
},

{
id:"5",
name:"Momos Cafe",
price:199
}

]

function renderItem({item}){

return(

<TouchableOpacity

style={{

backgroundColor:"#FF6B35",

padding:20,

borderRadius:15,

marginBottom:15

}}

onPress={()=>{

navigation.navigate(
"RestaurantDetail",
{
name:item.name,
price:item.price
}
)

}}

>

<Text

style={{

fontSize:22,

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

</TouchableOpacity>

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

Restaurants

</Text>

<FlatList

data={restaurants}

renderItem={renderItem}

keyExtractor={
(item)=>item.id
}

/>

</View>

)

}