import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CarCard from "./CarCard";

const Carousel = ({ title, data, fullData = [] }) => {
  const finalData = fullData != [] ? fullData : data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, styles.marginLeft]}>
          {finalData.title ?? title}
        </Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="arrow-right" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.marginLeft}
        data={finalData.items}
        renderItem={({ item }) => (
          <CarCard
            carImage={item.image}
            carBrand={item.car.brand}
            carName={item.car.model}
            carYear={item.car.yearFab}
            priceType={item.pricing.type}
            priceValue={item.pricing.price}
            priceCurrency={item.pricing.currency}
            completeObject={item}
          />
        )}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 410,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#222222",
    marginBottom: 13,
  },
  marginLeft: { marginStart: 15 },
  header: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },
  iconContainer: {
    width: 100,
    marginEnd: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
