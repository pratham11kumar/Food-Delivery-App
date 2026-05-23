import {
View,
Text,
TouchableOpacity
}
from "react-native";

export default function OnboardingScreen(
{
navigation
}
){

return(

<View

style={{

flex:1,

justifyContent:"center",

alignItems:"center",

padding:20

}}

>

<Text

style={{

fontSize:32,

fontWeight:"bold",

marginBottom:20

}}

>

Food Delivery App

</Text>

<TouchableOpacity

style={{

backgroundColor:"#FF6B35",

padding:15,

borderRadius:10

}}

onPress={()=>{

navigation.replace(
"Home"
)

}}

>

<Text

style={{

color:"white",

fontSize:18

}}

>

Get Started

</Text>

</TouchableOpacity>

</View>

)

}