import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import GradientButton from "./GradientButton";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const PosterDetails = ({
  compStyle,
  imageUri,
  carName,
  location,
  userName,
  dailyValue,
}) => {
  carName = carName.toString().toUpperCase();

  return (
    <ScrollView>
      <View style={[styles.mainContainer, compStyle]}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: imageUri }} />
          <Text style={[styles.paddingTwelve, styles.carName]}>{carName}</Text>
          <Icon name="location-pin" style={{ height: 0, width: 20 }} />
          <Text style={[styles.paddingTwelve, styles.location]}>
            {location}
          </Text>
          <Text style={[styles.paddingTwelve, styles.userName]}>
            {userName}
          </Text>
        </View>
        <View>
          <Text>Valor da diária</Text>
          <Text>R$ {dailyValue}</Text>
        </View>
        <GradientButton />
      </View>
    </ScrollView>
  );
};

export default PosterDetails;

const styles = StyleSheet.create({
  mainContainer: {
    width: 345,
    height: 850,
  },
  container: {
    width: 345,
    height: 525,
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "lightgrey",
  },
  image: {
    width: 320,
    height: 400,
    margin: 12,
    borderRadius: 24,
  },
  carName: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "#222222",
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  userName: {
    fontSize: 14,
    color: "#555555",
  },
  paddingTwelve: {
    paddingStart: 12,
  },
  stringIcon: {
    width: 10,
    height: 10,
  },
});
