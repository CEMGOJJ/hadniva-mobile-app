
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match");
        return;
      }
      // Here you would typically send the sign-up data to your backend
      // For this example, we'll just simulate a successful sign-up
      Alert.alert("Sign Up Successful", `Welcome, ${email}!`, [
        {
          text: "OK",
          onPress: () => navigation.replace("MainApp")
        }
      ]);
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <View style={styles.SignMainContainer}>
      <View style={styles.SignSubContainer1}>
        <View style={styles.SignSubContainer1A}></View>
        <View style={styles.SignSubContainer1B}>
          <View style={styles.TextBox1}>
            <Text style={styles.Text1}>Create an account</Text>
          </View>
          <View style={styles.TextBox2}>
            <Text style={styles.Text2}>
              Create your account, it takes less than a minute
            </Text>
            <Text style={styles.Text2}>Enter your email and password</Text>
          </View>
        </View>
      </View>
      <View style={styles.SignSubContainer2}>
        <View style={styles.SignSubContainer2A}>
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
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <View style={styles.SignSubContainer2B}>
          <TouchableOpacity onPress={handleSignUp}>
            <View style={styles.SignButton}>
              <Text style={styles.ButtonText}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SignSubContainer3}>
        <View style={styles.SignSubContainer3D}></View>
        <View style={styles.SignSubContainer3A}>
          <View style={styles.Line}></View>
          <Text style={styles.OrText}>Or sign up with</Text>
          <View style={styles.Line}></View>
        </View>
        <View style={styles.SignSubContainer3D}></View>
        <View style={styles.SignSubContainer3B}>
          <View style={styles.IconsBox}>
            <View style={styles.Box}>
              <Image source={require("../asset/google.png")} />
            </View>
            <View style={styles.Box}>
              <Image source={require("../asset/linkedin.png")} />
            </View>
            <View style={styles.Box}>
              <Image source={require("../asset/apple.png")} />
            </View>
          </View>
        </View>
        <View style={styles.SignSubContainer3D}></View>
        <View style={styles.SignSubContainer3C}>
          <Text style={styles.DontText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.LoginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SignSubContainer3D}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SignMainContainer: {
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
  SignSubContainer1: {
    width: 350,
    height: 140,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  SignSubContainer1A: {
    width: 346,
    height: 30,
  },
  SignSubContainer1B: {
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
  SignSubContainer2: {
    width: 350,
    height: 280,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 2,
  },
  SignSubContainer2A: {
    width: 346,
    height: 200,
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
  SignSubContainer2B: {
    width: 346,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  SignButton: {
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
  SignSubContainer3: {
    width: 350,
    height: 280,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 2,
  },
  SignSubContainer3A: {
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
  SignSubContainer3B: {
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
  SignSubContainer3C: {
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
  LoginText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3EAEC7",
    marginLeft: 5,
  },
  SignSubContainer3D: {
    width: 346,
    height: 35,
  },
});

export default SignUp;