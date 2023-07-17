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
      <Background footer>
        <Logo />

        <Text center large prompt bold margin>
          PARABÉNS!
        </Text>
        <Text center roboto margin>
          Em breve você vai receber um SMS com o código de segurança
        </Text>

        <Text center roboto large light>
          Digite o código
        </Text>
        <Text center roboto large light>
          de segurança no
        </Text>
        <Text center roboto large light>
          campo abaixo
        </Text>

        <View style={styles.container}>
          <Input confirmation label={"CÓDIGO DE CONFIRMAÇÃO"} value={"xE45SSf"} />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.nextSceneHandler} small>
            CONFIRMAR
          </Button>
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
