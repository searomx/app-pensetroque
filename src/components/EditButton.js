import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Pencil from "../assets/pencil.svg";

class component extends Component {
  render() {
    return (
      <View style={styles.iconButton}>
        <Pencil />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconButton: {
    height: 46,
    width: 46,
    borderRadius: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f9a000",
    borderWidth: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  }
});

export default component;
