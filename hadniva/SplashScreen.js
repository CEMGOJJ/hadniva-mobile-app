import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const SplashScreen = () => {
  return (
    <View style={styles.SplashScreenMainContainer}>
      <View style={styles.miniContainer1}>
        <Image
          style={styles.SplashScreenTopPicture}
          source={require("./assets/top picture.png")}
        />
      </View>
      <View style={styles.miniContainer2}>
        <Image
          style={styles.SplashScreenHadnivaLogo}
          source={require("./assets/HADNIVA LOGO.png")}
        />
      </View>
      <View style={styles.miniContainer3}>
        <Text style={styles.Text1}>WELCOME TO </Text>
        <Text style={styles.Text2}>HADNIVA MULTIMEDIA</Text>
        <Text style={styles.Text3}>
          A leading-edge website design agency in Ghana, crafting visually
          stuuning and user-friendly website for business of all scopes.
        </Text>
      </View>
      <View style={styles.miniContainer4}>
        <TouchableOpacity>
          <View style={styles.Button}>
            <Text style={styles.Text4}>LET'S GET STARTED</Text>
            <FontAwesome6
              style={styles.arrow}
              name="arrow-right-long"
              size={19}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.miniContainer5}>
        <View style={styles.divisor1}>
          <Text style={styles.Text5}>Hello</Text>
          <Image
            style={styles.SplashScreenIlustrator}
            source={require("./assets/Ilustrator 1.png")}
          />
        </View>
        <View style={styles.divisor2}>
          <Image
            style={styles.SplashScreenBottomPicture}
            source={require("./assets/Bottom picture.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SplashScreenMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#EEF7F8",
  },
  miniContainer1: {
    width: "100%",
    height: 180,

    display: "flex",
    alignItems: "left",
  },
  SplashScreenTopPicture: {
    height: 175,
    width: 215,
  },
  miniContainer2: {
    width: "100%",
    height: 100,

    alignItems: "center",
    justifyContent: "center",
  },
  Text1: {
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center",
    opacity: 0.5,
  },
  Text2: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 1,
  },
  Text3: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
    opacity: 0.5,
  },
  SplashScreenHadnivaLogo: {
    width: 120,
    height: "100%",
  },
  miniContainer3: {
    width: "100%",
    height: 150,
    borderColor: "black",
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center",
  },
  miniContainer4: {
    width: "100%",
    height: 40,

    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    height: 37,
    width: 200,

    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#04cffa",
    borderRadius: 10,
    flexDirection: "row",
  },
  arrow: {
    opacity: 0.8,
  },
  Text4: {
    fontSize: 15,
    fontWeight: "900",
    color: "white",
    opacity: 0.8,
  },
  miniContainer5: {
    width: "100%",
    height: 190,

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  divisor1: {
    width: "49.5%",
    height: "100%",
  },
  divisor2: {
    width: "49.5%",
    height: "100%",

    alignItems: "right",
  },
  SplashScreenIlustrator: {
    width: "100%",
    height: "100%",
    top: -20,
  },
  SplashScreenBottomPicture: {
    width: "100%",
    height: "100%",
  },
  Text5: {
    zIndex: 1,
    fontSize: 15,
    color: "black",
    textAlign: "center",
    opacity: 0.6,
    fontWeight: "600",
    left: -20,
  },
});

export default SplashScreen;
