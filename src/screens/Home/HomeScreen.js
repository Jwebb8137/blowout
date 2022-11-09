import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import EventCard from "../../components/cards/eventCard";
import DateCard from "../../components/dates/dateCard";
import Input from "../../components/inputs/input";
import { eventData } from "../../extra/extraData";

const HomeScreen = () => {
  return (
    <ScrollView
      nestedScrollEnabled
      style={styles.rootContainer}
      showsVerticalScrollIndicator={false}
    >
      <View useSafeArea>
        <View paddingL-20>
          <Text h4 marginV-15 white style={styles.textHeader}>
            Explore events
          </Text>
          <Input label="Search" placeholder={"Search for events..."} />
          <Text h4 marginV-15 white style={styles.textSubHeader}>
            Featured
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {eventData.map((event) => (
              <View marginR-20 key={event.id}>
                <EventCard event={event} />
              </View>
            ))}
          </ScrollView>
          <Text h4 marginV-15 white style={styles.textSubHeader}>
            Nearest You
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {eventData.map((event) => (
              <View marginR-20 key={event.id}>
                <EventCard event={event} />
              </View>
            ))}
          </ScrollView>
          <ImageBackground
            source={require("../../assets/media/images/purpleGradient.png")}
            style={styles.bannerImageCard}
            imageStyle={styles.bannerImage}
          >
            <View row paddingV-15>
              <View flex paddingR-20>
                <Text h4 marginB-4 white style={styles.textHeader}>
                  Free Event
                </Text>
                <Text h4 lightGray>
                  Join the biggest party of the year!
                </Text>
              </View>
              <View>
                <DateCard date="2022-11-02" />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  textHeader: {
    fontSize: 26,
  },
  textSubHeader: {
    fontSize: 20,
  },
  eventList: {
    backgroundColor: "red",
  },
  bannerImage: {
    borderRadius: 18,
  },
  bannerImageCard: {
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
