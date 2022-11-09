import dayjs from "dayjs";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";

const DateCard = ({ date, alt }) => {
  const altDateCard = (
    <ImageBackground
      source={require("../../assets/media/images/purpleGradient.png")}
      style={[styles.cardContainer, styles.altCardContainer]}
      imageStyle={styles.imageStyle}
    >
      <Text h4 white style={[styles.monthText, styles.altMonthText]}>
        {dayjs(date).format("MMM")}
      </Text>
      <Text h4 white style={[styles.dateText, styles.altDateText]}>
        {dayjs(date).format("DD")}
      </Text>
    </ImageBackground>
  );

  if (alt) {
    return altDateCard;
  }

  return (
    <View style={styles.cardContainer}>
      <Text bold darkGray style={styles.monthText}>
        {dayjs(date).format("MMM")}
      </Text>
      <Text h4 style={styles.dayText}>
        {dayjs(date).format("DD")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 53,
    height: 48,
    backgroundColor: "#FFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  monthText: {
    fontSize: 13,
    textTransform: "uppercase",
  },
  dayText: {
    lineHeight: 22,
    letterSpacing: 0,
  },
  imageStyle: {
    borderRadius: 12,
    resizeMode: "auto",
  },
  altCardContainer: {
    width: 64,
    height: 58,
  },
  altMonthText: {
    fontSize: 15,
  },
  altDateText: {
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: 24,
  },
});

export default DateCard;
