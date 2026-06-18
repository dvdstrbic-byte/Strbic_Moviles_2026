import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Home() {

  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        Ingresá tu nombre:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>
        Ingresá tu contraseña:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {
        nombre !== '' && password !== '' && (
          <Text style={styles.mensaje}>
            Bienvenido {nombre}
          </Text>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },

  mensaje: {
    fontSize: 20,
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },

});