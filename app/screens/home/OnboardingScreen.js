import { View, Text, Button } from "react-native";

export default function OnboardingScreen(
{ navigation }
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
fontSize:28,
fontWeight:"bold",
marginBottom:20
}}
>

Food Delivery App

</Text>

<Button

title="Get Started"

onPress={()=>
navigation.navigate(
"Home"
)
}

/>

</View>

)

}