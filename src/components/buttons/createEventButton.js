import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import { FontAwesome } from "@expo/vector-icons";

const CreateEventButton = ({ containerStyle, action }) => {
  return (
    <TouchableOpacity onPress={action} style={containerStyle}>
      <ImageBackground
        source={require("../../assets/media/images/purpleGradient.png")}
        style={styles.bannerImageCard}
        imageStyle={styles.bannerImage}
      >
        <View style={styles.button}>
          <FontAwesome name="plus" size={24} color="#FFF" />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 45,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImageCard: {
    width: 45,
    height: 45,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImage: {
    borderRadius: 45,
  },
});

export default CreateEventButton;
