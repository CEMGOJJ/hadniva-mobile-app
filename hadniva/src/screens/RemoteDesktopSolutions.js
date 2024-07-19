import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const RemoteDesktopSolutions = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const navigation = useNavigation();

  const handleBookings = () => {
    navigation.navigate("Appointment");
  };
  return (
    <View
      style={[
        styles.RemoteDesktopSolutionsMainContainer,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.RemoteDesktopSolutionsSubContainer1}>
        <View style={styles.RemoteDesktopSolutionsSubContainer1A}>
          <Text style={[styles.Title, { color: theme.text }]}>
            Remote Desktop Solutions
          </Text>
        </View>
        <View style={styles.RemoteDesktopSolutionsSubContainer1B}>
          <Text style={[styles.Description, { color: theme.text }]}>
            For remote desktop solutions, we offer the following services:
          </Text>
        </View>
      </View>
      <View style={styles.RemoteDesktopSolutionsSubContainer2}>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            1. Remote IT Support
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            2. Cloud Computing Services
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            3. Virtual Machine Services
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            4. Data Security and Backup Solutions
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            5. Remote Acess Solutions
          </Text>
        </View>
      </View>
      <View style={styles.RemoteDesktopSolutionsSubContainer3}>
        <TouchableOpacity>
          <View style={styles.Button}>
            <CustomButton title="Book appointment" onPress={handleBookings} />
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
    fontWeight: "400",
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
});

export default RemoteDesktopSolutions;
