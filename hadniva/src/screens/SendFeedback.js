import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SendFeedback = () => {
  return (
    <View style={styles.SendFeedbackMainContainer}>
      <Text> This is the SendFeedback screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SendFeedbackMainContainer: {
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

export default SendFeedback;
