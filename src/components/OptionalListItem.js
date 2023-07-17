import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";

class component extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.text}>{this.props.label}</Text>
        </View>
        <Button xsmall delete />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  item: {
    flex: 1,
    backgroundColor: "#002278",
    height: 40,
    borderRadius: 17,
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    color: "white",
    marginLeft: 20
  }
});

export default component;
