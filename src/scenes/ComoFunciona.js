import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";

import { Actions } from "react-native-router-flux";


class component extends Component {

  nextSceneHandler = () => {
    Actions.ComoFuncionaMatches();
  };

  render() {
    return (
      <Background padding>
        <Logo />

        <Text large prompt bold>
          Como funciona o PenseTroque?
        </Text>
        <Text roboto margin>1. Cadastre seu veiculo</Text>
        <Text roboto margin>2. Informe se deseja "troca com troco", troca por veiculo de maior valor ou ainda troca por veiculo de mesmo valor</Text>
        <Text roboto>3. Informe qual é o valor que você quer no bolso ou o valor que você deseja pagar na troca por veiculo de maior valor</Text>

        <Text roboto margin>4. Veja os "matches" e crie a sua lista de favoritos.</Text>
        <Text roboto margin>5. Utilize créditos para visualizar as informações de contato e inicie as negociações.</Text>
        <Text roboto margin>Pronto! Simples não? Vamos começar?</Text>

        <View style={styles.buttonContainer}>
          <Button onPress={this.nextSceneHandler}>PRÓXIMO</Button>
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center"
  },
  workContainer: {
    marginVertical: 20
  }
});

export default component;
