import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import React from "react";
import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";
import DateCard from "../dates/dateCard";

const EventCard = ({ event }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Event", { eventId: event?.id })}
      style={styles.cardContainer}
    >
      <ImageBackground
        source={{ uri: event.image }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View
          style={[styles.imageOverlay, { backgroundColor: Colors.primary }]}
        />
        <View style={styles.dateContainer}>
          <DateCard date={event.date} />
        </View>
        <View style={styles.textContainer}>
          <Text h4 lightGray style={styles.eventTypeText}>
            {event?.type}
          </Text>
          <Text h4 white style={styles.imageTextTitle}>
            {event?.title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 237,
    height: 214,
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderRadius: 15,
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  eventTypeText: {
    textTransform: "uppercase",
    fontSize: 16,
    marginBottom: 5,
  },
  textContainer: {
    paddingLeft: 20,
    paddingBottom: 10,
  },
  imageTextTitle: {
    fontSize: 22,
  },
  dateContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default EventCard;
