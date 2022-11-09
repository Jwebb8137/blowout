import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-ui-lib";

const SmallButton = ({ text, onPress, active, inactive }) => {
  return (
    <View
      style={[
        styles.buttonContainer,
        { backgroundColor: active ? "#FFF" : "#282828" },
      ]}
    >
      <Text
        h4
        style={[styles.buttonText, { color: active ? "#000" : "#858585" }]}
        onPress={onPress}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 9,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Roboto-Regular",
  },
});

export default SmallButton;
