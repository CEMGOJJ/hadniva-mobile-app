import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const SplashScreen2 = () => {
  return (
    <View style={styles.SplashScreen2MainContainer}>
      <View style={styles.SplashScreenSubContainer1}>
        <Image source={require("../assets/splashcreen1-logo.png")} />
      </View>
      <View style={styles.SplashScreenSubContainer2}>
        <View style={styles.SplashScreenSubContainer2A}>
          <Text style={styles.Text1}>WELCOME TO</Text>
        </View>
        <View style={styles.SplashScreenSubContainer2B}>
          <Text style={styles.Text2}>HADNIVA MULTIMEDIA</Text>
        </View>
        <View style={styles.SplashScreenSubContainer2C}>
          <Text style={styles.Text3}>
            We are a cutting-edge agency in Ghana, offering a range of services
            including the creation of stunning and user-friendly websites for
            businesses of all sizes, social media marketting, and remote desktop
            solutions.
          </Text>
        </View>
      </View>
      <View style={styles.SplashScreenSubContainer3}>
        <View style={styles.SplashScreenSubContainer3A}>
          <Feather name="chevrons-right" size={34} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SplashScreen2MainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 40,
  },
  SplashScreenSubContainer1: {
    width: 350,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  SplashScreenSubContainer2: {
    width: 350,
    height: 310,
    padding: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  SplashScreenSubContainer2A: {
    width: 346,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  SplashScreenSubContainer2B: {
    width: 346,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  SplashScreenSubContainer2C: {
    borderWidth: 1,
    borderColor: "white",
    width: 346,
    height: 190,
    alignItems: "center",
    justifyContent: "center",
  },
  Text1: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.5,
  },
  Text2: {
    fontSize: 16,
    fontWeight: "900",
    opacity: 0.5,
    color: "#3EAEC7",
  },
  Text3: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.5,
    textAlign: "center",
    lineHeight: 30,
  },
  SplashScreenSubContainer3: {
    width: 350,
    height: 210,
    alignItems: "center",
    justifyContent: "center",
  },
  SplashScreenSubContainer3A: {
    borderWidth: 1,
    borderColor: "black",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#ADE7EE",
  },
});

export default SplashScreen2;
