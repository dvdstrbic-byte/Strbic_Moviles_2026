import { View, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

export default function Home() {

  const [activo, setActivo] = useState(false);

  return (
    <View style={styles.container}>

      <View style={[styles.caja, styles.rojo]} />

      <Pressable
        onPress={() => setActivo(!activo)}
      >
        <View
          style={[
            styles.caja,
            activo ? styles.verde : styles.azul
          ]}
        />
      </Pressable>

      <View style={[styles.caja, styles.amarillo]} />

    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  caja: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  rojo: {
    backgroundColor: 'red',
  },

  azul: {
    backgroundColor: 'blue',
  },

  verde: {
    backgroundColor: 'green',
  },

  amarillo: {
    backgroundColor: 'yellow',
  },

});