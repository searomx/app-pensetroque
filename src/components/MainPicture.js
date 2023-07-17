import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import Car from "../assets/car.png";
import ImagePlus from "../assets/image-plus.svg";

class component extends Component {
  render() {
    return (
      <ImageBackground source={Car} style={styles.mainPicture}>
        <ImagePlus />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainPicture: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10
  }
});

export default component;
