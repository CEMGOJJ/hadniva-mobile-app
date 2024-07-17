import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LogOut = () => {
  return (
    <View style={styles.LogOutMainContainer}>
      <Text> This is the LogOut screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  LogOutMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
  },
});

export default LogOut;
