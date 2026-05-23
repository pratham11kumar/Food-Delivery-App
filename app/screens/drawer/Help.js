import {
View,
Text,
Button
}
from "react-native";

import {
CommonActions
}
from "@react-navigation/native";

export default function Help(
{
navigation
}
){

function resetFlow(){

navigation.dispatch(

CommonActions.reset({

index:0,

routes:[

{
name:"Home"
}

]

})

)

}

return(

<View

style={{

flex:1,

justifyContent:"center",

alignItems:"center"

}}

>

<Text
style={{
fontSize:24
}}
>

Help Screen

</Text>

<Button

title="Reset To Home"

onPress={
resetFlow
}

/>

</View>

)

}