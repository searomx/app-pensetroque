import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";

class component extends Component {
  render() {
    return (
      <Background footer howPtWorks>
        <Logo />

        <Text prompt bold large center>
          Você está quase lá!
        </Text>

        <Text roboto center>
          Agora que completou o cadastro do seu veículo, para entrar em contato com outro trocador você precisa fornecer alguns dados pessoais.
        </Text>
        <Text roboto center>
          Fique tranquilo, somente serão divulgados os dados que você deseja, a qualquer momento você pode ajustar as configurações de privaciadade.
        </Text>

        <Button>VER MATCHES</Button>
        <Button green>CADASTRO DO PERFIL</Button>
      </Background>
    );
  }
}

const styles = StyleSheet.create({});

export default component;
