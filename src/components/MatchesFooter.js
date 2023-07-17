import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../components/IconButton";
import Text from "../components/Text";
import Star from "../assets/star.svg";
import Avatar from "./Avatar";

class component extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>

            <View>
              <Text roboto bold>
                Laura Campos
              </Text>
              <View style={styles.starContainer}>
                <Star height={17} width={17} style={styles.starLogo} />
                <Star height={17} width={17} style={styles.starLogo} />
                <Star height={17} width={17} style={styles.starLogo} />
                <Star height={17} width={17} style={styles.starLogo} />
                <Star height={17} width={17} style={styles.starLogo} />
              </View>
            </View>

            <Avatar />
          </View>

          <IconButton type={"footer"} green></IconButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#F9A000",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 37
  },
  profile: {
    borderWidth: 1,
    borderColor: "#C2C2C2",
    width: 270,
    height: 60,
    borderRadius: 120,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 5,
    // paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  profileContainer: {
    // position: "relative",
    top: -30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  starLogo: {
    marginRight: 5
  },
  starContainer: {
    marginTop: 3,
    flexDirection: "row"
  },
  profileAlign: {
    flexDirection: "row"
  }
});

export default component;
