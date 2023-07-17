import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Text from "../components/Text";
import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import { Actions } from "react-native-router-flux";

class component extends Component {

  nextSceneHandler = () => {
    Actions.SendSecurityCheck();
    // Actions.Login();

  }
  
  nextSceneHandler2 = () => {
    Actions.Login();
  }

  render() {
    return (
      <Background footer>
        <Logo />

        <View style={styles.textContainer}>
          <Text prompt bold center large>
            Bem vindo ao
          </Text>
          <Text prompt bold center large>
            PenseTroque
          </Text>
          {/* <Text roboto center>
            Se você já possui um veículo publicado no
          </Text>
          <Text roboto center>
            PenseTroque, você pode fazer seu Login
          </Text>
          <Text roboto center>
            recebendo código de segurança através de
          </Text>
          <Text roboto center>
            mensagem SMS.
          </Text> */}

          <Text roboto center>
            Se você já possui um veículo publicado no PenseTroque, você pode fazer seu Login recebendo código de segurança através de mensagem SMS.
          </Text>
        </View>

        {/* <View> */}
        <Button onPress={this.nextSceneHandler}>JÁ POSSUO VEÍCULO PUBLICADO</Button>
        <Button onPress={this.nextSceneHandler2}>AINDA NÃO PUBLIQUEI MEU VEÍCULO</Button>
        {/* </View> */}
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 20
  }
});

export default component;
