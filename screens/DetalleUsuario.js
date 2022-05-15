import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Button,
  View,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const DetalleUsuario = (props) => {


  
  const initialState = {
    id: "",
    fecha: "",
    nombre: "",
    instagram: "",
    detallesAuto: "",
    tarea: "",
    precio: ""
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("clientes").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };

  const deleteUser = async () => {
    setLoading(true)
    const dbRef = firebase.db
      .collection("clientes")
      .doc(props.route.params.userId);
    await dbRef.delete();
    setLoading(false)
    props.navigation.navigate("UsuarioLista");
  };

  const openConfirmationAlert = () => {

    
    
    Alert.alert("Usuario eliminado ")
    deleteUser();

};

  const updateUser = async () => {
    const userRef = firebase.db.collection("clientes").doc(user.id);
    await userRef.set({
      fecha: user.fecha,
      nombre: user.nombre,
      instagram: user.instagram,
      detallesAuto:user.auto,
      tarea:user.tarea,
      precio:user.precio
    });
    setUser(initialState);
    props.navigation.navigate("Ingreso de clientes");
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
        <View>
        <TextInput
          placeholder="Fecha"
          autoCompleteType="fecha"
          style={styles.inputGroup}
          value={user.fecha}
          onChangeText={(value) => handleTextChange(value,"fecha")}
        />
      </View>
      <View>
        <TextInput
          placeholder="nombre"
          autoCompleteType="nombre"
          style={styles.inputGroup}
          value={user.nombre}
          onChangeText={(value) => handleTextChange(value,"nombre")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="instagram"
          placeholder="Instagram"
          style={styles.inputGroup}
          value={user.instagram}
          onChangeText={(value) => handleTextChange(value,"instagram")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Detalles"
          autoCompleteType="Auto detalles"
          style={styles.inputGroup}
          value={user.detallesAuto}
          onChangeText={(value) => handleTextChange(value, "datalles")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Tarea"
          autoCompleteType="tarea"
          style={styles.inputGroup}
          value={user.tarea}
          onChangeText={(value) => handleTextChange(value, "tarea")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Precio"
          autoCompleteType="precio"
          style={styles.inputGroup}
          value={user.precio}
          onChangeText={(value) => handleTextChange(value, "precio")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Eliminar Cliente"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Actualizar Cliente" onPress={() => updateUser()} color="#19AC52" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    marginBottom: 7,
  },
});

export default DetalleUsuario;