import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, ScrollView } from "react-native";
import Background from "../components/Background";

import { GoogleSignin } from "react-native-google-signin";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import firebase from "react-native-firebase";

class component extends Component {
  facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);

      if (result.isCancelled) {
        // handle this however suites the flow of your app
        throw new Error("User cancelled request");
      }

      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        // handle this however suites the flow of your app
        throw new Error("Something went wrong obtaining the users access token");
      }

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  };

  googleLogin = async () => {
    try {
      // add any configuration settings here:
      // await GoogleSignin.configure();

      await GoogleSignin.configure({
        webClientId: "84160177470-n2mehhqdudnn0n3h6s5t98v7drld4r2a.apps.googleusercontent.com"
      });

      const data = await GoogleSignin.signIn();

      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount() {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword('fabiano.m.moraes@gmail.com', 'poiupoiu')
    //   .then(response => {
    // console.warn(response);
    //   });
    this.googleLogin();
    // this.facebookLogin();
  }

  render() {
    return (
      <Background>
        <Text style={styles.text}>test</Text>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    // backgroundColor: "red"
    fontSize: 40
  }
});

export default component;
