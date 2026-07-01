import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setUsuarios(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="black" />;
  }

  return (
    <View style={{ flex: 1, padding: 50 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Lista de usuarios
      </Text>
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              marginBottom: 5,
              backgroundColor: '#f2f2f2',
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}