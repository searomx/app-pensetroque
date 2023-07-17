import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

class component extends Component {
  render() {
    const fontStyle = [styles.text];
    this.props.roboto && this.props.bold
      ? fontStyle.push(styles.robotoBold)
      : this.props.roboto && this.props.light
      ? fontStyle.push(styles.robotoLight)
      : this.props.roboto
      ? fontStyle.push(styles.roboto)
      : null;

    this.props.prompt && this.props.bold
      ? fontStyle.push(styles.promptBold)
      : this.props.prompt && this.props.light
      ? fontStyle.push(styles.promptLight)
      : this.props.prompt
      ? fontStyle.push(styles.prompt)
      : null;

    this.props.center ? fontStyle.push(styles.center) : null;
    this.props.small ? fontStyle.push(styles.small) : null;
    this.props.medium ? fontStyle.push(styles.medium) : null;
    this.props.large ? fontStyle.push(styles.large) : null;
    this.props.xlarge ? fontStyle.push(styles.xlarge) : null;
    this.props.error ? fontStyle.push(styles.error) : null;
    this.props.black ? fontStyle.push(styles.black) : null;
    this.props.white ? fontStyle.push(styles.white) : null;
    this.props.margin ? fontStyle.push(styles.margin) : null;
    this.props.opacity ? fontStyle.push(styles.opacity) : null;
    this.props.green ? fontStyle.push(styles.green) : null;
    this.props.yellow ? fontStyle.push(styles.yellow) : null;

    return <Text style={fontStyle}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 18,
    color: "#002278",
    margin: 0,
    padding: 0
  },
  margin: {
    marginVertical: 10
  },
  center: {
    alignSelf: "center",
    textAlign: "center"
  },
  small: {
    fontSize: 10
  },
  medium: {
    fontSize: 23,
    lineHeight: 30,
    marginTop: 5
  },
  large: {
    fontSize: 30,
    lineHeight: 40,
    marginTop: 5
  },
  xlarge: {
    fontSize: 40,
    lineHeight: 50,
    marginTop: 5
  },
  error: {
    color: "#A80000"
  },
  black: {
    color: "#4E4E4E"
  },
  white: {
    color: "#ffffff"
  },
  green: {
    color: "#006828"
  },
  yellow: {
    color: "#F9A000"
  },
  opacity: {
    opacity: 0.5
  },
  robotoBold: {
    fontFamily: "Roboto-Bold"
  },
  robotoLight: {
    fontFamily: "Roboto-Light"
  },
  roboto: {
    fontFamily: "Roboto-Regular"
  },
  promptBold: {
    fontFamily: "Prompt-Bold"
  },
  promptLight: {
    fontFamily: "Prompt-Light"
  },
  prompt: {
    fontFamily: "Prompt-Regular"
  }
});

export default component;
