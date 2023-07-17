import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, ScrollView } from "react-native";
import Background from "../components/Background";

class component extends Component {
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
