import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const CustomTextInput = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  const placeholderLines = placeholder.split("\n");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={true}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setText}
        value={text}
      />
      {!isFocused && text === "" && (
        <View style={styles.placeholderContainer}>
          {placeholderLines.map((line, index) => (
            <Text key={index} style={styles.placeholderText}>
              {line}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  input: {
    height: 300,
    width: 336,
    fontSize: 17,
    borderColor: "#83CBDB",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    textAlignVertical: "top",
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-evenly",
    padding: 10,
  },
  placeholderText: {
    color: "gray",
    fontSize: 16,
    textAlign: "left",
  },
});

export default CustomTextInput;
