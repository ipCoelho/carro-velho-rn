import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import Gallery from "./Gallery";

let userDate = [
  {
    ownerName: "Israel Coelho",
    carName: "Volkswagen Fusca 1972",
    carImage:
      "https://motortudo.com/wp-content/uploads/2021/09/Fusca-1972-Fusca-antigo-30.jpg",
    carValue: "690,00",
    description:
      'The Volkswagen Beetle—officially the Volkswagen Type 1, informally in German der Käfer (meaning "beetle"), in parts of the English-speaking world the Bug,[7] and known by many other nicknames in other languages—is a two-door, rear-engine economy car, intended for five occupants (later, Beetles were restricted to four people in some countries).',
  },
  {
    ownerName: "Rafael Trestini",
    carName: "Volkswagen Kombi 1986",
    carImage:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Volkswagen_221031_dutch_licence_registration_13-YA-60_pic3.JPG",
    carValue: "825,00",
    description:
      "he Volkswagen Type 2, known officially (depending on body type) as the Transporter, Kombi or Microbus, or, informally, as the Bus (US), Camper (UK) or Bulli (Germany), is a forward control light commercial vehicle introduced in 1950 by the German automaker Volkswagen as its second car model.",
  },
  {
    ownerName: "Elias Oliveira",
    carName: "Volkswagen Parati GLS 1995",
    carImage:
      "https://motortudo.com/wp-content/uploads/2019/05/Volkswagen-Parati-quadrada-GLS-1.8S-1995-Motor-Tudo-0.jpg",
    carValue: "350,00",
    description:
      "The Gol has been produced in several versions, such as three- and five-door hatchbacks, four-door sedans (the Volkswagen Voyage), three- and five-door station wagons (the Volkswagen Parati), and two-door coupé utilities (the Volkswagen Saveiro).",
  },
];

const Feed = ({ data }) => {
  const carsData = data;
  const carouselsData = carsData[0] || [];
  const galleryOneData = carsData[1] || [];
  const galleryTwoData = carsData[2] || [];

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.main}>
        <SearchBar
          marginHorizontal={30}
          marginVertical={15}
          placeholder={"Buscar por carros"}
        />
        <Carousel
          title={carouselsData.title}
          data={userDate}
          fullData={carouselsData}
        />
        <Gallery
          containerStyle={styles.galleryOne}
          data={galleryOneData}
          title={galleryOneData.title}
          smallInfo={galleryOneData.description}
          buttonText={"Ver todos"}
        />
        <Gallery
          containerStyle={styles.galleryTwo}
          data={galleryTwoData}
          title={galleryTwoData.title}
          smallInfo={galleryTwoData.description}
          buttonText={"Ver todos"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  main: { width: "100%" },
  galleryOne: {
    marginStart: 30,
    height: 560,
  },
  galleryTwo: {
    marginStart: 30,
    height: 660,
  },
});
