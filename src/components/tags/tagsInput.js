import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-ui-lib";

const TagsInput = ({ tags, label }) => {
  return (
    <View marginB-5 marginT-12 paddingR-10>
      <View row spread>
        <Text white p style={styles.label}>
          {label}
        </Text>
        <TouchableOpacity>
          <Text p style={styles.editButtonText}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <View row marginT-10 style={styles.tagsContainer}>
        {tags.map((tag) => (
          <TouchableOpacity key={tag} style={styles.tag}>
            <Text white p style={styles.tagText}>
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "#282828",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 38,
    justifyContent: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: "#BCBCBC",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    letterSpacing: 1,
  },
  editButtonText: {
    color: "#DD88E7",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    letterSpacing: 1,
  },
  tagsContainer: {
    flexWrap: "wrap",
  },
});

export default TagsInput;
