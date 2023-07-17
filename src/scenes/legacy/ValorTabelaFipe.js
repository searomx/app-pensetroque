import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/Button";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Text from "../../components/Text";

import MenuDown from "../assets/menu-down.svg";

import { Actions } from "react-native-router-flux";

class component extends Component {
  nextSceneHandler = () => {
    Actions.ObjetivoFinanceiro();
  };

  render() {
    return (
      <Background footer howPtWorks>
        <Logo />

        <View style={styles.priceContainer}>
          <Text roboto center>
            Preço FIPE
          </Text>
          <Text xlarge prompt bold center>
            R$ 23.000
          </Text>
        </View>

        <Button onPress={this.nextSceneHandler}>OBJETIVO FINANCEIRO</Button>
        <View style={styles.svgContainer}>
          <MenuDown />
        </View>

        <Text roboto margin>
          Agora você precisa cadastrar o seu objetivo financeiro. Se você deseja trocar seu veículo por um outro de menor valor, informe o valor que
          você quer <Text roboto bold>RECEBER NA TROCA</Text>. Se você quer trocar seu veículo por um outro de maior valor, então você precisa dizer o valor que deseja <Text roboto bold>PAGAR
          NA TROCA</Text>.
        </Text>

        <Text roboto>
          Além disso, você pode oferecer um desconto no valor do seu veículo na tabela FIPE (caso queira aumentar as chances de uma troca mais rápida)
          ou ainda pedir um valor acima da FIPE.
        </Text>
        <Text roboto margin>Informe neste caso qual é o valor de acréscimo que você deseja, para ser somado da tabela FIPE.</Text>
        <Text roboto>Lembre-se de justificar os motivos.</Text>

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
  },
  svgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  }
});

export default component;
