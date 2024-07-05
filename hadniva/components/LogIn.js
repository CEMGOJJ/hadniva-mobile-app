import React from "react";
import { View, StyleSheet, Text } from "react-native";

const LogIn = () => {
  return (
    <View style={styles.LogInMainContainer}>
      <View style={styles.LoginSubContainer1}>
        <View style={styles.LoginSubContainer1A}></View>
        <View style={styles.LoginSubContainer1B}>
          <View style={styles.TextBox1}>
            <Text style={styles.Text1}>Welcome back,</Text>
          </View>
          <View style={styles.TextBox2}>
            <Text style={styles.Text2}>
              We are happy to see you here again.
            </Text>
            <Text style={styles.Text2}>Enter your email and password</Text>
          </View>
        </View>
      </View>
      <View style={styles.LoginSubContainer2}></View>
      <View style={styles.LoginSubContainer3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  LogInMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 40,
  },

  LoginSubContainer1: {
    width: 350,
    height: 140,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  LoginSubContainer1A: {
    width: 346,
    height: 30,
    borderWidth: 1,
  },
  LoginSubContainer1B: {
    width: 346,
    height: 90,
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  TextBox1: {
    width: 342,
    height: 30,
    borderWidth: 1,
  },
  TextBox2: {
    width: 342,
    height: 50,
    borderWidth: 1,
  },
  Text1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  Text2: {
    fontSize: 24,
    fontWeight: "bold",
  },
  LoginSubContainer2: {
    width: 350,
    height: 280,
    borderWidth: 1,
    borderColor: "black",
  },
  LoginSubContainer3: {
    width: 350,
    height: 280,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default LogIn;
