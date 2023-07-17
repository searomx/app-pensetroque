import React, { Component, Fragment } from "react";
// import { StyleSheet } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Text from "../components/Text";

import { Actions } from "react-native-router-flux";

import firebase from "react-native-firebase";

class component extends Component {
  confirmationHandler = async () => {
    if (this.state.email) {
      await firebase.auth().sendPasswordResetEmail(this.state.email);
      this.setState({
        confirmation: true
      });
    }
  };

  backHandler = () => {
    Actions.Login();
  };

  state = {
    email: "",
    confirmation: false
  };

  render() {
    return (
      <Background padding>
        <Logo />

        {this.state.confirmation ? (
          <Fragment>
            <Text prompt large bold center margin>
              PARABÉNS!
            </Text>

            <Text roboto bold center margin>
              Verifique seu e-mail para recuperar sua senha.
            </Text>

            <Button onPress={this.backHandler} small>
              VOLTAR
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Text prompt large bold center margin>
              Recuperar sua senha
            </Text>

            <Input autoCapitalize={"none"} label={"EMAIL"} value={this.state.email} onChangeText={text => this.setState({ email: text })} />

            <Button onPress={this.confirmationHandler} small>
              ENVIAR
            </Button>
          </Fragment>
        )}
      </Background>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10
//   },
//   buttonContainer: {
//     marginVertical: 10,
//     alignItems: "center"
//   },
//   workContainer: {
//     marginVertical: 20
//   }
// });

export default component;
