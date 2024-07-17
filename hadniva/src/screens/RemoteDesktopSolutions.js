import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const RemoteDesktopSolutions = (route, navigation) => {
  return (
    <View style={styles.RemoteDesktopSolutionsMainContainer}>
      <View style={styles.RemoteDesktopSolutionsSubContainer1}>
        <View style={styles.RemoteDesktopSolutionsSubContainer1A}>
          <Text style={styles.Title}>Remote Desktop Solutions</Text>
        </View>
        <View style={styles.RemoteDesktopSolutionsSubContainer1B}>
          <Text style={styles.Description}>
            For remote desktop solutions, we offer the following services:
          </Text>
        </View>
      </View>
      <View style={styles.RemoteDesktopSolutionsSubContainer2}>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>1. Remote IT Support</Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>2. Cloud Computing Services</Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>3. Virtual Machine Services</Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>
            4. Data Security and Backup Solutions
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={styles.Description}>5. Remote Acess Solutions</Text>
        </View>
      </View>
      <View style={styles.RemoteDesktopSolutionsSubContainer3}>
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
  RemoteDesktopSolutionsMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",

    alignSelf: "center",
  },
  RemoteDesktopSolutionsSubContainer1: {
    width: 350,
    height: 100,
    padding: 2,

    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  RemoteDesktopSolutionsSubContainer1A: {
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
  RemoteDesktopSolutionsSubContainer1B: {
    width: 346,
    height: 45,
    padding: 2,

    justifyContent: "center",
  },
  RemoteDesktopSolutionsSubContainer2: {
    width: 350,
    height: 380,
    padding: 2,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ListOfServices: {
    width: 342,
    height: 50,
    padding: 2,

    borderRadius: 10,
    justifyContent: "center",
  },
  RemoteDesktopSolutionsSubContainer3: {
    width: 350,
    height: 100,
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

export default RemoteDesktopSolutions;
