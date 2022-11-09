import React from "react";
import { StatusBar } from "react-native";
import MainStack from "./src/navigation/MainStack";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import "./src/styles/colors/colorStyles";

require("react-native-ui-lib/config").setConfig({ appScheme: "default" });

StatusBar.setBarStyle("light-content");

const App = () => {
  const [fontsLoaded] = useFonts({
    "Saira-Stencil-One": require("./src/assets/fonts/SairaStencilOne-Regular.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <MainStack />;
};

export default App;
