import React from "react";
import { StyleSheet, View } from "react-native";

const DotDotDot = () => (
  <View style={styles.dotDotDotContainer}>
    <View style={styles.dot} />
    <View style={styles.dot} />
    <View style={styles.dot} />
  </View>
);

const styles = StyleSheet.create({
  dotDotDotContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  dot: {
    width: 3,
    height: 3,
    backgroundColor: "#002278",
    marginVertical: 2
  }
});

export default DotDotDot;
