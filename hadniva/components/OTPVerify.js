import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";

const OTPVerify = () => {
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (text, index) => {
    const newOtp = { ...otp, [index]: text };
    setOtp(newOtp);

    if (text && index < 4) {
      inputRefs[index].current.focus();
    }
  };

  const handleVerify = () => {
    const fullOtp = Object.values(otp).join("");
    if (fullOtp.length === 4) {
      Alert.alert("OTP Verified", `Your OTP code is ${fullOtp}`);
    } else {
      Alert.alert("Error", "Please enter the complete OTP");
    }
  };

  const handleResend = () => {
    Alert.alert("OTP Resent", "A new OTP has been sent to your email");
  };

  return (
    <SafeAreaView style={styles.OTPContainer}>
      <View style={styles.miniContainer1}>
        <View style={styles.ImageContainer}>
          {/* <Image
            style={styles.SignUpHadnivaLogo}
            source={require("./assets/hadniva-removebg-preview 1.png")}
          /> */}
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text1}>OTP Verification</Text>
        </View>
      </View>
      <View style={styles.miniContainer2}>
        <View style={styles.TextContainer}>
          <Text style={styles.Text2}>Enter the OTP sent to your email</Text>
        </View>
        <View style={styles.OTPBoxes}>
          {[1, 2, 3, 4].map((index) => (
            <TextInput
              key={index}
              keyboardType="numeric"
              style={styles.TextInput}
              placeholder="X"
              maxLength={1}
              value={otp[index]}
              onChangeText={(text) => handleInputChange(text, index)}
              ref={inputRefs[index - 1]}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace" && index > 1) {
                  inputRefs[index - 2].current.focus();
                }
              }}
            />
          ))}
        </View>
      </View>
      <View style={styles.miniContainer3}>
        <View style={styles.Amin}></View>
        <View style={styles.Bmin}>
          <Text style={styles.Text2}>Didn't receive OTP code?</Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.Text3}>Resend</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Cmin}>
          <TouchableOpacity onPress={handleVerify}>
            <View style={styles.Button}>
              <Text style={styles.Text1}>Verify</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OTPContainer: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "space-evenly",
    backgroundColor: "#EEF7F8",
  },
  miniContainer1: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 2,
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
    alignItems: "center",
    paddingVertical: 2,
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  TextContainer: {
    width: 300,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  miniContainer3: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 2,
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

export default OTPVerify;
