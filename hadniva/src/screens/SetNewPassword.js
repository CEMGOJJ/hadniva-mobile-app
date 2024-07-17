import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const SetNewPassword = () => {
  return (
    <View style={styles.SetNewPasswordMainContainer}>
      <View style={styles.SetNewPasswordSubContainer1}>
        <View style={styles.SetNewPasswordSubContainer1A}></View>
        <View style={styles.SetNewPasswordSubContainer1B}>
          <View style={styles.TextBox1}>
            <Text style={styles.Text1}>Set Up New Password</Text>
          </View>
          <View style={styles.TextBox2}>
            <Text style={styles.Text2}>
              Your new password must be different from previous used passwords
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.SetNewPasswordSubContainer2}>
        <View style={styles.SetNewPasswordSubContainer2A}>
          <TextInput
            style={styles.TextInput}
            placeholder="New Password"
          ></TextInput>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.SetNewPasswordSubContainer2B}>
          <TouchableOpacity>
            <View style={styles.SetNewPasswordButton}>
              <Text style={styles.ButtonText}>Reset Password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SetNewPasswordSubContainer3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  SetNewPasswordMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 40,
    alignSelf: "center",
  },

  SetNewPasswordSubContainer1: {
    width: 350,
    height: 140,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  SetNewPasswordSubContainer1A: {
    width: 346,
    height: 30,
  },
  SetNewPasswordSubContainer1B: {
    width: 346,
    height: 100,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  TextBox1: {
    width: 342,
    height: 30,
  },
  TextBox2: {
    width: 342,
    height: 50,
  },
  Text1: {
    fontSize: 24,
    fontWeight: "700",
  },
  Text2: {
    fontSize: 16,
    opacity: 0.5,
    fontWeight: "normal",
  },
  SetNewPasswordSubContainer2: {
    width: 350,
    height: 280,

    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 2,
  },
  SetNewPasswordSubContainer2A: {
    width: 346,
    height: 130,

    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  TextInput: {
    borderWidth: 0.5,
    borderColor: "grey",
    height: 50,
    width: 340,
    paddingLeft: 20,
    fontSize: 18,
    borderRadius: 5,
  },
  SetNewPasswordSubContainer2B: {
    width: 346,
    height: 70,

    alignItems: "center",
    justifyContent: "center",
  },
  SetNewPasswordButton: {
    borderWidth: 0.5,
    borderColor: "grey",
    height: 50,
    width: 340,
    backgroundColor: "#ADE7EE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  ButtonText: {
    fontSize: 20,
    fontWeight: "700",
    opacity: 0.8,
  },
  SetNewPasswordSubContainer2C: {
    width: 346,
    height: 40,

    alignItems: "center",
    justifyContent: "center",
  },
  ForgottenText: {
    fontSize: 15,
    opacity: 0.3,
  },
  SetNewPasswordSubContainer3: {
    width: 350,
    height: 280,

    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 2,
  },
});

export default SetNewPassword;
