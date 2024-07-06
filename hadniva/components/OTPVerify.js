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
    <View style={styles.OTPVerifyMainContainer}>
      <View style={styles.OTPVerifySubContainer1}>
        <View style={styles.OTPVerifySubContainer1A}></View>
        <View style={styles.OTPVerifySubContainer1B}>
          <View style={styles.TextBox1}>
            <Text style={styles.Text1}>OTP Verification</Text>
          </View>
          <View style={styles.TextBox2}>
            <Text style={styles.Text2}>
              Enter the Verification code that was sent to you.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.OTPVerifySubContainer2}>
        <View style={styles.OTPVerifySubContainer2A}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <TextInput
              key={index}
              keyboardType="numeric"
              style={styles.TextInput}
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
      <View style={styles.OTPVerifySubContainer3}>
        <View style={styles.OTPVerifySubContainer3A}>
          <Text style={styles.Recommend}>Didn't Recieve OTP?</Text>
          <Text style={styles.Resend}>Resend OTP</Text>
        </View>
        <View style={styles.OTPVerifySubContainer3B}>
          <TouchableOpacity>
            <View style={styles.OTPVerifyButton}>
              <Text style={styles.ButtonText}>VERIFY AND PROCEED</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.OTPVerifySubContainer3C}></View>
      </View>
    </View>

    //     <View style={styles.OTPBoxes}>
    //       {[1, 2, 3, 4].map((index) => (
    //         <TextInput
    //           key={index}
    //           keyboardType="numeric"
    //           style={styles.TextInput}
    //           placeholder="X"
    //           maxLength={1}
    //           value={otp[index]}
    //           onChangeText={(text) => handleInputChange(text, index)}
    //           ref={inputRefs[index - 1]}
    //           onKeyPress={({ nativeEvent }) => {
    //             if (nativeEvent.key === "Backspace" && index > 1) {
    //               inputRefs[index - 2].current.focus();
    //             }
    //           }}
    //         />
    //       ))}
    //     </View>
    //   </View>
  );
};

const styles = StyleSheet.create({
  OTPVerifyMainContainer: {
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
  OTPVerifySubContainer1: {
    width: 350,
    height: 140,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  OTPVerifySubContainer1A: {
    width: 346,
    height: 30,
  },
  OTPVerifySubContainer1B: {
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
  OTPVerifySubContainer2: {
    width: 350,
    height: 240,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  OTPVerifySubContainer2A: {
    alignItems: "center",
    justifyContent: "space-evenly",

    flexDirection: "row",
    width: 340,
    height: 90,
  },
  TextInput: {
    borderBottomWidth: 2,
    borderColor: "grey",

    height: 50,
    width: 50,
    paddingLeft: 20,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  OTPVerifySubContainer3: {
    width: 350,
    height: 300,

    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
  },
  OTPVerifySubContainer3A: {
    width: 346,
    height: 30,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  Recommend: {
    fontSize: 16,
    opacity: 0.6,
  },
  Resend: {
    fontSize: 16,
    color: "#3EAEC7",
    marginLeft: 10,
    fontWeight: "700",
  },
  OTPVerifySubContainer3B: {
    width: 346,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
  },
  OTPVerifyButton: {
    borderWidth: 0.5,
    borderColor: "grey",
    height: 50,
    width: 280,
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
  OTPVerifySubContainer3C: {
    width: 346,
    height: 160,
  },
});

export default OTPVerify;
