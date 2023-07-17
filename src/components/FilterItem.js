import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Text from "../components/Text";
import Pencil from "../assets/pencil.svg";
import Delete from "../assets/deleteyellow.svg";
import Eye from "../assets/eyeyellow.svg";

class component extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text roboto bold yellow>
          Fiat - 147
        </Text>

        <View style={styles.row}>
          <Eye style={styles.margin} />
          <Pencil style={styles.margin} />
          <Delete style={styles.margin} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: "rgba(249, 160, 0, 0.2)",
    borderBottomWidth: 1,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  margin: {
    marginLeft: 20
  }
});

export default component;
