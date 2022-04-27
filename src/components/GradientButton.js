import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({
  boxDimensions,
  boxMargins,
  content,
  fontColor = "#FFFFFF",
  fontSize = 20,
  background = undefined,
}) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert("The Button has been pressed!!")}
      style={boxMargins}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[boxDimensions, styles.gradient]}
        colors={["#0038F5", "#9F03FF"]}
      >
        <View style={[styles.background, { backgroundColor: background }]}>
          <Text
            style={[
              { color: fontColor, fontSize: fontSize },
              styles.buttonText,
            ]}
          >
            {content}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 6,
  },
  buttonText: { fontWeight: "bold" },
  gradient: {
    borderRadius: 8,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "99.9%",
    height: "99.9%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
