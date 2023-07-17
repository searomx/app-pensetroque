import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

import LogoSVG from "../assets/logotipo.svg";

class component extends Component {
  render() {
    return (
      <LogoSVG
        style={styles.logo}
        // height={"100%"} width={"100%"}
      />
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 95,
    width: 112,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 10
  }
});
export default component;
