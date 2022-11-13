import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import FormDropdownInput from "../../../components/inputs/formDropdownInput";
import FormTextInput from "../../../components/inputs/formTextInput";
import { eventTypeData } from "../../../extra/formInputData";

const CreateEventForm = () => {
  return (
    <View bg-black flex>
      <FormTextInput label="Event Name" placeholder="Enter event name" />
      <FormTextInput
        label="Description"
        placeholder="Enter event description"
      />
      <FormDropdownInput
        label="Event Type"
        placeholder="Select event type"
        options={eventTypeData}
      />
      <FormTextInput label="Admission Price" placeholder="$0.00" number />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEventForm;
