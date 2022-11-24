import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, Picker, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

const FormDropdownInput = ({ label, placeholder, options }) => {
  return (
    <View marginV-5>
      <Text white p style={styles.label}>
        {label}
      </Text>
      <Picker
        placeholder={placeholder}
        placeholderTextColor="#858585"
        style={styles.input}
        migrateTextField
        trailingAccessory={
          <Ionicons name="chevron-down" size={24} color={Colors.lightGray} />
        }
        containerStyle={styles.inputContainer}
        useWheelPicker
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.name}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#282828",
    borderRadius: 15,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "center",
    height: 48,
    paddingBottom: 0,
    paddingTop: 17,
  },
  input: {
    color: "#FFF",
    fontSize: 17,
    letterSpacing: 1,
  },
  label: {
    marginLeft: 2,
    marginBottom: 8,
  },
});

export default FormDropdownInput;
