import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class component extends Component {
  render() {
    return <View style={[styles.divider, this.props.white ? styles.white : null]} />;
  }
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: "#707070",
    width: "100%",
    opacity: 0.2
  },
  white : {
    backgroundColor: "white",

  }
});

export default component;
