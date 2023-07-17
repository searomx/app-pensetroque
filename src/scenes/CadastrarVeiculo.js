import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Text from "../components/Text";

import { Actions } from "react-native-router-flux";

const ITEMS = [
  { value: 0, label: "CARRO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }, { value: 1, label: "MOTO" }, { value: 3, label: "CAMINHÃO" }
];

class component extends Component {
  state = {
    tipo: null,
    marca: null,
    modelo: null,
    anoDoModelo: null,
    anoDeFabricacao: null,
    versao: null
  };

  onValueChange = (input, value) => this.setState({ [input]: value });

  nextSceneHandler = () => Actions.ValorMeuVeiculo();

  render() {
    return (
      <Background padding>
        <Logo />
        <View style={styles.titleContainer}>
          <Text prompt bold margin medium center>
            Cadastrar Meu Veículo
          </Text>
        </View>

        <Menu value={this.state.tipo} input={"tipo"} placeholder={"TIPO"} items={ITEMS} onValueChange={this.onValueChange} />
        <Menu value={this.state.marca} input={"marca"} placeholder={"MARCA"} items={ITEMS} onValueChange={this.onValueChange} />
        <Menu value={this.state.modelo} input={"modelo"} placeholder={"MODELO"} items={ITEMS} onValueChange={this.onValueChange} />
        <Menu value={this.state.anoDoModelo} input={"anoDoModelo"} placeholder={"ANO DO MODELO"} items={ITEMS} onValueChange={this.onValueChange} />
        <Menu value={this.state.anoDeFabricacao} input={"anoDeFabricacao"} placeholder={"ANO DE FABRICAÇÃO"} items={ITEMS} onValueChange={this.onValueChange} />
        <Menu value={this.state.versao} input={"versao"} placeholder={"VERSÃO"} items={ITEMS} onValueChange={this.onValueChange} />

        <Button onPress={this.nextSceneHandler}>CADASTRAR</Button>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 30
  }
});

export default component;
