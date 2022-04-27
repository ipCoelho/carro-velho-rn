import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const Home = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://services.opbkdev.smartfylabs.com/carrovelho-api/home/")
      .then(({ data }) => setCarsData(data));
  });

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <Header />
        <Feed data={carsData} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
