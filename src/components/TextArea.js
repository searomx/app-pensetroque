import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

class component extends Component {
  render() {
    return (
      <View>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput style={styles.textArea} value={this.props.value} underlineColorAndroid="transparent" onChangeText={this.props.onChangeText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textArea: {
    backgroundColor: "rgba(112, 112, 112, 0.2)",
    borderBottomColor: "#707070",
    borderBottomWidth: 2,
    fontFamily: "Prompt-Regular",
    color: "#002278",
    padding: 10,
    margin: 0
  },
  label: {
    padding: 0,
    margin: 0,
    marginBottom: 5,
    borderWidth: 0,
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#707070"
  }
});

export default component;
