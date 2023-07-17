import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";
import Button from "../components/Button";

class component extends Component {
  render() {
    return (
      <Background padding>
        <Logo />

        <View style={styles.title}>
          <Text prompt bold medium center>
            Valor do Meu Veículo
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text roboto bold center>
            Preço FIPE
          </Text>
          <Text xlarge prompt bold center>
            R$ 23.000
          </Text>
        </View>

        <View style={styles.priceContainer2}>
          <Text roboto bold center>
            Valor do desconto
          </Text>
          <Text large prompt bold center>
            R$ 3.000
          </Text>
          <Text roboto center>
            Precisa manutenção
          </Text>
        </View>

        <View style={styles.priceContainer3}>
          <Text roboto bold center>
            Valor a Receber na Troca
          </Text>
          <Text xlarge prompt bold center>
            R$ 5.000
          </Text>
        </View>

        <View style={styles.priceContainer4}>
          <Text roboto bold center green>
            Preço Médio do Veículo Pretendido na Troca
          </Text>
          <Text xlarge prompt bold center green>
            R$ 15.000
          </Text>
        </View>

        <Text large prompt bold center>
          Muito bem!
        </Text>

        <Text roboto center margin>
          Agora que cadastrou seu veículo e seu objetivo financeiro, já pode ver seus primeiros Matches, mas só poderá entrar em contato com outro
          trocador quando fornecer mais detalhes sobre seu veículo e algumas informações pessoais.
        </Text>
        <Text roboto center margin>
          Lembre-se, quanto mais detalhado for o seu veículo, mais qualificados serão seus Maches.
        </Text>
        <Text roboto center bold medium margin>
          Boas trocas!
        </Text>

        <Button onPress={this.nextSceneHandler}>VER MATCHES</Button>

        <Button green onPress={this.nextSceneHandler}>
          CADASTRO DO MEU VEÍCULO
        </Button>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    borderColor: "#707070",
    borderBottomWidth: 1,
    marginVertical: 30,
    paddingBottom: 5
  },
  priceContainer: {
    paddingBottom: 10,
    borderColor: "#707070",
    borderBottomWidth: 1
  },
  priceContainer2: {
    paddingVertical: 30,
    borderColor: "#707070",
    borderBottomWidth: 1
  },
  priceContainer3: {
    paddingTop: 30,
    paddingBottom: 20,
    borderColor: "#707070",
    borderBottomWidth: 1
  },
  priceContainer4: {
    paddingTop: 30,
    paddingBottom: 20,
    borderColor: "#707070",
    borderBottomWidth: 1,
    marginBottom: 30
  }
});

export default component;
