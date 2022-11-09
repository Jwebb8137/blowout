import { Colors, Typography, Spacings } from "react-native-ui-lib";

Typography.loadTypographies({
  h1: {
    fontSize: 54,
    fontWeight: "300",
    lineHeight: 80,
    letterSpacing: "2%",
    fontFamily: "Saira-Stencil-One",
  },
  h2: {
    fontSize: 46,
    fontWeight: "300",
    lineHeight: 64,
    fontFamily: "Saira-Stencil-One",
    letterSpacing: "2%",
  },
  h3: {
    fontSize: 34,
    fontWeight: "400",
    lineHeight: 48,
    fontFamily: "Saira-Stencil-One",
    letterSpacing: "2%",
  },
  h4: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    letterSpacing: 1,
  },
  p: {
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: "Roboto-Regular",
    letterSpacing: 1,
  },
  button: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    fontFamily: "Roboto-Regular",
    letterSpacing: "2%",
  },
  bold: {
    fontWeight: "bold",
  },
});

Colors.loadColors({
  screenBG: "#F5F5F5",
  primary: "#4C0C7F",
  secondary: "#00FF00",
  tertiary: "#0000FF",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#808080",
  lightGray: "#DBDBDB",
  darkGray: "#858585",
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFFF00",
  orange: "#FFA500",
  purple: "#800080",
  pink: "#FFC0CB",
});

Spacings.loadSpacings({
  page: 20,
});

Colors.loadSchemes({
  light: {
    screenBG: "#FFF",
    textColor: "blue",
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50,
  },
  dark: {
    screenBG: "yellow",
    textColor: "white",
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20,
  },
});

// function to change the color scheme
Colors.setScheme("light");
