import React, { Component } from "react";
import { StyleSheet, View, Platform, ImageBackground, Image, TouchableOpacity } from "react-native";

import Background from "../components/Background";
import Input from "../components/Input";
import InputMasked from "../components/InputMasked";
import Button from "../components/Button";
import Text from "../components/Text";
import Divider from "../components/Divider";

import HeaderLogo from "../assets/headerlogo.png";
import OpenEyeIcon from "../assets/eye-open.png";
import CloseEyeIcon from "../assets/eye-close.png";
import AvatarImage from "../assets/avatar.png";
import { Actions } from "react-native-router-flux";

import ImagePicker from 'react-native-image-picker';

class component extends Component {
  state = {
    name: "",
    cpf: "",
    phone: "",
    email: "",
    birthday: "",
    user: "",
    password: "",
    time_contact_begin: "",
    time_contact_end: "",
    photo_url: null,
    error: false,
    errorMessage: "",
    encrypt: true
  };

  onSaveHandler = async () => {
    if (this.state.name && this.state.user && this.state.email && this.state.password) {
      try {

        // EXEMPLO - Envia os dados para o Firebase
        /*
        const users = await firebase.firestore().collection("users")
          .doc("USER-ID-EXEMPLO1234ABC")
          .update({
            name: this.state.name: 
            cpf: this.state.cpf
            phone: this.state.phone
            email: this.state.email
            birthday: this.state.birthday
            user: this.state.user
            password: this.state.password
            time_contact_begin: this.state.time_contact_begin
            time_contact_end: this.state.time_contact_end
            photo_url: this.state.photo_url
          });
        */
        Actions.FiltersScene();
      } catch (error) {
        this.setState({
          error: true,
          errorMessage: "Erro ao cadastrar. Tente novamente"
        });
      }
    } else {
      this.setState({
        error: true,
        errorMessage: "Erro ao cadastrar. Tente novamente"
      });
    }
  };

  onPhotoHandler = () => {

    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // Vc tb exibir a imagem assim:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({ photo_url: source })
      }
    });
  }

  render() {
    return (
      <Background aux={0}>
        <Image source={HeaderLogo} style={styles.headerLogo} />

        <View style={styles.profileContainer}>

          <TouchableOpacity style={styles.pictureContainer} onPress={this.onPhotoHandler}>
            <View style={styles.pictureBorder}>
              {this.state.photo_url ?
                <Image source={this.state.photo_url} style={styles.avatarImage} />
              : <Image source={AvatarImage} style={styles.avatarImage} />}
            </View>
          </TouchableOpacity>

          <View style={styles.aux}></View>

          <Input white label={"NOME"} value={this.state.name} onChangeText={text => this.setState({ name: text })} />
          <InputMasked white label={"CPF"} type={"cpf"} maxLength={14} value={this.state.cpf} keyboardType={"number-pad"} onChangeText={text => this.setState({ cpf: text })} />
          <InputMasked white label={"WHATSAPP"} type={"cel-phone"} maxLength={15} value={this.state.phone} keyboardType={"number-pad"} onChangeText={text => this.setState({ phone: text })} />
          <Input white label={"E-MAIL"} value={this.state.email} autoCapitalize={"none"} keyboardType={"email-address"} onChangeText={text => this.setState({ email: text })} />
          <InputMasked white label={"DIA DE NASCIMENTO"} type={"datetime"} maxLength={10} options={{ format: "DD/MM/YYYY" }} value={this.state.birthday} keyboardType={"number-pad"} onChangeText={text => this.setState({ birthday: text })} />
          <Input white label={"LOGIN"} autoCapitalize={"none"} value={this.state.user} onChangeText={text => this.setState({ user: text })} />

          <TouchableOpacity onPress={() => this.setState({ encrypt: !this.state.encrypt })}>
            <View style={styles.iconContainer}>
              <Input white label={"SENHA"} value={this.state.password} autoCapitalize={"none"} secureTextEntry={this.state.encrypt} onChangeText={text => this.setState({ password: text })} />
              {this.state.encrypt ?
                <Image style={styles.icon} source={CloseEyeIcon} />
                : <Image style={styles.icon} source={OpenEyeIcon} />}
            </View>
          </TouchableOpacity>

          <Text roboto white>Melhor horário para contato</Text>
          <Divider white />

          <View style={styles.timeContainer}>
            <InputMasked type={"datetime"} options={{ format: 'HH:mm' }} maxLength={5} white label={"HORÁRIO INICIAL"} keyboardType={"number-pad"} value={this.state.time_contact_begin} onChangeText={text => this.setState({ time_contact_begin: text })} />
            <InputMasked type={"datetime"} options={{ format: 'HH:mm' }} maxLength={5} white label={"HORÁRIO FINAL"} keyboardType={"number-pad"} value={this.state.time_contact_end} onChangeText={text => this.setState({ time_contact_end: text })} />
          </View>

          <Text roboto bold error center>
            {this.state.errorMessage}
          </Text>

          <Button profile onPress={this.onSaveHandler} disabled={this.state.name && this.state.user && this.state.email && this.state.password ? false : true}>SALVAR PERFIL</Button>

        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  headerLogo: {
    width: 220,
    height: 30,
    margin: 20
  },
  profileContainer: {
    flex: 1,
    backgroundColor: "#006828",
    // height: 500,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    marginTop: 100,
    paddingHorizontal: 40,
    paddingVertical: 40
  },
  aux: {
    height: 60
  },
  pictureContainer: {
    height: 174,
    width: 174,
    // borderColor: "white",
    // borderWidth: 18,
    borderRadius: 400,
    alignSelf: "center",
    top: -110,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  pictureBorder: {
    backgroundColor: "white",
    borderColor: "#006828",
    borderWidth: 9,
    width: "85%",
    height: "85%",
    borderRadius: 400,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    position: "absolute",
    top: 24,
    right: 5,
    height: 22,
    width: 22,
    resizeMode: "stretch",
    alignSelf: "flex-end",
  },
  avatarImage: {
    resizeMode: "cover",
    alignSelf: "center",
    width: 130,
    height: 130,
    borderRadius: 75
  },
});

export default component;
