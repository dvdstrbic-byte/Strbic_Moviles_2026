import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet} from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const [productos, setProductos] = useState([]);

  const [editando, setEditando] = useState(false);
  const [idEditar, setIdEditar] = useState(null);

  const guardarProducto = () => {
    if (!nombre || !descripcion || !precio) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (isNaN(precio)) {
      Alert.alert("Error", "El precio debe ser un número");
      return;
    }

    if (editando) {
      const nuevosProductos = productos.map((producto) => {
        if (producto.id === idEditar) {
          return {
            ...producto,
            nombre,
            descripcion,
            precio,
          };
        }

        return producto;
      });

      setProductos(nuevosProductos);

      Alert.alert("Éxito", "Producto actualizado");

      setEditando(false);
      setIdEditar(null);
    } else {
      const nuevoProducto = {
        id: Date.now().toString(),
        nombre,
        descripcion,
        precio,
      };

      setProductos([...productos, nuevoProducto]);

      Alert.alert("Éxito", "Producto agregado");
    }

    setNombre("");
    setDescripcion("");
    setPrecio("");
  };

  const editarProducto = (producto) => {
    setNombre(producto.nombre);
    setDescripcion(producto.descripcion);
    setPrecio(producto.precio);

    setEditando(true);
    setIdEditar(producto.id);
  };

  const eliminarProducto = (id) => {
    setProductos(
      productos.filter((producto) => producto.id !== id)
    );
  };

  const confirmarEliminacion = (id) => {
    Alert.alert(
      "Confirmar",
      "¿Deseas eliminar este producto?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => eliminarProducto(id),
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nombre}>
        {item.nombre}
      </Text>

      <Text>
        Descripción: {item.descripcion}
      </Text>

      <Text>
        Precio: ${item.precio}
      </Text>

      <View style={styles.botones}>
        <TouchableOpacity
          style={styles.botonEditar}
          onPress={() => editarProducto(item)}
        >
          <Text style={styles.textoBoton}>
            Editar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonEliminar}
          onPress={() =>
            confirmarEliminacion(item.id)
          }
        >
          <Text style={styles.textoBoton}>
            Eliminar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        CRUD Productos
      </Text>

      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={styles.input}
      />

      <TextInput
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.botonGuardar}
        onPress={guardarProducto}
      >
        <Text style={styles.textoBoton}>
          {editando ? "Actualizar Producto" : "Guardar Producto"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

    </View>
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
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
    botonGuardar: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },

  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },

  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  botonEditar: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 8,
    width: "48%",
  },

  botonEliminar: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 8,
    width: "48%",
  },

  textoBoton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});