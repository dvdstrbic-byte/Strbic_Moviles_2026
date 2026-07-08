import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthProvider, AuthContext } from './AuthContext';
import { TemaProvider, TemaContext } from './TemaContext';

function PantallaLogin() {
  const { login } = useContext(AuthContext);
  const { tema } = useContext(TemaContext);

  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: tema === 'claro' ? '#fff' : '#333' 
    }}>
      <Button title="Iniciar sesión" onPress={() => login('David strbic')} />
    </View>
  );
}

function PantallaInicio() {
  const { usuario, logout } = useContext(AuthContext);
  const { tema, alternarTema } = useContext(TemaContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: tema === 'claro' ? '#fff' : '#333',
      }}
    >
      <Text style={{ color: tema === 'claro' ? '#000' : '#fff', marginBottom: 10 }}>
        Bienvenido, {usuario.nombre} 👋
      </Text>
      <Text style={{ color: tema === 'claro' ? '#000' : '#fff', marginBottom: 20 }}>
        Tema actual: {tema}
      </Text>
      
      <Button title="Cambiar tema" onPress={alternarTema} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Cerrar sesión" onPress={logout}/>
    </View>
  );
}

function AppPrincipal() {
  const { usuario } = useContext(AuthContext);
  return usuario ? <PantallaInicio /> : <PantallaLogin />;
}

export default function App() {
  return (
    <AuthProvider>
      <TemaProvider>
        <AppPrincipal />
      </TemaProvider>
    </AuthProvider>
  );
}