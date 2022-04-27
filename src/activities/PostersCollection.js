import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../components/Header";
import PosterDetails from "../components/PosterDetails";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <PosterDetails
        imageUri={
          "https://thumbs.dreamstime.com/b/american-blue-chevrolet-classic-car-silver-roof-parked-beach-varadero-cuba-serie-cuba-reportage-american-blue-110053477.jpg"
        }
        carName={"Dock"}
        dailyValue={"1000,00"}
        userName={"Mathew"}
        location={"California/US"}
        compStyle={{ backgroundColor: "lightblue" }}
      />
    </SafeAreaView>
  );
};

export default Home;
