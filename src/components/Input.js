import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

class component extends Component {
  render() {
    const textInputStyles = [styles.input];
    const labelStyles = [styles.label];

    this.props.confirmation ? textInputStyles.push(styles.confirmation) : null;
    this.props.blue ? textInputStyles.push(styles.blue) : null;
    this.props.white ? textInputStyles.push(styles.white) : null;
    this.props.white ? labelStyles.push(styles.white) : null; 

    return (
      <View style={styles.container}>
        <Text style={labelStyles}>{this.props.value.length > 0 ? this.props.label : " "}</Text>
        <TextInput
          placeholder={this.props.label} 
          secureTextEntry={this.props.secureTextEntry}
          autoCapitalize={this.props.autoCapitalize}
          style={textInputStyles} 
          value={this.props.value} 
          onChangeText={this.props.onChangeText} 
          underlineColorAndroid="transparent" 
          keyboardType={this.props.keyboardType}
          maxLength={this.props.maxLength}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingBottom: 10,
    paddingTop: 0,
    paddingLeft: 10,
    borderWidth: 0,
    margin: 5,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#F9A000",
    borderBottomWidth: 1,
    borderBottomColor: "#707070"
  },
  blue: {
    fontFamily: "Prompt-Regular",
    fontSize: 16,
    color: "#002278"
  },
  white: {
    color: "white",
    borderBottomColor: "white",
  },
  label: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#707070"
  },
  container: {
    flex:1, 
    // width: "100%",
    // marginTop: 10,
    marginBottom: 15
  },
  confirmation: {
    fontSize: 30,
    fontFamily: "Prompt-Bold",
    letterSpacing: 2.5,
    textAlign: "center"
  }
});

export default component;
