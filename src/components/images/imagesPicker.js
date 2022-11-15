import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

const ImagesPicker = ({ media }) => {
  return (
    <View marginV-10>
      <View row>
        {media.map((image) => (
          <TouchableOpacity key={image} style={styles.imageContainer}>
            <TouchableOpacity style={styles.deleteButton}>
              <Ionicons
                name="close"
                size={16}
                color="black"
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <ImageBackground
              source={{ uri: image }}
              style={styles.imageWrapper}
              imageStyle={styles.image}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addImageContainer}>
          <Ionicons name="add" size={28} color="black" style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 115,
    height: 115,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  addImageContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    marginLeft: 15,
    marginBottom: 10,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  deleteButton: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#F8F8F8",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  addIcon: {
    left: 1.5,
    top: 0.5,
  },
  closeIcon: {
    left: 0.5,
  },
});

export default ImagesPicker;
