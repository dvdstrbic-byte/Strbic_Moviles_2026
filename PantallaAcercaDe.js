import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PantallaAcercaDe({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 15 }}>
        Acerca de la aplicación
      </Text>

      <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 10 }}>
        Esta aplicación fue desarrollada como práctica de React Navigation.
      </Text>

      <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 25 }}>
        Permite navegar entre distintas pantallas utilizando un Stack Navigator
        y el envío de parámetros entre ellas.
      </Text>

      <Button
        title="Volver al Inicio"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}