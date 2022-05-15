import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//importaremos react-router de react native y es de la siguiente formas
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'




//crearemos nuestro stacknavigator
const Stack = createNativeStackNavigator();

//LLAMOS LAS PANTALLAS DE LA SIGUIENTE FORMA
/* import Inicio from './screens/Inicio' */
/* import Inicio from './screens/Inicio' */
import Usuarios from './screens/Usuario'
/* import ListaUsuarios from './screens/ListaUsuarios'
import UsuariosDetalles from './screens/UsuariosDetalles' */
import UsuarioLista from './screens/UsuarioLista'

import Inicio from './screens/Inicio';

//importamos la clase detalles
import DetalleUsuario from './screens/DetalleUsuario';


//aqui crearemos el stack de mi aplicacion 
function MyStack(){
return(
<Stack.Navigator>
  
  <Stack.Screen name="Inicio" style={styles.container} component={Inicio} /> 
  <Stack.Screen style={styles.usuarioLista} name="UsuarioLista"  component={UsuarioLista} />
  <Stack.Screen style={styles.usuario} name="Ingreso de clientes"  component={Usuarios} />
   <Stack.Screen style={styles.usuario} name="DetalleUsuario"  component={DetalleUsuario} /> 

  {/* <Stack.Screen style={styles.usuarioLista} name="UsuarioLista"  component={UsuarioLista} /> */}
{/*   <Stack.Screen style={styles.usuario} name="Ingreso de clientes"  component={Usuarios} /> */}
</Stack.Navigator>
)
}


export default function App() {
  return (
 <NavigationContainer>
   <MyStack />
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usuario:{
    textAlign:"center",
    alignItems:"center"
  },

  usuarioLista:{
    textAlign:"center",
    alignItems:"center",
    backgroundColor:"yellow"
  },

});