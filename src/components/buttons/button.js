import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Button as UIButton, View, Typography } from "react-native-ui-lib";

const Button = ({ label, outline, action }) => {
  return (
    <View style={styles.buttonContainer}>
      {!outline && (
        <ImageBackground
          source={require("../../assets/media/images/purpleGradient.png")}
          style={styles.image}
        />
      )}
      <UIButton
        label={label}
        backgroundColor={"transparent"}
        labelStyle={Typography.button}
        style={outline ? styles.outlineButton : styles.button}
        onPress={action}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outlineButton: {
    width: "100%",
    height: 60,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: "2%",
  },
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    height: 60,
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default Button;
