import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import Icon from "../img/Icon.png";

const SearchBar = ({ marginHorizontal, marginVertical, placeholder }) => {
  return (
    <View
      style={{
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal,
      }}
    >
      <View style={styles.container}>
        <Image source={Icon} style={styles.icon} />
        <TextInput placeholder={placeholder} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { width: 20, height: 20, margin: 10 },
});
