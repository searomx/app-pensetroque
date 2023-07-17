import React, { Component, Fragment } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, Image } from "react-native";
import Account from "../assets/account.svg";
import LockReset from "../assets/lock-reset.svg";

import { withSafeArea } from "react-native-safe-area";

import { Actions } from "react-native-router-flux";

const Touchable = props => {
  const ios = Platform.OS === "ios";
  return ios ? (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      {props.children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={styles.button}>{props.children}</View>
    </TouchableNativeFeedback>
  );
};

const SafeAreaView = withSafeArea(View, "margin", "all");

class component extends Component {

  nextSceneHandler3 = () => {
    Actions.OQueEPenseTroque();
  };

  render() {
    const ios = Platform.OS === "ios";

    const howPtWorksButton = (
      <Touchable onPress={this.nextSceneHandler3}>
        <Text style={styles.howPtWorks}>?</Text>
        <Text style={styles.text}>Como funciona o PenseTroque</Text>
      </Touchable>
    );

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Fragment>{howPtWorksButton}</Fragment>
        </View>
      </SafeAreaView>
    );
  }
}

// {this.props.howPtWorks ? (
//   howPtWorksButton
// ) : (
//   <Fragment>
//     {createAccountButton}
//     <View style={styles.border} />
//     {changePasswordButton}
//   </Fragment>
// )}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F9A000",
    position: "absolute",
    bottom: 0,
    height: 45
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%"
  },
  imgAccount: {
    height: 14,
    width: 14
  },
  imgChangePassword: {
    height: 20,
    width: 20
  },
  text: {
    fontFamily: "Roboto-Bold",
    color: "white",
    fontSize: 14,
    marginLeft: 15
  },
  border: {
    backgroundColor: "white",
    width: 1,
    height: "60%"
  },
  howPtWorks: {
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    color: "white"
  }
});

export default component;
