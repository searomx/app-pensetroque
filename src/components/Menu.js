import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import MenuDown from "../assets/menu-down.svg";

class component extends Component {
  render() {
    const placeholder = {
      label: this.props.placeholder,
      value: null
    };

    return (
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>{this.props.value ? this.props.placeholder : " "}</Text>
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={placeholder}
          items={this.props.items}
          onValueChange={value => {
            this.props.onValueChange(this.props.input, value);
          }}
          style={pickerSelectStyles}
          value={this.props.value}
        >
        </RNPickerSelect>
        {/* <MenuDown style={styles.icon}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    flex:1,
    marginBottom: 20
  },
  label: {
    color: "#707070",
    fontSize: 13,
    fontFamily: "Roboto-Regular"
  },
  icon: {
    position: "absolute",
    bottom: 20,
    right: 20
  }
});

const pickerSelectStyles = StyleSheet.create({
  placeholder: {
    fontSize: 16,
    fontFamily: "Prompt-Regular",
    opacity: 0.5,
    color: "#002278"
  },
  inputAndroid: {
    fontSize: 16,
    color: "#002278",
    paddingTop: 0,
    paddingBottom: 5,
    paddingHorizontal: 10,
    margin: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#707070"
  },
  inputIOS: {
    fontSize: 16,
    color: "#002278",
    paddingTop: 0,
    paddingBottom: 5,
    paddingHorizontal: 10,
    margin: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#707070"
  }
});

export default component;
