import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.SplashScreenMainContainer}>
      <Image
        style={styles.SplashScreenTopPicture}
        source={require("./assets/top picture.png")}
      />
      <Image
        style={styles.SplashScreenHadnivaLogo}
        source={require("./assets/HADNIVA LOGO.png")}
      />
      <View style={styles.SplashScreenWelcomeContainer}>
        <Text style={styles.text1}>WELCOME TO</Text>
        <Text style={styles.text2}>HADNIVA MULTIMEDIA</Text>
        <Text style={styles.text3}>
          Aleading-edge website design agency in Ghana, crafting visually
          stunning and user-friendly websites for businesses of all scopes{" "}
        </Text>
      </View>
      <View style={styles.SplashScreenGettingStarted}>
        <Text style={styles.text4}>LET'S GET STARTED</Text>
      </View>
      <Image
        style={styles.SplashScreenBottomPicture}
        source={require("./assets/Bottom picture.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SplashScreenMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    backgroundColor: "#EEF7F8",
  },
  SplashScreenTopPicture: {
    left: -60,
  },
  SplashScreenHadnivaLogo: {
    width: 210,
    height: 140,
    top: -40,
  },
  SplashScreenWelcomeContainer: {
    width: 280,
    height: 130,
    backgroundColor: "red",
    top: -30,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#EEF7F8",
  },
  text1: {
    fontStyle: "italic",
    fontSize: 13,
    marginBottom: 5,
    letterSpacing: 2,
  },
  text2: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
    letterSpacing: 2,
  },
  text3: {
    textAlign: "center",
    fontSize: 12,
    letterSpacing: 2,
  },
  SplashScreenGettingStarted: {
    backgroundColor: "#04CFFA",
    width: 200,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text4: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
    letterSpacing: 2,
    color: "#EEF7F8",
  },
  SplashScreenBottomPicture: {
    right: -60,
    bottom: 10,
  },
});

export default SplashScreen;
