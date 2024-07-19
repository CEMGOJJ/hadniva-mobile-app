import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";
import CustomButton from "../components/CustomButton";

function LogOut({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleLogout = () => {
    // Implement your logout logic here
    // Then navigate to login screen or home screen
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.confirmationText, { color: theme.text }]}>
        Are you sure you want to log out?
      </Text>
      <Text style={[styles.farewellText, { color: theme.text }]}>
        We'll keep things running smoothly until you return. See you soon!
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Cancel"
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}
        />
        <CustomButton
          title="Log Out"
          onPress={handleLogout}
          style={styles.logoutButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  farewellText: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cancelButton: {
    // Style for cancel button
  },
  logoutButton: {},
});

export default LogOut;
