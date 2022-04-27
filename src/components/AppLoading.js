import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const AppLoading = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="60" color={"lightblue"} />
    </View>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
