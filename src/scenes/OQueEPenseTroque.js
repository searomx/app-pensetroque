import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";

import { Actions } from "react-native-router-flux";

class component extends Component {
  nextSceneHandler = () => {
    Actions.ComoFunciona();
  };

  render() {
    return (
      <Background padding>
        <Logo />
        <Text large prompt bold>
          O que é o PenseTroque?
        </Text>

        <Text roboto margin>
          O PenseTroque é uma plataforma de trocas que tem como principal objetivo tornar a experiência de troca tão prazerosa quanto uma experiência
          de compra, mas como?
        </Text>
        <Text roboto margin>
          Colocando frente-a-frente somente os trocadores que tenham atendidas de forma bilateral seus objetivos de troca, inclusive considerando os
          aspectos financeiros do negocio, e isto ocorre através do "Deu Match" , que é o resultado da aplicação do algoritmo às ofertas de veículos,
          promovendo o casamento perfeito do encontro das pretensões de ambos os trocadores.
        </Text>

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
