import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { Text, View, Colors } from "react-native-ui-lib";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import BackButton from "../../components/buttons/backButton";

const TicketScreen = () => {
  return (
    <View style={styles.rootContainer} useSafeArea>
      <BackButton />
      <View margin-10 />
      <ImageBackground
        source={require("../../assets/media/images/purpleGradientBg.png")}
        style={styles.bannerImageCard}
        imageStyle={styles.bannerImage}
      >
        <View padding-7 flex style={styles.ticketSectionContainer}>
          <Image
            source={require("../../assets/media/images/concert-fans.png")}
            style={styles.ticketMainImage}
          />
          <View row spread centerV paddingH-25 paddingT-8>
            <View>
              <Text h4 marginT-8 white>
                Halloween Party
              </Text>
              <Text p lightGray>
                Hosted by FireMaster
              </Text>
            </View>
            <MaterialCommunityIcons
              name="download-circle-outline"
              size={44}
              color={Colors.lightGray}
              style={{ opacity: 0.8 }}
            />
          </View>
        </View>
        <View style={styles.ticketDividerContainer}>
          <View style={styles.leftCircle} />
          <DashedLine
            dashLength={10}
            dashThickness={8}
            dashGap={5}
            dashColor="#A980C2"
            dashStyle={{ borderRadius: 10 }}
          />
          <View style={styles.rightCircle} />
        </View>
        <View flex style={styles.ticketSectionContainer}>
          <View paddingH-25 paddingT-15>
            <Text lightGray p>
              LOCATION
            </Text>
            <Text white h4>
              Manhattan Square, NY
            </Text>
            <View row spread marginT-10>
              <View>
                <Text lightGray p>
                  TIME
                </Text>
                <Text white h4>
                  10:00 PM
                </Text>
              </View>
              <View>
                <Text lightGray p>
                  DATE
                </Text>
                <Text white h4>
                  28 Oct 2022
                </Text>
              </View>
            </View>
            <Text marginT-10 lightGray p>
              INSTRUCTIONS
            </Text>
            <Text white p style={styles.descriptionText}>
              Park inside the Manhattan Parking Garage and come directly to the
              Square
            </Text>
          </View>
        </View>
        <View style={styles.ticketDividerContainer}>
          <View style={styles.leftCircle} />
          <DashedLine
            dashLength={10}
            dashThickness={8}
            dashGap={5}
            dashColor="#A980C2"
            dashStyle={{ borderRadius: 10 }}
          />
          <View style={styles.rightCircle} />
        </View>
        <View
          centerH
          padding-15
          flex
          style={[styles.ticketSectionContainer, styles.ticketBarcodeContainer]}
        >
          <Text marginT-15 h4 lightGray>
            SCAN BARCODE
          </Text>
          <Image
            source={require("../../assets/media/images/barcode.png")}
            style={styles.barcodeImage}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: "#1E1E1E",
    borderWidth: 10,
    borderColor: "#1E1E1E",
  },
  bannerImageCard: {
    flex: 1,
    borderRadius: 26,
  },
  bannerImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 26,
  },
  ticketDividerContainer: {
    position: "relative",
    justifyContent: "center",
  },
  leftCircle: {
    position: "absolute",
    left: -22,
    top: -16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1E1E1E",
    zIndex: 1,
  },
  rightCircle: {
    position: "absolute",
    right: -21,
    top: -16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1E1E1E",
    zIndex: 1,
  },
  ticketMainImage: {
    width: "100%",
    height: "65%",
    resizeMode: "cover",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 20,
  },
  barcodeImage: {
    top: -100,
    width: "100%",
  },
  ticketBarcodeContainer: {
    maxHeight: 200,
  },
});

export default TicketScreen;
