import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";

const Touchable = props => {
  return Platform.OS === "ios" ? (
    <TouchableOpacity onPress={props.onPress}>{props.content}</TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View>{props.content}</View>
    </TouchableNativeFeedback>
  );
};

class component extends Component {
  render() {
    const contentNo = <Text style={styles.text}>NÃO</Text>;
    const contentYes = <Text style={styles.text}>SIM</Text>;
    return (
      <View style={styles.container}>
        <Touchable onPress={this.props.onPressYes} content={contentYes} />
        <View style={styles.divider} />
        <Touchable onPress={this.props.onPressNo} content={contentNo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 190,
    backgroundColor: "#002278",
    paddingVertical: 12,
    marginVertical: 5,
    borderRadius: 17,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center"
  },
  divider: {
    height: "100%",
    backgroundColor: "white",
    width: 1
  },
  text: {
    color: "white",
    fontFamily: "Prompt-Bold",
    fontSize: 15,
    marginHorizontal: 30
  }
});

export default component;

// const content = this.props.google || this.props.facebook ? null : <Text style={styles.text}>{this.props.children}</Text>;
// let TouchableOld =
// Platform.OS === "ios" ? (
//   <TouchableOpacity onPress={this.props.onPress} style={[styles.button, this.props.small ? styles.small : null]}>
//     {content}
//   </TouchableOpacity>
// ) : (
//   <TouchableNativeFeedback onPress={this.props.onPress}>
//     <View style={[styles.button, this.props.small ? styles.small : null]}>{content}</View>
//   </TouchableNativeFeedback>
// );
