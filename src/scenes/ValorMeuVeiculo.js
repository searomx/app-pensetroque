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

const ITEMS = [{ value: 0, label: "MANTER O VALOR FIPE" }, { value: 1, label: "OFERECER UM DESCONTO" }, { value: 3, label: "PEDIR UM ACRÉSCIMO" }];

class component extends Component {
  nextSceneHandler = () => {
    Actions.ObjetivoFinanceiro();
  };

  state = {
    fipe: null,
    value: "",
    motivo: ""
  };

  onValueChange = (input, value) => this.setState({ [input]: value });

  render() {
    return (
      <Background padding>
        <Logo />

        <View style={styles.titleContainer}>
          <Text prompt bold margin medium center>
            Valor do meu veículo
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text roboto center>
            Preço FIPE
          </Text>
          <Text xlarge prompt bold center>
            R$ 23.000
          </Text>
        </View>

        <Text roboto bold margin>
          Importante:
        </Text>

        <Text roboto margin>
          Você pode oferecer um desconto no valor do seu veículo ou ainda pedir um acréscimo em relação ao valor da tabela FIPE.
        </Text>
        <Text roboto margin>
          Neste caso é necessário justificar o motivo do desconto ou acréscimo.
        </Text>

        <View style={styles.inputContainer}>
          <Menu
            value={this.state.fipe}
            input={"fipe"}
            placeholder={"ALTERAR VALOR DA TABELA FIPE"}
            items={ITEMS}
            onValueChange={this.onValueChange}
          />
          <InputMasked blue label={"VALOR"} value={this.state.value} onChangeText={text => this.setState({ value: `${text}` })} />
          <TextArea label={"MOTIVO DA ALTERAÇÃO"} value={this.state.motivo} onChangeText={text => this.setState({ motivo: text })} />
          <Text roboto small>
            Limite máximo de 400 caracteres
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text roboto center>
            Valor do Meu Veículo
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
    paddingBottom: 20,
    marginVertical: 20
  },
  inputContainer: {
    marginVertical: 20
  }
});

export default component;
