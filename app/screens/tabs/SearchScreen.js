import {
View,
Text,
TextInput,
FlatList
}
from "react-native";

import {
useState
}
from "react";

export default function SearchScreen(){

const restaurants=[

"Burger Hub",

"Pizza Point",

"Biryani House",

"Pasta Corner",

"Momos Cafe"

]

const [search,setSearch]=
useState("");

const filtered=

restaurants.filter(item=>

item

.toLowerCase()

.includes(

search.toLowerCase()

)

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

Search Food

</Text>

<TextInput

placeholder=
"Search Restaurant"

value={search}

onChangeText={
setSearch
}

style={{

borderWidth:1,

borderColor:"#ddd",

padding:15,

borderRadius:10,

marginBottom:20

}}

/>

<FlatList

data={filtered}

keyExtractor={
item=>item
}

renderItem={({item})=>(

<View

style={{

backgroundColor:"#FF6B35",

padding:18,

borderRadius:10,

marginBottom:10

}}

>

<Text

style={{

color:"white",

fontWeight:"bold",

fontSize:18

}}

>

{item}

</Text>

</View>

)}

/>

</View>

)

}