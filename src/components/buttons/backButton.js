import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <Ionicons name="arrow-back" size={34} color="#858585" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 58,
    height: 38,
    backgroundColor: "#282828",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    textTransform: "uppercase",
  },
});

export default BackButton;
