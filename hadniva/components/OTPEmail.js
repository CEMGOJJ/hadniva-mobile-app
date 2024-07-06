import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const OTPEmail = () => {
  return (
    <View style={styles.OTPEmailMainContainer}>
      <View style={styles.OTPEmailSubContainer1}>
        <View style={styles.OTPEmailSubContainer1A}></View>
        <View style={styles.OTPEmailSubContainer1B}>
          <View style={styles.TextBox1}>
            <Text style={styles.Text1}>OTP Verification</Text>
          </View>
          <View style={styles.TextBox2}>
            <Text style={styles.Text2}>
              We'll send a one time password to this email.
            </Text>
            <Text style={styles.Text2}>Enter your email.</Text>
          </View>
        </View>
      </View>
      <View style={styles.OTPEmailSubContainer2}>
        <TextInput style={styles.TextInput} keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.OTPEmailSubContainer3}>
        <View style={styles.OTPEmailSubContainer3A}>
          <Text style={styles.Recommend}>Use your number instead?</Text>
        </View>
        <View style={styles.OTPEmailSubContainer3B}>
          <TouchableOpacity>
            <View style={styles.GetOPTButton}>
              <Text style={styles.ButtonText}>GET OTP</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.OTPEmailSubContainer3C}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OTPEmailMainContainer: {
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
  OTPEmailSubContainer1: {
    width: 350,
    height: 140,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  OTPEmailSubContainer1A: {
    width: 346,
    height: 30,
  },
  OTPEmailSubContainer1B: {
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
  OTPEmailSubContainer2: {
    width: 350,
    height: 240,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  TextInput: {
    borderBottomWidth: 2,
    borderColor: "grey",
    height: 50,
    width: 340,
    paddingLeft: 20,
    fontSize: 18,
    borderRadius: 5,
    textAlign: "center",
  },
  OTPEmailSubContainer3: {
    width: 350,
    height: 300,

    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
  },
  OTPEmailSubContainer3A: {
    width: 346,
    height: 30,

    alignItems: "center",
    justifyContent: "center",
  },
  Recommend: {
    fontSize: 16,
    opacity: 0.3,
  },
  OTPEmailSubContainer3B: {
    width: 346,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
  },
  GetOPTButton: {
    borderWidth: 0.5,
    borderColor: "grey",
    height: 50,
    width: 340,
    backgroundColor: "#83CBDB",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  OTPEmailSubContainer3C: {
    width: 346,
    height: 160,
  },
});

export default OTPEmail;
