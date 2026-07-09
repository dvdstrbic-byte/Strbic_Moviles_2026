import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function LoginScreen({ onLogin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pantalla de Login</Text>
      <Button
        title="Iniciar Sesión"
        onPress={onLogin}
      />
    </View>
  );
}

function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inicio</Text>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>

      <Text style={{marginTop: 20, fontWeight: "bold"}}>
        Nombre: </Text> <Text>David  </Text>
      <Text style={{marginTop: 20, fontWeight: "bold"}}>
        Apellido:</Text><Text> strbic </Text>
      <Text style={{marginTop: 20, fontWeight: "bold"}}>
        edad:</Text><Text>18 </Text>

    </View>
  );
}

function ConfiguracionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configuración</Text>
    </View>
  );
}

function AcercaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acerca de la Aplicación</Text>

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>
        Tecnologías utilizadas:
      </Text> 
      
      <Text>• Tab Navigator</Text>
      <Text>• Drawer Navigator</Text>
      <Text>• @expo/vector-icons (Ionicons)</Text>

    </View>
  );
}

function SalirScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gracias por usar la aplicación</Text>
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#d82f29",
        },

        headerTintColor: "#fff",

        headerTitleAlign: "center",

        tabBarActiveTintColor: "#ff0000",

        tabBarIcon: ({ color, size }) => {
          let icono;

          if (route.name === "Inicio") {
            icono = "home";
          }

          if (route.name === "Perfil") {
            icono = "person";
          }

          if (route.name === "Configuración") {
            icono = "settings";
          }

          return (
            <Ionicons
              name={icono}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
      />

      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
      />

      <Tab.Screen
        name="Configuración"
        component={ConfiguracionScreen}
      />
    </Tab.Navigator>
  );
}

function DrawerMenu() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d82f29",
        },

        headerTintColor: "#fff",

        headerTitleAlign: "end",
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Tabs}
      />

      <Drawer.Screen
        name="Acerca de"
        component={AcercaScreen}
      />

      <Drawer.Screen
        name="Salir"
        component={SalirScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {

  const [login, setLogin] = useState(false);

  return (
    <NavigationContainer>

      <Stack.Navigator>

        {login ? (

          <Stack.Screen
            name="Principal"
            component={DrawerMenu}
            options={{ headerShown: false }}
          />

        ) : (

          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {() => (
              <LoginScreen
                onLogin={() => setLogin(true)}
              />
            )}
          </Stack.Screen>

        )}

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,

  },
});