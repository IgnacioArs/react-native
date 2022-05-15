import React, { Component, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View,Button,TextInput,ScrollView, processColor } from 'react-native'
import Logo from '../assets/losgoSinVorde.jpeg'


//aqui importamos el calendario
import CalendarPicker from 'react-native-calendar-picker';


//IMPORTAMOS EL LOGO
import logo from '../assets/losgoSinVorde.jpeg'
import logoBlack from '../assets/LogoFondoNegro.jpeg'

//ahora para ingresar los datos importamos a firebase de su carpeta
import firebase from '../database/firebase'

import UsuarioLista from './UsuarioLista';







const Usuarios = (props) => {


const [values,setValues] = useState({
    fecha:'',
    nombre:'',
    instagram:'',
    datallesAuto:'',
    tarea:'',
    precio:''
});


const TomarFecha = (fecha,value) =>{
    
    setValues({...values, [fecha]:value})
    console.log("FECHA =>",values.fecha._d)
}



const TomarNombre = (nombre,value) =>{
    setValues({...values, [nombre]:value})
    console.log("NOMBRE =>",values.nombre)
}

const TomarInstagram = (instagram,value) =>{
    setValues({...values, [instagram]:value})
    console.log("INSTAGRAM =>",values.instagram)
}


const TomarDetallesAuto = (datallesAuto,value) =>{
    setValues({...values,[datallesAuto]:value})
    console.log("DETALLES DEL AUTO =>",values.datallesAuto)
}


const TomarTarea = (tarea,value) =>{
    setValues({...values,[tarea]:value})
    console.log("TAREA A REALIZAR =>",values.tarea)
}


const TomarPrecio = (precio,value) =>{
    setValues({...values,[precio]:value})
    console.log("COSTO => ",values.precio)
}


const CrearTarea = async () => {

        if(values.fecha === ''){
                alert("Seleccione bien la fecha");
        }else{

            //agregamos firebase mas su metodo de la clase y luego creamos una coleccion

            firebase.db.collection('clientes').add({
                     fecha:values.fecha._d,
                     nombre:values.nombre,
                     instagram:values.instagram,
                     auto:values.datallesAuto,
                     tarea:values.tarea,
                     precio:values.precio

            });  
            alert("Cliente Ingresado");
            props.navigation.navigate('UsuarioLista')
        }



}







/* useEffect( () => {




    
}) */


return (
    
<ScrollView style={styles.container}>

<View style={styles.logo}>
<Image  source={logo}  style={styles.logo}/> 
</View>

{/* <View>
<View style={styles.calendario}>
        <Image source={logo}  style={styles.logo}/>
        <CalendarPicker style={styles.calendario} onDateChange={value => TomarFecha('fecha',value)}/>
        
</View>


</View> */}

    <View style={styles.inputGroup}>
   
    



  
      {/*   <View style={styles.fondocalendario}>
        <CalendarPicker width={370} height={0}  style={styles.calendario} onDateChange={value => TomarFecha('fecha',value)}/>
        </View> */}

{/*     <Image source={logo}  style={styles.logo}/> */}
       {/*   <View style={styles.calendario}>
         <CalendarPicker onDateChange={value => TomarFecha('fecha',value)}/>
        </View> */}
    {/*     <TextInput placeholder="Fecha Polarizacion" onChangeText={value => TomarFecha('fecha',value)}/> */}


    
    </View>
  
    <CalendarPicker width={370} height={0}  style={styles.calendario} onDateChange={value => TomarFecha('fecha',value)}/>
  
    <View style={styles.inputGroup}>
    
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder="Usuario Nombre" onChangeText={value => TomarNombre('nombre',value)}/>
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder="Instagram Cliente" onChangeText={value => TomarInstagram('instagram',value)}/>
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder="Detalles Del Carro" onChangeText={value => TomarDetallesAuto('datallesAuto',value)}/>
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder="Tarea a realizar" onChangeText={value => TomarTarea('tarea',value)}/>
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder="$ Precio" onChangeText={value => TomarPrecio('precio',value)}/>
    </View>
    <Button title="Ingresar Cliente" onPress={()=> CrearTarea()}></Button> 
    <View style={styles.inputGroup}>
      
    
      <View style={styles.pie}>
        
       <Image source={logoBlack} style={styles.logoBlack} title="hola"/>
    </View>
    </View>

    
</ScrollView>
)
}
 

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffff00',
        flex:1,
        padding:35,
        opacity:5
    },
    calendario:{
       padding:0,
       marginBottom:0,
       alignItems:"center", 
       width:-30,
       marginRight:200,
       marginLeft:200,
       backgroundColor:'#000000'
    },  

   inputGroup:{
       flex:1,
       padding:0,
       marginBottom:15,
       borderBottomWidth:1,
       borderBottomColor:'#cccccc',
       alignItems:"center"
   },

   logo:{
       position:"relative",
        width:250,
        padding:50,
        height:230,
        padding:0,
        marginTop:10,
        borderRadius:40,
        alignItems:"center",
        marginLeft:35,
        marginBottom:25
    },

    logoBlack:{
            width:400,
            height:200,
            marginTop:0,
            flex:1,
            alignItems:"center",
            borderRadius:50000

    },

    pie:{
    backgroundColor:"black",
    width:460,
    alignItems:"center",
    marginTop:30,
    borderRadius:5000
    },
    fondocalendario:{
        width:50
    }

    
  
}) 

export default Usuarios