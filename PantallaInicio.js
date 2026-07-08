import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PantallaInicio({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Pantalla de Inicio
      </Text>

      <Button
        title="Ir a Detalle"
        onPress={() =>
          navigation.navigate('Detalle', {
            nombre: 'David'
          })
        }
      />
    </View>
  );
}