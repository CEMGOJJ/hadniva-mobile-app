
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PasswordRecoveryEmail = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleSendRecoveryEmail = () => {
    if (email) {
      // Here you would typically call an API to send the recovery email
      Alert.alert("Recovery Email Sent", "Please check your email for further instructions.");
      navigation.navigate("PasswordRecoveryScreen");
    } else {
      Alert.alert("Error", "Please enter your email address");
    }
  };

  return (
    <View style={styles.PasswordRecoveryEmailMainContainer}>
      <View style={styles.PasswordRecoveryEmailSubContainer1}>
        <View style={styles.PasswordRecoveryEmailSubContainer1A}></View>
        <View style={styles.PasswordRecoveryEmailSubContainer1B}>
          <View style={styles.TextBox1}>
            <Text style={styles.Text1}>Forgotten Password?</Text>
          </View>
          <View style={styles.TextBox2}>
            <Text style={styles.Text2}>
              Please enter your email address to receive a password reset link.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.PasswordRecoveryEmailSubContainer2}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.PasswordRecoveryEmailSubContainer3}>
        <View style={styles.PasswordRecoveryEmailSubContainer3A}></View>
        <View style={styles.PasswordRecoveryEmailSubContainer3B}>
          <TouchableOpacity onPress={handleSendRecoveryEmail}>
            <View style={styles.PasswordRecoveryEmailButton}>
              <Text style={styles.ButtonText}>SEND</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.PasswordRecoveryEmailSubContainer3C}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PasswordRecoveryEmailMainContainer: {
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
  PasswordRecoveryEmailSubContainer1: {
    width: 350,
    height: 140,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  PasswordRecoveryEmailSubContainer1A: {
    width: 346,
    height: 30,
  },
  PasswordRecoveryEmailSubContainer1B: {
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
  PasswordRecoveryEmailSubContainer2: {
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
    width: 280,
    paddingLeft: 20,
    fontSize: 18,
    overflow: "hidden",
    textAlign: "center",
  },
  PasswordRecoveryEmailSubContainer3: {
    width: 350,
    height: 300,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
  },
  PasswordRecoveryEmailSubContainer3A: {
    width: 346,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  Recommend: {
    fontSize: 16,
    opacity: 0.3,
  },
  PasswordRecoveryEmailSubContainer3B: {
    width: 346,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  PasswordRecoveryEmailButton: {
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
  PasswordRecoveryEmailSubContainer3C: {
    width: 346,
    height: 160,
  },
});

export default PasswordRecoveryEmail;
