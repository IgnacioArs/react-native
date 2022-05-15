import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UsuarioLista = (props) => {


  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("clientes").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const {
            fecha,
            nombre,
            instagram,
           detallesAuto,
            tarea,
            precio} = doc.data();
        users.push({
          id: doc.id,
          fecha:Date._i,
          nombre,
          instagram,
         detallesAuto,
          tarea,
          precio
        });
      });
      setUsers(users);

    console.log("ESTADO USUARO NOMBRE",users.pop(users.id))
    });
  }, [users]);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("Ingreso de clientes")}
        title="Create User"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("DetalleUsuario", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title key={user.id}>{user.nombre}</ListItem.Title>
              <ListItem.Subtitle style={stiloss.titulo}>{user.instagram}</ListItem.Subtitle>
              <ListItem.Subtitle style={stiloss.titulo}>{user.detallesAuto}</ListItem.Subtitle>
              <ListItem.Subtitle style={stiloss.titulo}>{user.tarea}</ListItem.Subtitle>
              <ListItem.Subtitle style={stiloss.titulo}>{user.fecha}</ListItem.Subtitle> 
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};


const stiloss = StyleSheet.create({
    titulo:{color:"black",textAlign:"center"}
})

export default UsuarioLista;