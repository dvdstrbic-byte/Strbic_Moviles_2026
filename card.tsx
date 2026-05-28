
import { View, Text, Image, Button, StyleSheet } from 'react-native';

type CardProps = {
  titulo: string;
  children: React.ReactNode;
};

export default function Card({ titulo, children }: CardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.imagen}
      />

      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.descripcion}>
        {children}
      </Text>

      <Button
        title="Ver más"
        onPress={() => alert('Botón presionado')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },

  imagen: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  descripcion: {
    marginBottom: 10,
    fontSize: 16,
  },
});