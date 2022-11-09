import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { View } from "react-native-ui-lib";

const Input = ({ label, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#858585"
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#282828",
    borderRadius: 15,
    paddingHorizontal: 20,
    width: "100%",
    height: 52,
    justifyContent: "center",
  },
  input: {
    color: "#FFF",
    fontSize: 17,
    height: 52,
    letterSpacing: 1,
  },
});

export default Input;
