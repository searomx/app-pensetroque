import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "../components/Text";

import Star from "../assets/star.svg";
import Avatar from "../components/Avatar";


class component extends Component {
  render() {
    return (
      <View style={styles.allContainer}>
        <View style={styles.profileContainer}>
          <CustomText roboto bold>
            Ricardo Simões
          </CustomText>
          <View style={styles.starContainer}>
            <Star height={17} width={17} style={styles.starLogo} />
            <Star height={17} width={17} style={styles.starLogo} />
            <Star height={17} width={17} style={styles.starLogo} />
            <Star height={17} width={17} style={styles.starLogo} />
            <Star height={17} width={17} style={styles.starLogo} />
          </View>
          <CustomText roboto>Troquetas: 0</CustomText>
        </View>
        <Avatar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  starLogo: {
    marginLeft: 5,
    marginVertical: 5
  },
  starContainer: {
    flexDirection: "row"
  },
  allContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginHorizontal: 10
  }
});

export default component;