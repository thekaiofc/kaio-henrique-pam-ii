import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Contador from "./components/Contador";

export default function App() {
  return (
    <View style={styles.container}>
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D233B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
