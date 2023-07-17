import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Text from "../components/Text";

import { Actions } from "react-native-router-flux";

class component extends Component {
  nextSceneHandler = () => {
    Actions.Login();
  };

  render() {
    return (
      <Background padding>
        <Logo />

        <Text large prompt bold margin>
          E os filtros de busca?
        </Text>

        <Text roboto margin>Você ainda pode refinar os critérios de busca e encontrar exatamente o veiculo que você procura!</Text>
        <Text roboto margin>O sistema PenseTroque faz isto para você, 24 horas por dia, 365 dias por ano, mesmo enquanto você não estiver navegando. Ao encontrar estes veículos, eles
        aparecerão na sua tela de "Matches".</Text>

        <Text roboto bold medium margin>Boas trocas!</Text>

        <View style={styles.buttonContainer}>
          <Button onPress={this.nextSceneHandler}>VOLTAR</Button>
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
