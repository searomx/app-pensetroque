import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Text from "../components/Text";
import TextArea from "../components/TextArea";

import Menu from "../components/Menu";
import InputMasked from "../components/InputMasked";

import { Actions } from "react-native-router-flux";

const ITEMS = [{ value: 0, label: "RECEBER NA TROCA" }, { value: 1, label: "OFERECER NA TROCA" }, { value: 3, label: "IGUALAR" }];

class component extends Component {
  nextSceneHandler = () => {
    Actions.VeiculoCadastrado();
  };

  state = {
    objetivo: null,
    value: ""
  };

  onValueChange = (input, value) => this.setState({ [input]: value });

  render() {
    return (
      <Background padding>
        <Logo />

        <View style={styles.titleContainer}>
          <Text prompt bold margin medium center>
            Objetivo Financeiro
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text roboto center>
            Valor do seu veículo considerado para troca
          </Text>
          <Text xlarge prompt bold center>
            R$ 23.000
          </Text>
        </View>

        <Text roboto bold margin>
          Importante:
        </Text>

        <Text roboto margin>
          Importante: Agora você precisa cadastrar o seu objetivo financeiro. Se você deseja trocar seu veículo por um outro de menor valor, informe o
          valor que você quer{" "}
          <Text roboto bold>
            RECEBER NA TROCA
          </Text>
          . Se você quer trocar seu veículo por um outro de maior valor, então você precisa dizer o valor que deseja{" "}
          <Text roboto bold>
            PAGAR NA TROCA
          </Text>
          .
        </Text>

        <View style={styles.inputContainer}>
          <Menu value={this.state.objetivo} input={"objetivo"} placeholder={"OBJETIVO"} items={ITEMS} onValueChange={this.onValueChange} />
          <InputMasked
            blue
            label={"VALOR DO SEU OBJETIVO FINANCEIRO"}
            value={this.state.value}
            onChangeText={text => this.setState({ value: `${text}` })}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text roboto center margin>
            Valor médio dos veículos que serão sugeridos para match de acordo com o seu objetivo financeiro.
          </Text>
          <Text xlarge prompt bold center>
            R$ 23.000
          </Text>
        </View>

        <Button onPress={this.nextSceneHandler}>AVANÇAR</Button>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  priceContainer: {
    marginVertical: 20
  },
  inputContainer: {
    marginVertical: 20
  }
});

export default component;
