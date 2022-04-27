import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.masterContainer}>
        <View style={[styles.linksContainer, { backgroundColor: undefined }]}>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Discord</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Blog</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.linksContainer, { backgroundColor: undefined }]}>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Community Guidelines</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Careers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.links}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>© 2022 CarroVelho.com</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: 312,
    display: "flex",
  },
  masterContainer: {
    backgroundColor: "#222222",
    width: "100%",
    height: 240,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  linksContainer: {
    maxWidth: "50%",
    minWidth: 50,
    height: 200,
    display: "flex",
    justifyContent: "flex-start",
  },
  linkBox: {
    marginBottom: 10,
  },
  links: { color: "#F8F8F8", fontSize: 16 },
  copyrightContainer: {
    width: "100%",
    height: 72,
    borderTopColor: "#FFFFFF",
    borderWidth: 1,
    backgroundColor: "#222222",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingStart: 15,
  },
  copyrightText: {
    fontSize: 13,
    color: "#F0F0F0",
  },
});
