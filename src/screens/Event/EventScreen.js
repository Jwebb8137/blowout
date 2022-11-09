import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";
import { eventData } from "../../extra/extraData";
import dayjs from "dayjs";
import DateCard from "../../components/dates/dateCard";
import BackButton from "../../components/buttons/backButton";
import SmallButton from "../../components/buttons/smallButton";
import { FontAwesome } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import MapStyle from "../../extra/mapStyles";

const EventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const eventId = route.params?.eventId;
  const [event, setEvent] = useState(null);

  const getEventById = async () => {
    return (
      eventData.find((event) => {
        return event.id === eventId;
      }) || {}
    );
  };

  useEffect(() => {
    const getEvent = async () => {
      const event = await getEventById(eventId);
      setEvent(event);
    };
    getEvent();
  }, [eventId]);

  return (
    <View flex style={styles.container}>
      <View row style={styles.eventHeaderOptions}>
        <BackButton />
      </View>
      <ScrollView>
        <ImageBackground
          source={{ uri: event?.image }}
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <View
            style={[styles.imageOverlay, { backgroundColor: Colors.primary }]}
          />
          <View spread row paddingV-10 paddingH-15>
            <View>
              <Text marginB-6 h4 lightGray style={styles.subTitleText}>
                {event?.type}
              </Text>
              <Text h3 white style={styles.titleText}>
                {event?.title}
              </Text>
              <Text h4 lightGray style={styles.dateTimeText}>
                Starting at {dayjs(event?.date).format("h:mm A")}
              </Text>
            </View>
            <View>
              <DateCard date={event?.date} alt />
            </View>
          </View>
        </ImageBackground>
        <View paddingH-12>
          <View paddingT-20 row>
            <View marginR-14>
              <SmallButton active text="ABOUT" onPress={() => {}} />
            </View>
            <View>
              <SmallButton inactive text="PARTICIPANTS" onPress={() => {}} />
            </View>
          </View>
          <View marginT-14>
            <Text h4 lightGray style={styles.descriptionText}>
              {event?.description}
            </Text>
          </View>
          <Text marginT-16 h4 lightGray>
            LOCATION
          </Text>
          {event?.location && (
            <MapView
              provider="google"
              style={styles.map}
              customMapStyle={MapStyle}
              initialRegion={{
                latitude: event?.coordinates?.latitude,
                longitude: event?.coordinates?.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              minZoomLevel={8} // default => 0
              maxZoomLevel={20}
            >
              <Marker
                coordinate={{
                  latitude: event?.coordinates?.latitude,
                  longitude: event?.coordinates?.longitude,
                }}
                title={event?.title}
                description={event?.description}
                pinColor={Colors.primary}
              />
            </MapView>
          )}
        </View>
      </ScrollView>
      <View paddingH-12 spread row style={styles.eventFooterContainer}>
        <View>
          <Text lightGray p>
            PRICE
          </Text>
          <Text white p>
            ${event?.ticketPrice.toFixed(2)}/person
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Ticket")}>
          <ImageBackground
            source={require("../../assets/media/images/purpleGradient.png")}
            imageStyle={styles.buyButtonImage}
            style={styles.buyButton}
          >
            <View row>
              <Text marginR-12 white p style={styles.buyButtonText}>
                BUY A TICKET
              </Text>
              <FontAwesome name="ticket" size={24} color="white" />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 2.5,
    justifyContent: "flex-end",
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.4,
  },
  subTitleText: {
    textTransform: "uppercase",
    fontSize: 16,
  },
  titleText: {
    fontSize: 24,
    lineHeight: 28,
  },
  dateTimeText: {
    fontSize: 14,
  },
  eventHeaderOptions: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  descriptionText: {
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
  eventFooterContainer: {
    height: 100,
    paddingTop: 15,
  },
  buyButtonImage: {
    width: 185,
    height: 46,
    borderRadius: 11,
  },
  buyButton: {
    width: 185,
    height: 46,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButtonText: {
    fontSize: 14,
  },
  map: {
    width: "100%",
    height: 275,
    borderRadius: 11,
    marginTop: 10,
  },
});

export default EventScreen;
