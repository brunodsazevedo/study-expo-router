import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Link style={{color: 'red'}} href="/details">Ir para detalhe</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
