import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";
import MenuDown from "../assets/menu-down.svg"

import { Actions } from "react-native-router-flux";



class component extends Component {

  nextSceneHandler = () => {
    Actions.CadastrarVeiculo();
  }


  render() {
    return (
      <Background padding>
        <Logo />

        <Text center large prompt bold>
          Olá trocador!
        </Text>
        <Text center roboto margin>
          Para que o PenseTorque trabalhe procurando os melhores Matches pra você, precisamos que cadastre alguns dados do seu veículo e o seu
          objetivo financeiro.
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this.nextSceneHandler}>CADASTRAR MEU VEÍCULO</Button>
        </View>

        <MenuDown style={styles.menudown}/>

        <Text center roboto margin>
          Primeiro vamos cadastrar os dados do seu veículo. Todos os valores apresentados são valores reais com base na Tabela Fipe.
        </Text>
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
  menudown: {
    alignSelf: "center"
  }
});

export default component;
