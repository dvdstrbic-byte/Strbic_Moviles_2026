import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailRegistro, setEmailRegistro] = useState("");
  const [passwordRegistro, setPasswordRegistro] = useState("");

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    cargarSesion();
  }, []);

  const cargarSesion = async () => {
    const datos = await AsyncStorage.getItem("usuario");

    if (datos) {
      setUsuario(JSON.parse(datos));
    }
  };

  const validar = (correo, clave) => {
    if (!correo || !clave) {
      Alert.alert("Error, Todos los campos son obligatorios");
      return false;
    }

    const formato = /\S+@\S+\.\S+/;

    if (!formato.test(correo)) {
      Alert.alert("Error", "Email inválido");
      return false;
    }

    if (clave.length < 4) {
      Alert.alert(
        "Error, La contraseña debe tener al menos 4 caracteres"
      );
      return false;
    }

    return true;
  };

  const registrar = async () => {
    if (!validar(emailRegistro, passwordRegistro)) return;

    const nuevoUsuario = {
      email: emailRegistro,
      password: passwordRegistro,
    };

    await AsyncStorage.setItem(
      "usuarioRegistrado",
      JSON.stringify(nuevoUsuario)
    );

    Alert.alert("Éxito, Usuario registrado correctamente");

    setEmailRegistro("");
    setPasswordRegistro("");
  };

  const login = async () => {
    if (!validar(email, password)) return;

    const datos = await AsyncStorage.getItem("usuarioRegistrado");

    if (!datos) {
      Alert.alert("Error, No hay usuarios registrados");
      return;
    }

    const usuarioGuardado = JSON.parse(datos);

    if (
      usuarioGuardado.email === email &&
      usuarioGuardado.password === password
    ) {
      await AsyncStorage.setItem(
        "usuario",
        JSON.stringify(usuarioGuardado)
      );

      setUsuario(usuarioGuardado);
    } else {
      Alert.alert("Error, Credenciales incorrectas");
    }
  };

  const cerrarSesion = async () => {
    await AsyncStorage.removeItem("usuario");
    await AsyncStorage.removeItem("usuarioRegistrado");

    setUsuario(null);

    setEmail("");
    setPassword("");
    setEmailRegistro("");
    setPasswordRegistro("");

    Alert.alert("Sesión cerrada, Los datos fueron eliminados.");
  };

  if (usuario) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Pantalla Principal</Text>

        <Text style={styles.texto}>
          Bienvenido {usuario.email}
        </Text>

        <TouchableOpacity
          style={styles.boton}
          onPress={cerrarSesion}
        >
          <Text style={styles.textoBoton}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={emailRegistro}
        onChangeText={setEmailRegistro}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={passwordRegistro}
        onChangeText={setPasswordRegistro}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={registrar}
      >
        <Text style={styles.textoBoton}>Registrar</Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />

      <Text style={styles.titulo}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={login}
      >
        <Text style={styles.textoBoton}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
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
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  boton: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 10,
  },

  textoBoton: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  texto: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30,
  },
});