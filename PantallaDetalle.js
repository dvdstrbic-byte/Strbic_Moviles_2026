import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PantallaDetalle({ navigation, route }) {

  const { nombre } = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Bienvenido {nombre}
      </Text>

      <Button
        title="Ir a Acerca de"
        onPress={() => navigation.navigate('AcercaDe')}
      />
    </View>
  );
}