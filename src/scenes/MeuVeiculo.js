import React, { Component } from "react";
import { StyleSheet, View, Text, Platform, ImageBackground, Image } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";
import Background from "../components/Background";
import CustomText from "../components/Text";
import EditButton from "../components/EditButton";
import Divider from "../components/Divider";
import Menu from "../components/Menu";

import MainPicture from "../components/MainPicture";
import OtherPicture from "../components/OtherPicture";
import OptionalListItem from "../components/OptionalListItem";
import MiniProfile from "../components/MiniProfile";

import Checkbox from "../components/Checkbox";

import TextArea from "../components/TextArea";

import Logo from "../assets/logotipo.svg";
import Save from "../assets/save.svg";
import HeaderLogo from "../assets/headerlogo.png";
import { Actions } from "react-native-router-flux";

class component extends Component {
  state = {
    menuOptions: [{ value: 0, label: "SP" }, { value: 1, label: "RJ" }, { value: 3, label: "MG" }],
    menuOptions2: [{ value: 0, label: "SÃO PAULO" }, { value: 1, label: "SANTO ANDRÉ" }, { value: 3, label: "SÃO BERNARDO" }],
    menuOptions3: [{ value: 0, label: "AIR BAG" }, { value: 1, label: "DIREÇÃO HIDRÁULICA" }, { value: 3, label: "AR CONDICIONADO" }]
  };

  nextSceneHandler = () => {
    Actions.VoceEstaQuaseLa();
  };

  render() {
    return (
      <Background white>
        {/* <View style={styles.test}>
          <View style={styles.test2}/>
        </View> */}

        <Image source={HeaderLogo} style={styles.headerLogo} />

        {/* <View style={styles.header}>
          <Logo height={80} width={60} />
          <MiniProfile />
        </View> */}

        <View style={styles.header}>
          <CustomText prompt bold large>
            Meu veículo
          </CustomText>
          <EditButton />
        </View>

        <View style={styles.header}>
          <CustomText roboto bold>
            CARRO
          </CustomText>
          <CustomText roboto bold>
            FUSCA
          </CustomText>
          <CustomText roboto bold>
            VOLKSWAGEM
          </CustomText>
          <CustomText roboto bold>
            1966
          </CustomText>
        </View>

        <Divider />

        <View style={styles.carValue}>
          {/* <View>
            <CustomText roboto>valor do seu carro na Tabela Fipe </CustomText>
            <CustomText prompt bold large>
              R$ 23.000
            </CustomText>
            <CustomText roboto bold>
              Valor à investir: R$ 5.000
            </CustomText>
          </View> */}
          <CustomText prompt bold large>
            Objetivo financeiro
          </CustomText>
          <EditButton />
        </View>

        <Divider />

        <CustomText roboto bold medium black margin>
          Informações
        </CustomText>
        <Input label={"QUILOMETRAGEM"} value={"90.000"} blue />
        <Input label={"RENAVAM"} value={"999 999 999"} blue />

        <CustomText roboto bold medium black margin>
          Localização
        </CustomText>
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"ESTADO"} menuOptions={this.state.menuOptions} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"CIDADE"} menuOptions={this.state.menuOptions2} />
        <Input label={"CEP"} value={"00000-000"} blue />

        <MainPicture />

        <View style={styles.otherPicturesContainer}>
          <OtherPicture />
          <OtherPicture />
          <OtherPicture />
        </View>

        <View style={styles.otherPicturesContainer}>
          <OtherPicture />
          <OtherPicture />
          <OtherPicture />
        </View>

        <CustomText roboto bold black medium margin>
          Opcionais
        </CustomText>

        <Checkbox>AR CONDICIONADO</Checkbox>
        <Checkbox>DIREÇÃO HIDRÁULICA/ELÉTRICA</Checkbox>
        <Checkbox>CÂMBIO AUTOMÁTICO</Checkbox>
        <Checkbox>DESEMBAÇADOR TRASEIRO</Checkbox>

        <CustomText roboto bold black medium margin>
          Outros opcionais
        </CustomText>

        <View style={styles.header}>
          <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"AIR BAG"} menuOptions={this.state.menuOptions3} margin />
          <Button xsmall add />
        </View>

        <CustomText roboto medium>
          Lista de opcionais
        </CustomText>

        <Divider />

        <OptionalListItem label={"Direção hidráulica"} />
        <OptionalListItem label={"Ar condicionado"} />
        <OptionalListItem label={"Desembaçador traseiro"} />

        <Divider />

        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"HACH"} menuOptions={this.state.menuOptions3} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"GASOLINA"} menuOptions={this.state.menuOptions3} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"8"} menuOptions={this.state.menuOptions3} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"VERMELHO"} menuOptions={this.state.menuOptions3} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"CÂMBIO"} menuOptions={this.state.menuOptions3} />

        <Checkbox>BLINDADO</Checkbox>

        <CustomText roboto bold black medium>
          Outras informações
        </CustomText>

        <View style={styles.header}>
          <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"ÚNICO DONO"} menuOptions={this.state.menuOptions3} margin />
          <Button xsmall add />
        </View>

        <CustomText roboto medium>
          Lista de informações
        </CustomText>

        <Divider />

        <OptionalListItem label={"IPVA Pago"} />
        <OptionalListItem label={"Licenciado"} />

        <Divider />

        <CustomText prompt>MENSAGEM AO TROCADOR</CustomText>
        <TextArea />
        <CustomText roboto small margin>
          Limite máximo de 400 caracteres
        </CustomText>

        {/* <View style={styles.saveButton}>
          <Save />
        </View> */}

        <Button onPress={this.nextSceneHandler}>SALVAR</Button>

      </Background>
    );
  }
}

const styles = StyleSheet.create({
  headerLogo: {
    width: 220,
    height: 30,
    marginBottom: 20
  },
  test: {
    width: "100%",
    height: 40,
    backgroundColor: "red"
  },
  test2: {
    width: "50%",
    height: 20,
    backgroundColor: "blue"
  },
  logo: {
    width: 60,
    height: 80
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  carValue: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  otherPicturesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10
  },
  addOptionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  saveButton: {
    height: 53,
    width: 53,
    borderRadius: 100,
    backgroundColor: "#002278",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignSelf: "flex-end",
    marginTop: 30
  }
});

export default component;
