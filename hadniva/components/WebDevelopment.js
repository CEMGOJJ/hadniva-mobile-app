import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const WebDevelopment = () => {
  return (
    <View style={styles.WebDevelopmentMainContainer}>
      <View style={styles.WebDevelopmentSubContainer1}>
        <View style={styles.WebDevelopmentSubContainer1A}>
          <Text style={styles.Title}>Web Development</Text>
        </View>
        <View style={styles.WebDevelopmentSubContainer1B}>
          <Text style={styles.Description}>
            For web development, we offer the following services:
          </Text>
        </View>
      </View>
      <View style={styles.WebDevelopmentSubContainer2}>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>
            1. Custom Website Design and Development
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>2. E-commerce Solutions</Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>
            3. Content Management Systems (CMS)
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>4. Responsive Web Design</Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>
            5. Website Maintenance and Support
          </Text>
        </View>
      </View>
      <View style={styles.WebDevelopmentSubContainer3}>
        <TouchableOpacity>
          <View style={styles.Button}>
            <Text style={styles.ButtonText}>BOOK AN APPOINTMENT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  WebDevelopmentMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 40,
    alignSelf: "center",
  },
  WebDevelopmentSubContainer1: {
    width: 350,
    height: 100,
    padding: 2,

    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  WebDevelopmentSubContainer1A: {
    width: 346,
    height: 40,
    padding: 2,

    justifyContent: "center",
  },
  Title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
  },
  Description: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
  },
  WebDevelopmentSubContainer1B: {
    width: 346,
    height: 45,
    padding: 2,

    justifyContent: "center",
  },
  WebDevelopmentSubContainer2: {
    width: 350,
    height: 450,
    padding: 2,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ListOfServices: {
    width: 342,
    height: 70,
    padding: 2,
    borderWidth: 3,
    borderColor: "#83cbdb",
    borderRadius: 10,
    justifyContent: "center",
  },
  WebDevelopmentSubContainer3: {
    width: 350,
    height: 120,
    padding: 2,

    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    width: 200,
    height: 50,
    padding: 2,

    backgroundColor: "#83cbdb",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
});

export default WebDevelopment;
