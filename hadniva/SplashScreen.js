import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

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
      <TouchableOpacity>
        <View style={styles.SplashScreenGettingStarted}>
          <Text style={styles.text4}>LET'S GET STARTED</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.SplashSCreenBottomContainer}>
        <Text style={styles.TT}>Hello</Text>
        <Image
          style={styles.SplashScreenIlustrator}
          source={require("./assets/Ilustrator 1.png")}
        />

        <Image
          style={styles.SplashScreenBottomPicture}
          source={require("./assets/Bottom picture.png")}
        />
      </View>
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
    justifyContent: "flex-start",
    left: -106,
    position: "fixed",
  },
  SplashScreenHadnivaLogo: {
    width: 210,
    height: 140,
    top: -100,
  },
  SplashScreenWelcomeContainer: {
    width: 280,
    height: 130,
    top: -100,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#EEF7F8",
  },
  text1: {
    fontStyle: "italic",
    fontSize: 12,
    marginBottom: 5,
    letterSpacing: 2,
  },
  text2: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    letterSpacing: 2,
  },
  text3: {
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 1,
  },
  SplashScreenGettingStarted: {
    backgroundColor: "#04CFFA",
    width: 200,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -60,
  },
  text4: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
    letterSpacing: 2,
    color: "#EEF7F8",
  },
  SplashScreenIlustrator: {
    justifyContent: "flex-start",
    right: -8,
  },
  SplashScreenBottomPicture: {
    justifyContent: "flex-end",
    right: 50,
  },
  SplashSCreenBottomContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#EEF7F8",
    top: -5,
  },
  TT: {
    fontSize: 16,
    right: -90,
    top: 20,
    zIndex: 1,
  },
});

export default SplashScreen;
