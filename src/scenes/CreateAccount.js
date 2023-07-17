import React, { Component, Fragment } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Text from "../components/Text";

import firebase from "react-native-firebase";

import { Actions } from "react-native-router-flux";

class component extends Component {
  state = {
    name: "",
    user: "",
    email: "",
    password: "",
    password2: "",
    error: false,
    errorMessage: "",
    emailVerification: false
  };

  goToLogin = () => {
    Actions.Login();
  }

  onSignUpHandler = async () => {
    if (this.state.name && this.state.user && this.state.email && this.state.password && this.state.password2) {
      if (this.state.password === this.state.password2) {
        try {
          const users = await firebase.firestore().collection("users");
          await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
          await users.add({
            name: this.state.name,
            user: this.state.user,
            email: this.state.email
          });
          await firebase.auth().currentUser.sendEmailVerification();
          this.setState({
            emailVerification: true
          });
        } catch (error) {
          this.setState({
            error: true,
            errorMessage: "Erro ao cadastrar. Tente novamente"
          });
        }
      } else {
        this.setState({
          error: true,
          errorMessage: "Senhas não são iguais"
        });
      }
    } else {
      this.setState({
        error: true,
        errorMessage: "Erro ao cadastrar. Tente novamente"
      });
    }
  };

  render() {
    return (
      <Background padding>
        <Logo />

        {this.state.emailVerification ? (
          <Fragment>
            <Text center large prompt bold>
              PARABÉNS!
            </Text>
            <Text center roboto>
              Seu usuário foi cadastrado com sucesso. Em instantes você vai receber um e-mail com um link para confirmação!
            </Text>

            <Text center roboto large light>
              Clique no link no seu e-mail para finalizar a verificação do seu e-mail.
            </Text>

            <View style={styles.buttonContainer}>
              <Button onPress={this.goToLogin} small>
                VOLTAR AO LOGIN
              </Button>
            </View>
          </Fragment>
        ) : (
          <Fragment>
            <Input label={"NOME"} value={this.state.name} onChangeText={text => this.setState({ name: text })} />
            <Input label={"USUÁRIO"} value={this.state.user} onChangeText={text => this.setState({ user: text })} />
            <Input autoCapitalize={"none"} label={"E-MAIL"} value={this.state.email} onChangeText={text => this.setState({ email: text })} />
            <Input secureTextEntry={true} label={"SENHA"} value={this.state.password} onChangeText={text => this.setState({ password: text })} />
            <Input
              secureTextEntry={true}
              label={"REPETIR SUA SENHA"}
              value={this.state.password2}
              onChangeText={text => this.setState({ password2: text })}
            />

            <Text roboto bold error center>
              {this.state.errorMessage}
            </Text>

            <View style={styles.buttonContainer}>
              <Button onPress={this.onSignUpHandler} small>
                CADASTRAR
              </Button>
            </View>
          </Fragment>
        )}
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center"
  },
  workContainer: {
    marginVertical: 20
  }
});

export default component;
