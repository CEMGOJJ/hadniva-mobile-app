import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const OTP = () => {
  return (
    <View style={styles.OTPConatiner}>
      <View style={styles.miniContainer1}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.SignUpHadnivaLogo}
            source={require("./assets/hadniva-removebg-preview 1.png")}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text1}>OTP Verification</Text>
        </View>
      </View>
      <View style={styles.miniContainer2}>
        <View style={styles.TextContainer}>
          <Text style={styles.Text2}>Enter the OTP sent to youtrtr email</Text>
        </View>
        <View style={styles.OTPBoxes}>
          <TextInput
            keyboardType="numeric"
            style={styles.TextInput}
            placeholder="X"
          />
          <TextInput
            keyboardType="numeric"
            style={styles.TextInput}
            placeholder="X"
          />
          <TextInput
            keyboardType="numeric"
            style={styles.TextInput}
            placeholder="X"
          />
          <TextInput
            keyboardType="numeric"
            style={styles.TextInput}
            placeholder="X"
          />
        </View>
      </View>
      <View style={styles.miniContainer3}>
        <View style={styles.Amin}></View>
        <View style={styles.Bmin}>
          <Text style={styles.Text2}>Didn't recieve OTP code? Click to</Text>
          <TouchableOpacity>
            <Text style={styles.Text3}>Resend</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Cmin}>
          <TouchableOpacity>
            <View style={styles.Button}>
              <Text style={styles.Text1}>Verify</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OTPConatiner: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EEF7F8",
  },
  miniContainer1: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    height: 100,
    paddingTop: 2,
    paddingBottom: 2,

    justifyContent: "space-between",
  },
  ImageContainer: {
    width: 300,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
  },

  Text1: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    opacity: 0.6,
  },
  miniContainer2: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    height: 250,
    paddingTop: 2,
    paddingBottom: 2,

    justifyContent: "space-between",
  },
  TextInput: {
    height: 50,
    width: 50,
    borderWidth: 0.5,
    borderColor: "black",
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    opacity: 0.6,
    textAlign: "center",
    backgroundColor: "#AEDCE6",
  },
  Text2: {
    fontSize: 15,
    color: "black",
    opacity: 0.6,
  },
  OTPBoxes: {
    width: 300,
    height: 210,

    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  TextContainer: {
    width: 300,
    height: 30,

    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  miniContainer3: {
    width: "100%",
    height: 300,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2,
  },
  Amin: {
    width: 300,
    height: 140,
  },
  Bmin: {
    width: 340,
    height: 30,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  Text3: {
    fontSize: 15,
    fontWeight: "900",
    color: "black",
    opacity: 0.9,
    marginLeft: 10,
    color: "#AEDCE6",
  },
  Cmin: {
    width: 300,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    width: 90,
    height: 40,

    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AEDCE6",
  },
});

export default OTP;
