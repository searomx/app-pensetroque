import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class component extends Component {
  render() {
    return (
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>LC</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarText: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    color: "#002278",
    // marginBottom: Platform.OS === "ios" ? 0 : 3
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 110,
    backgroundColor: "#D1D1D1",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default component;
