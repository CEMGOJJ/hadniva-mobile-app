import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatSupport = () => {
  return (
    <View style={styles.ChatSupportMainContainer}>
      <Text> This is the chat support screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ChatSupportMainContainer: {
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

export default ChatSupport;
