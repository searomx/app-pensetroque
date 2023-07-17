import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Background from "../components/Background";

import Text from "../components/Text";

import Logo from "../assets/logotipo.svg";
import IconButton from "../components/IconButton";

import MiniProfile from "../components/MiniProfile";
import Car from "../assets/car.png";
import Divider from "../components/Divider";

import Carousel from "react-native-snap-carousel";

import DotDotDotMenu from "../components/DotDotDotMenu";

import FilterMenu from "../components/FilterMenu";


import { Actions } from "react-native-router-flux";


class component extends Component {
  state = {
    isMenuOpen: false,
    isFilterOpen: true
  };

  _renderItem({ item, index }) {
    return (
      // <View style={styles.slide}>
      //   <Text style={styles.title}>{item.title}</Text>
      // </View>
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }

  toggleMenuHandler = () => {
    this.setState(prevState => {
      return {
        isMenuOpen: !prevState.isMenuOpen
      };
    });
  };

  toggleFilterHandler = () => {
    this.setState(prevState => {
      return {
        isFilterOpen: !prevState.isFilterOpen
      };
    });
  };

  goToFilterScene = () => {
    Actions.FiltersScene();
  }

  render() {
    return (
      <Background padding>
        <View style={styles.veiculoContainer}>
          <View style={styles.header}>
            <View style={styles.logoBorder}>
              <View style={styles.logoContainer}>
                <Logo height={60} width={60} />
              </View>
            </View>
            <IconButton type={"publish"} onPress={this.test} green />
            <IconButton type={"filter"} onPress={this.toggleFilterHandler} yellow />
            <IconButton type={"dotdotdot"} onPress={this.toggleMenuHandler} />
          </View>

          {this.state.isMenuOpen && <DotDotDotMenu />}
          {this.state.isFilterOpen && <FilterMenu onPress={this.goToFilterScene}/>}

          <View style={styles.containerOffset}>
            {/* <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={200}
              itemWidth={150}
            /> */}

            <ImageBackground source={Car} style={styles.mainPicture} />

            <View style={styles.favIconContainer}>
              <IconButton type={"fav"} large />
            </View>

            <View style={styles.textContainer}>
              <Text roboto white>
                Renault
              </Text>
              <Text prompt bold large white>
                Clio - 2018
              </Text>

              <Text roboto white>
                Tabela Fipe: R$ 39.000
              </Text>

              <Text roboto white>
                Valor a receber: R$ 10.000
              </Text>

              <Divider />

              <Text roboto white bold>
                Total: R$ 49.000
              </Text>

              <Text roboto white margin>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>

              <Text roboto white margin opacity bold>
                VER MAIS
              </Text>
            </View>
          </View>

          {/* <View style={styles.extraSpace} /> */}

          <View style={styles.iconPosition}>
            <View style={styles.iconsContainer}>
              <IconButton type={"prev"} large />
              <IconButton type={"view"} large />
              <IconButton large error />
              <IconButton type={"next"} large />
            </View>
          </View>
        </View>
        {/* 
        <View style={styles.errorContainer}>
          <Text roboto error bold center>
            Para entrar em contato com esse trocador você precisa completar o cadastro do seu veículo e o cadastro do seu perfil.
          </Text>
        </View> */}
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  favIconContainer: {
    alignSelf: "flex-end"
  },
  iconsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  iconPosition: {
    bottom: -30,
    width: "85%",
    alignSelf: "center"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // position: "relative",
    top: -60,
    zIndex: 20
  },
  logoBorder: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: "#002278",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  logoContainer: {
    backgroundColor: "white",
    height: 85,
    width: 85,
    borderRadius: 160,
    justifyContent: "center",
    alignItems: "center"
  },
  veiculoContainer: {
    flex: 1,
    backgroundColor: "#002278",
    borderRadius: 40,
    // padding: 20,
    marginTop: 60,
    zIndex: 1
  },
  containerOffset: {
    // position: "relative",
    top: -90,
    padding: 20
  },
  mainPicture: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10
  },
  textContainer: {
    paddingHorizontal: 10
  },
  errorContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50
  }
});

export default component;
