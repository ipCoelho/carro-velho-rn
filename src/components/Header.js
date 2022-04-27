import React from "react";
import { Image, StyleSheet, View, Text, StatusBar } from "react-native";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={styles.container.backgroundColor}
        barStyle={"dark-content"}
      />
      <Image source={logo} />
      <Text style={styles.title}>
        SEU CARRO <Text style={styles.bold}>FORA</Text> DA CARRETINHA
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2E68DA",
  },
  title: {
    fontFamily: "Epilogue400",
    color: "white",
  },
  bold: { fontFamily: "Epilogue700" },
});
