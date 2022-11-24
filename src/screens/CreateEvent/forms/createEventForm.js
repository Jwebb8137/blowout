import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import ImagesPicker from "../../../components/images/imagesPicker";
import DateTimeInput from "../../../components/inputs/dateTimeInput";
import FormDropdownInput from "../../../components/inputs/formDropdownInput";
import FormTextInput from "../../../components/inputs/formTextInput";
import TagsInput from "../../../components/tags/tagsInput";
import { eventTypeData } from "../../../extra/formInputData";
import { imagesData } from "../../../extra/extraData";

const CreateEventForm = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View marginT-15>
        <ImagesPicker media={imagesData} />
      </View>
      <View bg-black flex>
        <FormTextInput label="Event Name" placeholder="Enter event name" />
        <TagsInput
          tags={["NF", "Tech N9ne", "Eminem", "Snoop Dogg"]}
          label="Performers"
        />
        <FormTextInput
          label="Description"
          placeholder="Enter event description"
        />
        <FormDropdownInput
          label="Event Type"
          placeholder="Select event type"
          options={eventTypeData}
        />
        <FormDropdownInput
          label="Location"
          placeholder="Select location"
          options={eventTypeData}
        />
        <DateTimeInput label="Event Date" />
        <DateTimeInput label="Event Time" time />
        <FormTextInput
          label="Directions"
          placeholder="Enter directions to your event..."
        />
        <FormTextInput label="Admission Price" placeholder="$0.00" number />
        <TagsInput
          tags={["Party", "Costume", "College", "Live Music"]}
          label="Tags"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 25,
  },
});

export default CreateEventForm;
