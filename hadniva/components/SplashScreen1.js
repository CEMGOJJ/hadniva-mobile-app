import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const SplashScreen1 = () => {
  return (
    <View style={styles.SplashScreen1MainContainer}>
      <Image source={require("../assets/splashcreen1-logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  SplashScreen1MainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 40,
  },
});

export default SplashScreen1;
