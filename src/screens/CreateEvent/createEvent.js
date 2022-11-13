import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-ui-lib";
import CreateEventForm from "./forms/createEventForm";

const CreateEvent = () => {
  return (
    <View bg-black flex>
      <CreateEventForm />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEvent;
