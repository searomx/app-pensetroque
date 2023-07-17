import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

class component extends Component {
  nextSceneHandler = () => {
    Actions.OQueEPenseTroque();
  };

  render() {
    const button = (
      <View style={styles.button}>
        <Text style={styles.buttonText}>?</Text>
      </View>
    );
    const text = <Text style={styles.text}>Como funciona o PenseTroque</Text>;

    let Touchable =
      // Platform.OS === "ios" ? (
        <TouchableOpacity onPress={this.nextSceneHandler} style={styles.content}>
          {button}
          {text}
        </TouchableOpacity>
      // ) : (
      //   <TouchableNativeFeedback onPress={this.nextSceneHandler}>
      //     <View style={styles.content}>
      //       {button}
      //       {text}
      //     </View>
      //   </TouchableNativeFeedback>
      // );
    return Touchable;
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 100,
    backgroundColor: "#F9A000",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  buttonText: {
    fontFamily: "Roboto-Black",
    fontSize: 30,
    color: "white"
  },
  text: {
    fontFamily: "Roboto-Light",
    color: "#F9A000",
    fontSize: 14,
    marginVertical: 5
  }
});

export default component;
