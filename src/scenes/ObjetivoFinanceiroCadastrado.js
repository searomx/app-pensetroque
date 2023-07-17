import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";

import DoubleButton from "../components/DoubleButton";

import Background from "../components/Background";
import Logo from "../components/Logo";

import Text from "../components/Text";

import TextArea from "../components/TextArea";

import Menu from "../components/Menu";
import Input from "../components/Input";

import Divider from "../components/Divider";

import { Actions } from "react-native-router-flux";

class component extends Component {
  state = {
    menuOptions: [{ value: 0, label: "RECEBER" }, { value: 1, label: "INVESTIR" }]
  };

  nextSceneHandler = () => {
    Actions.MeuVeiculo();
  };

  nextSceneHandler2 = () => {
    Actions.MeuVeiculo();
  };

  render() {
    return (
      <Background footer howPtWorks>
        <Logo />

        <View style={styles.priceContainer}>
          <Text roboto center bold>
            Preço FIPE
          </Text>
          <Text xlarge prompt bold center>
            R$ 23.000
          </Text>
        </View>

        <Text roboto bold center>
          Valor de desconto na tabela Fipe
        </Text>
        <Text large prompt bold center margin>
          R$ 3.000
        </Text>

        <Text roboto bold center>
          Valor de acréscimo
        </Text>
        <Text large prompt bold center margin>
          R$ 10.000
        </Text>

        <Text roboto center italic>
          Veículo blindado
        </Text>

        <Divider />

        <View style={styles.priceContainer}>
          <Text roboto center bold>
            Valor a receber na troca
          </Text>
          <Text xlarge prompt bold center>
            R$ 5.000
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text roboto center green bold>
            Preço médio do veículo pretendido na troca
          </Text>
          <Text xlarge prompt bold center green>
            R$ 25.000
          </Text>
        </View>

        <Text prompt center large bold margin>
          Muito Bem!
        </Text>

        <Text roboto center margin>
          Agora que cadastrou seu veículo e seu objetivo financeiro, já pode ver seus primeiros Matches, mas só poderá entrar em contato com outro
          trocador quando fornecer mais detalhes sobre seu veículo e algumas informações pessoais.
        </Text>

        <Text roboto center margin>
          Lembre-se, quanto mais detalhado for o seu veículo, mais qualificados serão seus Maches.
        </Text>
        <Text roboto center bold margin>
          Boas trocas!
        </Text>

        <Button onPress={this.nextSceneHandler}>VER MATCHES</Button>

        <Button green onPress={this.nextSceneHandler2}>
          CADASTRO DO MEU VEÍCULO
        </Button>
        {/* <Text roboto center margin>
          Você pretende financiar este valor?
        </Text>
        <DoubleButton /> */}
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  priceContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 20,
    borderColor: "#707070",
    borderBottomWidth: 1
  }
});

export default component;
