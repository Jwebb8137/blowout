import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "react-native-ui-lib";
import Button from "../../components/buttons/button";
import Input from "../../components/inputs/input";

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View paddingT-250 style={styles.rootContainer}>
      <ImageBackground
        source={require("../../assets/media/images/concert-fans.png")}
        style={styles.image}
      />
      <View centerH paddingT-23 paddingH-20 style={styles.signInContainer}>
        <Text h3 white>
          Welcome Back!
        </Text>
        <Text p marginB-15 bold lightGray style={styles.subTitle}>
          Sign into your account below
        </Text>
        <Input label="Email" placeholder="Username" />
        <View marginV-6 />
        <Input label="Password" placeholder="Password" secureTextEntry />
        <Text
          marginT-9
          marginB-14
          p
          bold
          lightGray
          style={styles.forgotPassword}
        >
          Forgot Password?
        </Text>
        <Button label="Log In" action={() => navigation.navigate("Tabs")} />
        <View marginT-28 row>
          <TouchableOpacity style={styles.authButton}>
            <Image
              source={require("../../assets/media/icons/google.png")}
              style={styles.authImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.authButton}>
            <Image
              source={require("../../assets/media/icons/facebook.png")}
              style={styles.authImage}
            />
          </TouchableOpacity>
        </View>
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
    flex: 1,
  },
  subTitle: {},
  signInContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
  authButton: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
    opacity: 0.8,
  },
  authImage: {
    height: 32,
    width: 32,
  },
});

export default SignInScreen;
