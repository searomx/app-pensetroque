import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import firebase from "react-native-firebase";
import { Actions } from "react-native-router-flux";

import SplashScreen from "react-native-splash-screen";
import LoginFooter from "./src/components/LoginFooter";
import Login from "./src/scenes/Login";
import CreateAccount from "./src/scenes/CreateAccount";
import EmailVerification from "./src/scenes/EmailVerification";
import PasswordRecovery from "./src/scenes/PasswordRecovery";

import Welcome from "./src/scenes/Welcome";
import HelloTrocador from "./src/scenes/HelloTrocador";
import CadastrarVeiculo from "./src/scenes/CadastrarVeiculo";
import ValorMeuVeiculo from "./src/scenes/ValorMeuVeiculo";
import ObjetivoFinanceiro from "./src/scenes/ObjetivoFinanceiro";
import VeiculoCadastrado from "./src/scenes/VeiculoCadastrado";

import OQueEPenseTroque from "./src/scenes/OQueEPenseTroque";
import ComoFunciona from "./src/scenes/ComoFunciona";
import ComoFuncionaFiltros from "./src/scenes/ComoFuncionaFiltros";
import ComoFuncionaMatches from "./src/scenes/ComoFuncionaMatches";

import Footer from "./src/components/Footer";

// Gustavo
import Perfil from "./src/scenes/Perfil";
import FiltersScene from "./src/scenes/FiltersScene";
import MatchesFooter from "./src/components/MatchesFooter";
// import ValorTabelaFipe from "./src/scenes/ValorTabelaFipe";

import ObjetivoFinanceiroCadastrado from "./src/scenes/ObjetivoFinanceiroCadastrado";
import PublicarMeuVeiculo from "./src/scenes/PublicarMeuVeiculo";
import QuaseLa from "./src/scenes/QuaseLa";
import MeuVeiculo from "./src/scenes/MeuVeiculo";
import VoceEstaQuaseLa from "./src/scenes/VoceEstaQuaseLa";
import VeiculoProfile from "./src/scenes/VeiculoProfile";
import { Animated, Easing, View } from "react-native";

const store = configureStore();

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      SplashScreen.hide();
      if (user) {
        if (user.emailVerified) {
          Actions.HelloTrocador();
        } else {
          Actions.Login();
        }
      } else {
        Actions.Login();
      }
    });

    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Router headerMode="none">
          <Stack key="root">
            <Scene key="LoginFooterTabs" tabs tabBarComponent={LoginFooter}>
              <Scene key="Welcome" component={Welcome} />
              <Scene key="Login" component={Login} />
              <Scene key="CreateAccount" component={CreateAccount} />
              <Scene key="EmailVerification" component={EmailVerification} />
              <Scene key="PasswordRecovery" component={PasswordRecovery} />

              <Scene key="OQueEPenseTroque" component={OQueEPenseTroque} />
              <Scene key="ComoFunciona" component={ComoFunciona} />
              <Scene key="ComoFuncionaFiltros" component={ComoFuncionaFiltros} />
              <Scene key="ComoFuncionaMatches" component={ComoFuncionaMatches} />
            </Scene>

            <Scene key="CadastrarVeiculo" component={CadastrarVeiculo} />
            <Scene key="ValorMeuVeiculo" component={ValorMeuVeiculo} />
            <Scene key="ObjetivoFinanceiro" component={ObjetivoFinanceiro} />
            <Scene key="VeiculoCadastrado" component={VeiculoCadastrado} />

            <Scene key="HelloTrocador" component={HelloTrocador} />

            <Scene key="OQueEPenseTroque" component={OQueEPenseTroque} />
            <Scene key="ComoFunciona" component={ComoFunciona} />
            <Scene key="ComoFuncionaFiltros" component={ComoFuncionaFiltros} />
            <Scene  key="ComoFuncionaMatches" component={ComoFuncionaMatches} />

            {/* <Scene initial key="FooterTabs" tabs tabBarComponent={Footer}>
            </Scene> */}

            {/* <Scene key="ValorTabelaFipe" component={ValorTabelaFipe} /> */}
              <Scene key="ObjetivoFinanceiro" component={ObjetivoFinanceiro} />
              <Scene key="ObjetivoFinanceiroCadastrado" component={ObjetivoFinanceiroCadastrado} />

              <Scene key="VeiculoCadastrado" component={VeiculoCadastrado} />
              <Scene key="QuaseLa" component={QuaseLa} />


              <Scene key="OQueEPenseTroque" component={OQueEPenseTroque} />
              <Scene key="ComoFunciona" component={ComoFunciona} />
              <Scene key="ComoFuncionaFiltros" component={ComoFuncionaFiltros} />
              <Scene key="ComoFuncionaMatches" component={ComoFuncionaMatches} />

            <Scene key="MeuVeiculo" component={MeuVeiculo} />
              <Scene key="PublicarMeuVeiculo" component={PublicarMeuVeiculo} />
              <Scene key="VoceEstaQuaseLa" component={VoceEstaQuaseLa} />

            <Scene tabs tabBarComponent={MatchesFooter} key={"MatchesStack"}>
                <Scene key="VeiculoProfile" component={VeiculoProfile} />
              </Scene>

            <Scene key="Perfil" component={Perfil} />
            <Scene key="Perfil" component={Perfil} />
            <Scene key="FiltersScene" component={FiltersScene} />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;

// "android-production": sudo rm -rf android/app/src/main/assets/index.android.bundle && sudo rm -rf android/app/build/outputs/apk/* && sudo react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android && sudo ./gradlew clean && ./gradlew assembleRelease

// // const transitionConfig = () => ({
// //   transitionSpec: MyTransitionSpec
// // });

// // const transitionConfig = () => {
// //   return {
// //     transitionSpec: {
// //       duration: 750,
// //       easing: Easing.out(Easing.poly(4)),
// //       timing: Animated.timing,
// //       useNativeDriver: true
// //     },
// //     screenInterpolator: sceneProps => {
// //       const { layout, position, scene } = sceneProps;

// //       const thisSceneIndex = scene.index;
// //       const width = layout.initWidth;

// //       const translateX = position.interpolate({
// //         inputRange: [thisSceneIndex - 1, thisSceneIndex],
// //         outputRange: [width, 0]
// //       });

// //       return { transform: [{ translateX }] };
// //     }
// //   };
// // };

// const MyTransitionSpec = {
//   duration: 0
//   // easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
//   // timing: Animated.timing,
// };

// const transitionConfig = () => {
//   return {
//     transitionSpec: {
//       duration: 750,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true
//     },
//     screenInterpolator: sceneProps => {
//       const { position, layout, scene, index, scenes } = sceneProps;
//       const toIndex = index;
//       const thisSceneIndex = scene.index;
//       const height = layout.initHeight;
//       const width = layout.initWidth;

//       const translateX = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
//         outputRange: [width, 0, 0]
//       });

//       // Since we want the card to take the same amount of time
//       // to animate downwards no matter if it's 3rd on the stack
//       // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
//       const translateY = position.interpolate({
//         inputRange: [0, thisSceneIndex],
//         outputRange: [height, 0]
//       });

//       const slideFromRight = { transform: [{ translateX }] };
//       const slideFromBottom = { transform: [{ translateY }] };

//       const lastSceneIndex = scenes[scenes.length - 1].index;

//       // Test whether we're skipping back more than one screen
//       if (lastSceneIndex - toIndex > 1) {
//         // Do not transoform the screen being navigated to
//         if (scene.index === toIndex) return;
//         // Hide all screens in between
//         if (scene.index !== lastSceneIndex) return { opacity: 0 };
//         // Slide top screen down
//         return slideFromBottom;
//       }

//       return slideFromRight;
//     }
//   };
// };
