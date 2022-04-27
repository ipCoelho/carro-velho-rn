import { StyleSheet, Alert, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import IconUpload from "react-native-vector-icons/Feather";
import TouchableIcon from "./TouchableIcon";

const bookmarkOutline = (
  <Icon name="bookmark-outline" color={"#14142B"} size={25} />
);
const bookmark = <Icon name="bookmark" color={"#14142B"} size={25} />;
const heartOutline = <Icon name="heart-outline" color={"#14142B"} size={25} />;
const heart = <Icon name="heart" color={"#14142B"} size={25} />;

const IconsTool = () => {
  return (
    <View style={styles.icons}>
      <TouchableIcon
        iconUnchecked={bookmarkOutline}
        iconChecked={bookmark}
        style={styles.iconContainer}
        onPress={() => Alert.alert("Bookmark Icon pressed!")}
      />
      <TouchableIcon
        iconUnchecked={heartOutline}
        iconChecked={heart}
        style={styles.iconContainer}
        onPress={() => Alert.alert("Heart Icon pressed!")}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => Alert.alert("Upload Icon pressed!")}
      >
        <IconUpload name="upload" size={25} color={"#14142B"} />
      </TouchableOpacity>
    </View>
  );
};

export default IconsTool;

const styles = StyleSheet.create({
  icons: {
    width: 150,
    height: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
