import { Text, View, StyleSheet  } from 'react-native';
import { Link } from 'expo-router';


export default function Home() {
  return (
     <View style= { { backgroundColor: 'red' } }>
      <Text>Mi nombre es David Strbic</Text>

      <Link href="/saludo">
        Ir a saludo.
      </Link>


    <Link href="/perfil">
      Ir a perfil
    </Link>
    </View>
  );
}
