import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Account = () => {
  return (
    <View style={styles.AccountMainContainer}>
      <Text> This is the account screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AccountMainContainer: {
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

export default Account;
