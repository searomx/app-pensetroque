import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";
import firebase from "react-native-firebase";

import { Actions } from "react-native-router-flux";


class component extends Component {

  reSendEmailVerification = () => {
    firebase.auth().currentUser.sendEmailVerification();
    Actions.Login();
  }

  render() {
    return (
      <Background padding>
        <Logo />

        <Text center large prompt bold margin>
          E-mail não verificado!
        </Text>
        <Text center roboto margin>
          Por favor utilize o botão abaixo para reenviar o link de verificação de e-mail.
        </Text>

        <View style={styles.buttonContainer}>
          <Button onPress={this.reSendEmailVerification} small>REENVIAR</Button>
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
