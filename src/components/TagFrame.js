import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const TagFrame = ({ boxOptions, text }) => {
  return (
    <TouchableOpacity style={[boxOptions, styles.mainContainer]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TagFrame;

const styles = StyleSheet.create({
  mainContainer: {
    height: 28,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginHorizontal: 1,
  },
  text: {
    fontSize: 13,
    marginBottom: 3,
    marginHorizontal: 7,
  },
});
