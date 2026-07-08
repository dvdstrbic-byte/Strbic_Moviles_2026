import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PantallaInicio from './PantallaInicio';
import PantallaDetalle from './PantallaDetalle';
import PantallaAcercaDe from './PantallaAcercaDe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">

        <Stack.Screen
          name="Inicio"
          component={PantallaInicio}
          options={{ title: 'Pantalla Principal' }}
        />

        <Stack.Screen
          name="Detalle"
          component={PantallaDetalle}
          options={{ title: 'Información del Usuario' }}
        />

        <Stack.Screen
          name="AcercaDe"
          component={PantallaAcercaDe}
          options={{ title: 'Acerca de la Aplicación' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}