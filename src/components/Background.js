import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Keyboard, StatusBar, Image } from "react-native";
import { withSafeArea } from "react-native-safe-area";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NovoBg from "../assets/novobg.jpg";

const SafeAreaView = withSafeArea(View, "margin", "all");

class component extends Component {
  
  static defaultProps = {
    aux: 20,
  };

  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <StatusBar 
          backgroundColor="#002278"
          barStyle={"light-content"}
        />
        {/* <ScrollView style={styles.scrollview}>{this.props.children}</ScrollView> */}
        <KeyboardAwareScrollView
          // style={[styles.scrollview, this.props.white ? styles.white : null]}
          contentContainerStyle={[styles.scrollview, this.props.white ? styles.white : null, this.props.padding ? styles.padding : null]}
        >
          {this.props.children}
          <View style={{paddingVertical: this.props.aux}}></View>
        </KeyboardAwareScrollView>
        {/* {this.props.footer && <Footer howPtWorks={this.props.howPtWorks}/>} */}
        {this.props.white ? null : <Image source={NovoBg} style={styles.background} />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: "100%",
    height: "100%"
  },
  scrollview: {
    backgroundColor: "transparent"
    // paddingVertical: 20,
    // paddingHorizontal: 20
  },
  padding: {
    paddingVertical: 20,
    paddingHorizontal: 40
  },
  white: {
    backgroundColor: "white"
  },
  // aux: {
  //   paddingVertical: 20
  // }
});

export default component;
