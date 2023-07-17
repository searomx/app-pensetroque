import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Plus from "../assets/plus.svg";

import FilterItem from "../components/FilterItem";

class component extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <FilterItem />
        <FilterItem />
        <FilterItem />


        <TouchableOpacity onPress={this.props.onPress} style={styles.circle}>
          <Plus />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: "90%",
    backgroundColor: "white",
    zIndex: 10,
    position: "absolute",
    borderWidth: 5,
    borderColor: "#F9A000",
    borderRadius: 15,
    top: 30,
    left: "5%",
    paddingTop: 10,
    paddingHorizontal: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    height: 45,
    width: 45,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: "#F9A000",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30
  }
});

export default component;
