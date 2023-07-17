import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import { TouchableOpacity, TouchableNativeFeedback } from "react-native-gesture-handler";

import Publish from "../assets/publish.svg";
import Filter from "../assets/filter.svg";

import Next from "../assets/arrow-right-thick.svg";
import Prev from "../assets/arrow-left-thick.svg";
import ViewList from "../assets/view-list.svg";
import DotDotDot from "./DotDotDot";
import Favorite from "../assets/heart.svg";

class component extends Component {
  render() {
    const { error, green, yellow, large } = this.props;

    let content, color;

    switch (this.props.type) {
      case "dotdotdot":
        content = <DotDotDot />;
        break;
      case "publish":
        content = <Publish />;
        break;
      case "filter":
        content = <Filter />;
        break;
      case "next":
        content = <Next />;
        break;
      case "prev":
        content = <Prev />;
        break;
      case "view":
        content = <ViewList />;
        break;
      case "footer":
        content = <Text style={styles.text}>0</Text>;
        break;
      case "fav":
        content = <Favorite />;
        break;
      default:
        content = null;
        break;
    }

    const border = [styles.iconContainer];
    error ? border.push(styles.error) : null;
    green ? border.push(styles.green) : null;
    yellow ? border.push(styles.yellow) : null;
    large ? border.push(styles.large) : null;

    return (
      <TouchableOpacity 
        onPress={this.props.onPress} 
        // background={TouchableNativeFeedback.Ripple("", true)}
      >
        <View style={border}>{content}</View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    color: "#006828",
    marginBottom: 3
  },
  iconContainer: {
    backgroundColor: "white",
    height: 57,
    width: 57,
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#002278",
    borderWidth: 7,
    marginHorizontal: 5,
    zIndex: 100
  },
  large: {
    height: 70,
    width: 70,
    borderWidth: 8
  },
  green: {
    borderColor: "#006828"
  },
  yellow: {
    borderColor: "#F9A000"
  },
  error: {
    borderColor: "#A80000"
  }
});

export default component;
