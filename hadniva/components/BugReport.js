import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BugReport = () => {
  return (
    <View style={styles.BugReportMainContainer}>
      <Text> This is the Bug Report screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BugReportMainContainer: {
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

export default BugReport;
