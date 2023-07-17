// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";

// import Button from "../../components/Button";
// import Background from "../../components/Background";
// import Input from "../../components/Input";
// import Logo from "../../components/Logo";
// import Text from "../../components/Text";

// import { Actions } from "react-native-router-flux";


// class component extends Component {

//   goToLogin = () => {
//     Actions.Login();
//   }

//   render() {
//     return (
//       <Background padding>
//         <Logo />

//         <Text center large prompt bold>
//           PARABÉNS!
//         </Text>
//         <Text center roboto>
//           Seu usuário foi cadastrado com sucesso. Em instantes você vai receber um e-mail com um link para confirmação!
//         </Text>

//         <Text center roboto large light>
//           Clique no link no seu e-mail para finalizar a verificação do seu e-mail.
//         </Text>

  
//         <View style={styles.buttonContainer}>
//           <Button onPress={this.goToLogin} small>VOLTAR AO LOGIN</Button>
//         </View>

//       </Background>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10
//   },
//   buttonContainer: {
//     marginVertical: 10,
//     alignItems: "center"
//   },
//   workContainer: {
//     marginVertical: 20
//   }
// });

// export default component;
