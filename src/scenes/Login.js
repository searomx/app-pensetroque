import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Input from "../components/Input";
import Logo from "../components/Logo";
import HowPtWorks from "../components/HowPtWorks";
import Text from "../components/Text";

import { Actions } from "react-native-router-flux";

import { GoogleSignin } from "react-native-google-signin";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import firebase from "react-native-firebase";

class component extends Component {
  state = {
    email: "",
    password: "",
    error: false,
    errorMessage: ""
  };

  googleLogin = async () => {
    let credential;
    try {
      await this.googleSignOut();
      await GoogleSignin.configure({
        webClientId: "84160177470-n2mehhqdudnn0n3h6s5t98v7drld4r2a.apps.googleusercontent.com",
        forceConsentPrompt: true
      });
      const data = await GoogleSignin.signIn();
      credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    } catch (e) {}
    try {
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
      // Actions.HelloTrocador();
    } catch (e) {
      this.setState({
        error: true,
        errorMessage: "Tente novamente"
      });
    }
  };

  googleSignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {}
  };

  facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);
      if (result.isCancelled) {
        this.setState({
          error: true,
          errorMessage: "Tente novamente"
        });
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        this.setState({
          error: true,
          errorMessage: "Tente novamente"
        });
      }
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

      Actions.HelloTrocador();
    } catch (e) {
      const error =
        e.code === "auth/account-exists-with-different-credential"
          ? "E-mail já cadastrado com outra credencial. Tente novamente usando Google ou E-mail"
          : "Erro. Tente novamente";
      this.setState({
        error: true,
        errorMessage: error
      });
    }
  };

  emailLogin = async () => {
    if (this.state.email && this.state.password) {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        if (firebase.auth().currentUser.emailVerified) {
          Actions.HelloTrocador();
        } else {
          Actions.EmailVerification();
        }
      } catch (error) {
        this.setState({
          error: true,
          errorMessage: "Usuário ou senha incorreto(s)"
        });
      }
    } else {
      this.setState({
        error: true,
        errorMessage: "Usuário ou senha incorreto(s)"
      });
    }
  };

  signOut = async () => {
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  isSignedIn = async () => {
    console.warn(firebase.auth().currentUser);
  };

  render() {
    return (
      <Background padding>
        <Logo />

        <Input autoCapitalize={"none"} label={"E-MAIL"} value={this.state.email} onChangeText={text => this.setState({ email: text })} />

        <Input secureTextEntry={true} label={"SENHA"} value={this.state.password} onChangeText={text => this.setState({ password: text })} />

        <View style={styles.buttonContainer}>
          {this.state.error && (
            <Text roboto bold error center>
              {this.state.errorMessage}
            </Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={this.emailLogin} small>
            ENTRAR
          </Button>
          <Button onPress={this.googleLogin} small google />
          <Button onPress={this.facebookLogin} small facebook />
        </View>

        {/* <Button onPress={this.signOut} small>
          Log Out
        </Button>

        <Button onPress={this.isSignedIn} small>
          Signed In?
        </Button> */}

        <View style={styles.workContainer}>
          <HowPtWorks />
        </View>
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

// code = async () => {
//   // const c = firebase.auth().applyActionCode("abcd");
//   // console.warn(c);
//   // await firebase.auth().currentUser.sendEmailVerification();
//   // await firebase.auth().currentUser.sendEmailVerification(c)
//   await firebase.auth().currentUser.sendEmailVerification({
//     android: {
//       installApp: true,
//       packageName: "com.pensetroqueapp"
//     },
//     iOS: {
//       bundleId: "com.pensetroqueapp"
//     },
//     handleCodeInApp: false,
//     url: "http://localhost"
//   });
// };
