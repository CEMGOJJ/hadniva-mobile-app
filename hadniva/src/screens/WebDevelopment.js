import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";

const WebDevelopment = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={[
        styles.WebDevelopmentMainContainer,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.WebDevelopmentSubContainer1}>
        <View style={styles.WebDevelopmentSubContainer1A}>
          <Text style={[styles.Title, { color: theme.text }]}>
            Web Development
          </Text>
        </View>
        <View style={styles.WebDevelopmentSubContainer1B}>
          <Text style={[styles.Description, { color: theme.text }]}>
            For web development, we offer the following services:
          </Text>
        </View>
      </View>
      <View style={styles.WebDevelopmentSubContainer2}>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            1. Custom Website Design and Development
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            2. E-commerce Solutions
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            3. Content Management Systems (CMS)
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            4. Responsive Web Design
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            5. Website Maintenance and Support
          </Text>
        </View>
      </View>
      <View style={styles.WebDevelopmentSubContainer3}>
        <TouchableOpacity>
          <View style={styles.Button}>
            <Text style={[styles.ButtonText, { color: theme.text }]}>
              BOOK AN APPOINTMENT
            </Text>
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
    fontWeight: "400",
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
  WebDevelopmentSubContainer3: {
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
    fontWeight: "600",
    color: "white",
  },
});

export default WebDevelopment;
