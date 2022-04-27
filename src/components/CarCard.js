import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CarCard = ({
  carImage,
  carBrand,
  carName,
  carYear,
  priceType,
  priceValue,
  priceCurrency,
  description,
  ownerName,
  completeObject = [],
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          carImage,
          carName,
          carValue: priceValue,
          description,
          ownerName,
        })
      }
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: carImage }} />
      <Text style={styles.carName}>{`${carBrand} ${carName} ${carYear}`}</Text>
      <Text style={styles.carValue}>
        {[priceCurrency, priceValue]}
        <Text style={styles.day}>/{priceType}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  container: {
    width: 255,
    height: 360,
    marginEnd: 10,
  },
  image: {
    borderRadius: 28,
    width: "100%",
    height: 300,
  },
  carName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222222",
    marginStart: 10,
    marginTop: 5,
  },
  carValue: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#333333",
    marginStart: 10,
    marginTop: 5,
  },
  day: { fontSize: 12, color: "#666666" },
});
