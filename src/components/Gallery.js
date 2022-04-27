import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import GradientButton from "./GradientButton";

const staticData = [
  {
    image:
      "https://blog.rhinoautoparts.com.br/wp-content/uploads/2020/09/carros-antigos.png",
  },
  {
    image: "https://www.picellileiloes.com.br/leiloes/logos/6079e91f35cd3.jpg",
  },
  { image: "https://mundofixa.com/wp-content/uploads/2019/01/141244833.jpg" },
  {
    image:
      "https://www.clickguarulhos.com.br/wp-content/uploads/2019/12/20191205-encontro-de-carros-antigos-e1528732103621.jpg",
  },
];

const Gallery = ({
  containerStyle,
  title,
  smallInfo,
  buttonText,
  data = [],
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{data.title ?? title}</Text>
      <View>
        <FlatList
          data={data.items ? data.items : staticData}
          numColumns={2}
          renderItem={({ item }) => (
            <View>
              <Image style={styles.img} source={{ uri: item.image }} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.listInfo}>{data.description ?? smallInfo}</Text>
        <Text style={styles.itemQtt}>{data.totalItems} items</Text>
      </View>
      <GradientButton
        boxDimensions={{ width: 343, height: 56 }}
        background={"white"}
        fontColor={"#222222"}
        content={buttonText}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 50,
    marginStart: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222222",
  },
  img: {
    width: 165,
    height: 200,
    backgroundColor: "black",
    borderRadius: 16,
    margin: 5,
  },
  bottomContainer: {
    width: 350,
    height: 30,
    marginTop: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listInfo: {
    color: "#222222",
    fontSize: 18,
    fontWeight: "bold",
    height: 25,
  },
  itemQtt: {
    height: 25,
    width: 80,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    textAlign: "center",
    borderRadius: 34,
    color: "#222222",
    fontWeight: "bold",
    fontSize: 16,
  },
});
