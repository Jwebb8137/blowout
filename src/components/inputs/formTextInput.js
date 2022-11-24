import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { View, Text } from "react-native-ui-lib";

const FormTextInput = ({ label, placeholder, secureTextEntry, number }) => {
  return (
    <View marginV-5>
      <Text white p style={styles.label}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#858585"
          style={styles.input}
          secureTextEntry={secureTextEntry}
          keyboardType={number ? "numeric" : "default"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#282828",
    borderRadius: 15,
    paddingHorizontal: 20,
    width: "100%",
    height: 48,
    justifyContent: "center",
  },
  input: {
    color: "#FFF",
    fontSize: 17,
    height: 48,
    letterSpacing: 1,
  },
  label: {
    marginLeft: 2,
    marginBottom: 8,
  },
});

export default FormTextInput;
