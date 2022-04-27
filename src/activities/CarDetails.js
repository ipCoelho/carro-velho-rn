import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import GradientButton from "../components/GradientButton";
import TagFrame from "../components/TagFrame";
import IconsTool from "../components/IconsTool";
import CalendarInput from "../components/CalendarInput";

const CarDetails = (props) => {
  let { carImage, carName, carValue, description, ownerName } =
    props.route.params;
  let fontSize;
  carName = carName.toString();
  carName.length >= 15 ? (fontSize = 16) : (fontSize = 24);

  return (
    <ScrollView>
      <Header />
      <SearchBar
        marginHorizontal={30}
        marginVertical={15}
        placeholder={"Buscar por carros"}
      />
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: carImage }} />
        <View style={styles.infoStyle}>
          <Text style={[{ fontSize: fontSize }, styles.carName]}>
            {carName}
          </Text>
          <IconsTool />
        </View>
        <View style={styles.infoText}>
          <Text style={styles.userName}>{ownerName}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.tags}>
          <TagFrame text={"#color"} />
          <TagFrame text={"#circle"} />
          <TagFrame text={"#black"} />
          <TagFrame text={"#art"} />
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.reservationText}>
            Valor da Reserva
            <Text style={styles.bolder}>
              {"\n"}R$ {carValue}
            </Text>
            /dia
          </Text>
          <Text style={styles.dateText}>
            Selecione as datas de retirada e de devolução
          </Text>
          <CalendarInput />
          <GradientButton
            boxMargins={{ marginLeft: 10, marginTop: 25 }}
            boxDimensions={{ height: 40, width: 300 }}
            content={"Solicitar agendamento"}
            fontColor={"#ffffff"}
            fontSize={16}
          />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    minHeight: 1250,
    borderRadius: 24,
    backgroundColor: "#F8F8F8",
  },
  image: {
    width: 345,
    height: 430,
    borderRadius: 24,
  },
  infoStyle: {
    width: 320,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carName: {
    fontWeight: "bold",
    color: "#222222",
  },
  infoText: {
    maxHeight: 205,
    minHeight: 100,
    width: 320,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333333",
  },
  description: {
    marginTop: 20,
    fontSize: 13,
    color: "#555555",
  },
  tags: {
    width: 320,
    height: 30,
    flexDirection: "row",
    marginTop: 5,
  },
  paymentContainer: {
    height: 340,
    width: 345,
    backgroundColor: "#fcfcfc",
    elevation: 2,
    borderRadius: 24,
    padding: 15,
    marginBottom: 20,
  },
  reservationText: {
    fontSize: 20,
    color: "#333333",
  },
  bolder: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 16,
    marginTop: 20,
    color: "#555555",
  },
});
