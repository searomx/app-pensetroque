import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { Actions } from "react-native-router-flux";

class component extends Component {

  nextSceneHandler = () => {
    Actions.SecurityCheckConfirmation();
  }

  render() {
    return (
      <Background footer>
        <Logo />
        <View style={styles.container}>
          <Input label={"TELEFONE"} value={"11 98657 2514"} />
        </View>
        <View style={styles.container}>
          <Button onPress={this.nextSceneHandler}>ENVIAR CÓDIGO DE SEGURANÇA</Button>
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30
  }
});

export default component;
