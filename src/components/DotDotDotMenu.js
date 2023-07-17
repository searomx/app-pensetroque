import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import MenuIconButton from "./MenuIconButton";

class component extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.row}>
          <MenuIconButton type={"profile"} />
          <MenuIconButton type={"edit"} />
        </View>

        <View style={styles.row}>
          <MenuIconButton type={"matches"} />
          <MenuIconButton type={"favorites"} />
        </View>

        <View style={styles.row}>
          <MenuIconButton type={"changes"} />
          <MenuIconButton type={"recover"} />
        </View>

        <View style={styles.row}>
          <MenuIconButton type={"shop"} />
          <MenuIconButton type={"config"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    backgroundColor: "white",
    zIndex: 10,
    position: "absolute",
    borderWidth: 7,
    borderColor: "#002278",
    borderRadius: 40,
    top: 30,
    paddingVertical: 60,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default component;
