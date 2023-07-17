import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";
import Button from "../components/Button";
import { Actions } from "react-native-router-flux";

class component extends Component {

  nextSceneHandler = () => {
    Actions.ComoFuncionaMatches();
  }

  render() {
    return (
      <Background footer howPtWorks>
        <Logo />

        <Text prompt center bold large>
          Você está quase lá!
        </Text>

        <Text roboto center margin>
          Agora que completou o cadastro do seu veículo, para entrar em contato com outro trocador você precisa fornecer alguns dados pessoais.
        </Text>

        <Text roboto center margin>
          Fique tranquilo, somente serão divulgados os dados que você desejar. A qualquer momento você pode ajustar as configurações de privacidade.
        </Text>

        <Button yellow onPress={this.nextSceneHandler}>PUBLICAR MEU VEÍCULO</Button>
        <Button onPress={this.nextSceneHandler}>VER MATCHES</Button>
      </Background>
    );
  }
}

const styles = StyleSheet.create({});

export default component;
