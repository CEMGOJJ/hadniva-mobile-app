
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.SplashScreen1MainContainer}>
      <Image source={require("../asset/splashcreen1-logo.png")} />
      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => navigation.navigate('SplashScreen2')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
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
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ADE7EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen1;