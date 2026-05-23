import {
View,
Text,
TextInput,
TouchableOpacity
}
from "react-native";

import {
useState,
useContext
}
from "react";

import {
AuthContext
}
from "../../../context/AuthContext";

export default function LoginScreen(){

const { login } =
useContext(
AuthContext
);

const [email,setEmail] =
useState(
"pratham@gmail.com"
);

const [password,setPassword] =
useState(
"123456"
);

function handleLogin(){

if(

email==="pratham@gmail.com"

&&

password==="123456"

){

login();

}

else{

alert(
"Invalid Credentials"
)

}

}

return(

<View

style={{

flex:1,

justifyContent:"center",

padding:25,

backgroundColor:"white"

}}

>

<Text

style={{

fontSize:32,

fontWeight:"bold",

marginBottom:30,

textAlign:"center"

}}

>

Login

</Text>

<TextInput

placeholder="Email"

value={email}

onChangeText={
setEmail
}

style={{

borderWidth:1,

borderColor:"#ddd",

padding:15,

borderRadius:10,

marginBottom:15

}}

/>

<TextInput

placeholder="Password"

secureTextEntry

value={password}

onChangeText={
setPassword
}

style={{

borderWidth:1,

borderColor:"#ddd",

padding:15,

borderRadius:10,

marginBottom:25

}}

/>

<TouchableOpacity

style={{

backgroundColor:"#FF6B35",

padding:15,

borderRadius:10

}}

onPress={
handleLogin
}

>

<Text

style={{

color:"white",

fontSize:18,

fontWeight:"bold",

textAlign:"center"

}}

>

Login

</Text>

</TouchableOpacity>

<Text

style={{

marginTop:20,

textAlign:"center",

color:"gray"

}}

>

Demo:

pratham@gmail.com

/

123456

</Text>

</View>

)

}