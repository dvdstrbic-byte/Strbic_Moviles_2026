import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image,} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState(null);

  const seleccionarImagen = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const guardarProducto = () => {
    if (!nombre || !descripcion || !precio || !categoria) {
      Alert.alert("Error, Todos los campos son obligatorios");
      return;
    }

    Alert.alert("Producto creado",`Nombre: ${nombre}\nDescripción: ${descripcion}\nPrecio: $${precio}\nCategoría: ${categoria}`);

    setNombre("");
    setDescripcion("");
    setPrecio("");
    setCategoria("");
    setImagen(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        Crear Producto
      </Text>

      <Text style={styles.label}>
        Nombre
      </Text>

      <TextInput
        placeholder="Nombre del producto"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <Text style={styles.label}>
        Descripción
      </Text>

      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
        style={styles.descripcion}
      />

      <Text style={styles.label}>
        Precio
      </Text>

      <TextInput
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>
        Categoría
      </Text>

      <TextInput
        placeholder="Categoría"
        value={categoria}
        onChangeText={setCategoria}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={seleccionarImagen}
      >
        <Text style={styles.textoBoton}>
          Seleccionar imagen
        </Text>
      </TouchableOpacity>

      {imagen && (
        <Image
          source={{ uri: imagen }}
          style={styles.imagen}
        />
      )}

      <TouchableOpacity
        style={styles.botonGuardar}
        onPress={guardarProducto}
      >
        <Text style={styles.textoBoton}>
          Guardar Producto
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
    descripcion: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    height: 100,
    textAlignVertical: "top",
  },

  boton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },

  botonGuardar: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 30,
  },

  textoBoton: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  imagen: {
    width: 220,
    height: 220,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});