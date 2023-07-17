import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";

// import SwipeLeft from "../assets/swipeleft.svg";
// import SwipeRight from "../assets/swiperight.svg";

import SwipeLeft from "../assets/swipeleft.png";
import SwipeRight from "../assets/swiperight.png";

import { Actions } from "react-native-router-flux";

class component extends Component {
  nextSceneHandler = () => {
    Actions.ComoFuncionaFiltros();
  };

  render() {
    return (
      <Background padding>
        <Logo />

        <Text large prompt bold>
          Como funciona a tela de Matches?
        </Text>

        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text roboto margin>
              Arrastando para esquerda você vai retirar esse veículo da sua lista de matches. Você pode recuperar os matches que retirar da lista no
              item reciclados, no menu principal.
            </Text>
          </View>
          <Image source={SwipeLeft} style={styles.image1}/>
        </View>

        <View style={styles.row}>
          <Image source={SwipeRight} style={styles.image2}/>
          <View style={styles.textContainer}>
            <Text roboto margin>
              Arrastando para direita você vai colocar esse veículo da sua lista de favoritos. Você pode acessar sua lista de favoritos através do
              menu principal.
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={this.nextSceneHandler}>PRÓXIMO</Button>
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center"
  },
  workContainer: {
    marginVertical: 20
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30
  },
  textContainer: {
    width: "60%"
  },
  image1: {
    marginTop: 30
  },
  image2: {
    marginRight: 20
  }
});

export default component;
