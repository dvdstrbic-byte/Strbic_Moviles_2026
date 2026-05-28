import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Saludo() {
  return (
         <View>
      <Text>Hola desde otra pantalla</Text>
    

    <Link href="/">
        Ir a inicio.
      </Link>
 </View>
  );
}

