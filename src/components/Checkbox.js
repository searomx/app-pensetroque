import React, { Component } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Text from "../components/Text";
import Check from "../assets/check.svg";

class component extends Component {
  state = {
    checked: true
  };

  checkHandler = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.checkHandler}>
        <View style={styles.container}>
          <View style={styles.checkbox}>{this.state.checked && <Check />}</View>
          <Text prompt>{this.props.children}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#002278",
    marginRight: 10,
    // marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default component;
