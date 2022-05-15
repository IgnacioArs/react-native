import React from 'react'
import { version } from 'react-dom'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../assets/losgoSinVorde.jpeg'


const Inicio = (props) => {
return (
<View style={stilos.container}>
    <Image style={stilos.imagen} source={Logo}/>
    <View style={stilos.fondoBoton}>
    <Button  title="acceder a la api" onPress={() => props.navigation.navigate("UsuarioLista")}/>
    </View>
    <View style={stilos.pie}>
                <Text style={stilos.version}>Version 1.1.1</Text>
    </View>
</View>
)}
 const stilos = StyleSheet.create({
     container:{
         backgroundColor:"yellow",width:411,height:557,alignItems:"center"
     },
     imagen:{
         height:200,width:200,backgroundColor:"yellow",marginTop:80,borderRadius:5000,shadowColor:"blue",borderColor:"blue"
     },
     pie:{
         marginTop:80,
         height:60,width:140,backgroundColor:"yellow",borderRadius:5000,alignItems:"center",opacity:1
     },
     version:{
         color:"black",fontSize:14,marginTop:35
     },
    fondoBoton:{
        marginTop:100
    }
 });

/* const style = StyleSheet.create({
constainer:{width:1400,height:600,backgroundColor:'#ffff00',alignItems:'center'},
imagen:{width:25,height:20,flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',borderRadius:5000}
}) */

export default Inicio