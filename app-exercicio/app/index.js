import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamo meu timão</Text>
      <Link href='/page1'>Ir para página 1</Link>
      <Link href='/page2'>Ir para página 2</Link>
      <Link href='/page3'>Ir para página 3</Link>
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
  title:{
    fontSize:28,
  }
});