
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";



const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email && password) {
      // Here you would typically validate the credentials with your backend
      // For this example, we'll just simulate a successful login
      Alert.alert("Login Successful", `Welcome back, ${email}!`, [
        {
          text: "OK",
          onPress: () => navigation.replace("MainApp")
        }
      ]);
    } else {
      Alert.alert("Error", "Please enter both email and password");
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "Password reset instructions sent to your email.");
  };

  

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
      <View style={styles.LoginSubContainer2}>
        <View style={styles.LoginSubContainer2A}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.LoginSubContainer2B}>
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.LoginButton}>
              <Text style={styles.ButtonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.LoginSubContainer2C}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.ForgottenText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.LoginSubContainer3}>
        <View style={styles.LoginSubContainer3D}></View>
        <View style={styles.LoginSubContainer3A}>
          <View style={styles.Line}></View>
          <Text style={styles.OrText}>Or sign in with</Text>
          <View style={styles.Line}></View>
        </View>
        <View style={styles.LoginSubContainer3D}></View>
        <View style={styles.LoginSubContainer3B}>
          <View style={styles.IconsBox}>
            <View style={styles.Box}>
              <Image source={require("../asset/google.png")} />
            </View>
            <View style={styles.Box}>
              <Image source={require("../asset/apple.png")} />
            </View>
            <View style={styles.Box}>
              <Image source={require("../asset/linkedin.png")} />
            </View>
          </View>
        </View>
        <View style={styles.LoginSubContainer3D}></View>
        <View style={styles.LoginSubContainer3C}>
          <Text style={styles.DontText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.SignText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.LoginSubContainer3D}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LogInMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
  },
  LoginSubContainer1: {
    width: 350,
    height: 140,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  LoginSubContainer1A: {
    width: 346,
    height: 30,
  },
  LoginSubContainer1B: {
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
  LoginSubContainer2: {
    width: 350,
    height: 280,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 2,
  },
  LoginSubContainer2A: {
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
  LoginSubContainer2B: {
    width: 346,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  LoginButton: {
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
  LoginSubContainer2C: {
    width: 346,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  ForgottenText: {
    fontSize: 15,
    opacity: 0.3,
  },
  LoginSubContainer3: {
    width: 350,
    height: 280,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 2,
  },
  LoginSubContainer3A: {
    width: 346,
    height: 35,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Line: {
    borderWidth: 0.5,
    borderBlockColor: "grey",
    width: 120,
  },
  OrText: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: "center",
  },
  LoginSubContainer3B: {
    width: 346,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  IconsBox: {
    width: 246,
    height: 44,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  Box: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  LoginSubContainer3C: {
    width: 346,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  DontText: {
    fontSize: 14,
    fontWeight: "600",
  },
  SignText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3EAEC7",
    marginLeft: 5,
  },
  LoginSubContainer3D: {
    width: 346,
    height: 35,
  },
 });

export default LogIn;