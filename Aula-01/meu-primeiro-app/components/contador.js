import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default class Contador extends React.Component {
    constructor() {
        super();
        this.state = {
            contador: 0
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
                <View>
                    <Text>{this.state.contador}</Text>
                </View>
                <View >
                    <Button
                        title="Aumentar"
                        onPress={this
                            .Incrementar
                            .bind(this)} />
                    <Button
                        title="Diminuir"
                        onPress={this
                            .Decrementar
                            .bind(this)} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});