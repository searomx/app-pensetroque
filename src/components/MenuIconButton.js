import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class component extends Component {
  render() {
    const { error, green, yellow, large } = this.props;

    let icon, color, text;

    switch (this.props.type) {
      case "profile":
        icon = "";
        color = "#006828";
        text = "Meu perfil";
        break;
      case "edit":
        icon = "";
        color = "#002278";
        text = "Editar meu veículo";
        break;
      case "matches":
        icon = "";
        color = "#F9A000";
        text = "Matches";
        break;
      case "favorites":
        icon = "";
        color = "#FF0000";
        text = "Favoritos";
        break;
      case "changes":
        icon = "";
        color = "#A80000";
        text = "Trocas";
        break;
      case "recover":
        icon = "";
        color = "#777777";
        text = "Recuperar veículo";
        break;
      case "shop":
        icon = "";
        color = "#000000";
        text = "Loja";
        break;
      case "config":
        icon = "";
        color = "#6E6E6E";
        text = "Configurações";
        break;
    }

    const border = [styles.iconContainer, { backgroundColor: color }];

    return (
      <TouchableOpacity style={styles.container}>
        <View style={border}></View>
        <Text style={[styles.text, {color: color}]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },  
  iconContainer: {
    height: 57,
    width: 57,
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 7,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
    fontFamily: "Roboto-Bold"
  }
});

export default component;
