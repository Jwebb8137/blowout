import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { View, Text, DateTimePicker } from "react-native-ui-lib";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const calendarIcon = (
  <FontAwesome name="calendar-o" size={24} color="#BCBCBC" />
);
const timeIcon = <FontAwesome5 name="clock" size={24} color="#BCBCBC" />;

const DateTimeInput = ({ label, time }) => {
  return (
    <View marginV-10>
      <Text white p style={styles.label}>
        {label}
      </Text>
      <DateTimePicker
        placeholder="Select date"
        placeholderTextColor="#858585"
        style={styles.input}
        containerStyle={styles.inputContainer}
        mode={time ? "time" : "date"}
        useNativePicker
        timeFormat="HH:mm A"
        minuteInterval={15}
        renderInput={(props) => (
          <View style={styles.inputContainer}>
            <TextInput
              value={props.value}
              placeholder={time ? "Select time" : "Select date"}
              placeholderTextColor="#858585"
              style={styles.input}
            />
            {time ? timeIcon : calendarIcon}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#282828",
    borderRadius: 15,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "center",
    height: 48,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    color: "#FFF",
    fontSize: 17,
    letterSpacing: 1,
  },
  label: {
    marginLeft: 2,
    marginBottom: 8,
  },
});

export default DateTimeInput;
