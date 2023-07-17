import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ImagePlus from "../assets/image-plus.svg";

class component extends Component {
  render() {
    return (
      <View style={styles.otherPicture}>
        <ImagePlus />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  otherPicture: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    width: "30%",
    backgroundColor: "#002278",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "white",
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
