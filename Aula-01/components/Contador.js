import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default class Contador extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }
  Decrementar() {
    this.setState({
      contador: this.state.contador - 1
    });
  }
  Incrementar() {
    this.setState({
      contador: this.state.contador + 1
    });
  }
  render() {
    return (
      <View>
        <View style={styles.texto}>
          <Text>{this.state.contador}</Text>
        </View>
        <View style={styles.botoes}>
          <Button
            style={styles.botao1}
            title="Aumentar"
            onPress={this.Incrementar.bind(this)}
          />
          <Button
            style={styles.botao1}
            title="Diminuir"
            onPress={this.Decrementar.bind(this)}
          />
        </View>
      </View>
    );
  }
}
