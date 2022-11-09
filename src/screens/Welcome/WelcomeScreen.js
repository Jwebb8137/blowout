import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import Button from "../../components/buttons/button";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View paddingT-35 style={styles.rootContainer}>
      <ImageBackground
        source={require("../../assets/media/images/concert-fans.png")}
        style={styles.image}
      />
      <View center>
        <Text h1 white marginT-20>
          BLOWOUT
        </Text>
        <Text p bold lightGray style={styles.subTitle}>
          Setting fire to your biggest events
        </Text>
      </View>
      <View marginB-40 paddingH-30>
        <Button label="Sign In" action={() => navigation.navigate("Sign In")} />
        <View marginV-10 />
        <Button label="Sign Up" outline />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    left: 0,
    top: 0,
  },
  rootContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
  subTitle: {
    top: -15,
  },
});

export default WelcomeScreen;
