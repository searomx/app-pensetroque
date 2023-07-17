import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";
import Google from "../assets/google2.svg";
import Facebook from "../assets/facebook2.svg";
import Add from "../assets/add.svg";
import Delete from "../assets/delete.svg";

const Touchable = props => {
  // return Platform.OS === "ios" ? (
  //   <TouchableOpacity onPress={props.onPress} style={props.style}>
  //     {props.content}
  //   </TouchableOpacity>
  // ) : (
  //   <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("", true)} onPress={props.onPress}>
  //     <View style={props.style}>{props.content}</View>
  //   </TouchableNativeFeedback>
  // );

  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      {props.content}
    </TouchableOpacity>
  );
};

class component extends Component {
  render() {
    const buttonStyle = [styles.button];
    const textStyle = [styles.text];

    this.props.xsmall ? buttonStyle.push(styles.xsmall) : null;
    this.props.small ? buttonStyle.push(styles.small) : null;
    this.props.green ? buttonStyle.push(styles.green) : null;
    this.props.yellow ? buttonStyle.push(styles.yellow) : null;
    this.props.profile ? buttonStyle.push(styles.white) : null;
    this.props.profile ? textStyle.push(styles.textGreen) : null;
    this.props.disabled ? textStyle.push(styles.textDisabled) : null;

    const content = this.props.delete ? (
      <Delete />
    ) : this.props.add ? (
      <Add />
    ) : this.props.google ? (
      <Google />
    ) : this.props.facebook ? (
      <Facebook />
    ) : (
      <Text style={textStyle}>{this.props.children}</Text>
    );

    return <Touchable onPress={this.props.onPress} style={buttonStyle} content={content} />;
  }
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 260,
    backgroundColor: "#002278",
    // paddingVertical: 12,
    height: 40,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center"
  },
  xsmall: {
    width: 64
  },
  small: {
    width: 190
  },
  text: {
    color: "white",
    fontFamily: "Prompt-Bold"
  },
  textGreen: {
    color: "#006828"
  },
  textDisabled: {
    opacity: 0.2
  },
  green: {
    backgroundColor: "#006828"
  },
  yellow: {
    backgroundColor: "#F9A000"
  },
  white: {
    backgroundColor: "white"
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
