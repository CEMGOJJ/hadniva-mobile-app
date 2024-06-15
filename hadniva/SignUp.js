import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { Zocial } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.SignUpMainContainer}>
      <View style={styles.miniContainer1}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.SignUpHadnivaLogo}
            source={require("./assets/hadniva-removebg-preview 1.png")}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text1}>Sign Up To Get Started</Text>
        </View>
      </View>
      <View style={styles.miniContainer2}>
        <View style={styles.TextInputsContainer}>
          <View style={styles.Input1}>
            <FontAwesome6
              style={styles.leftIcon}
              name="user-large"
              size={14}
              color="black"
            />
            <TextInput style={styles.TextInput} placeholder="Username" />
            <View style={styles.destro}></View>
          </View>
          <View style={styles.Input1}>
            <Zocial
              style={styles.leftIcon}
              name="email"
              size={14}
              color="black"
            />
            <TextInput style={styles.TextInput} placeholder="Email" />
            <View style={styles.destro}></View>
          </View>
          <View style={styles.Input1}>
            <FontAwesome5
              style={styles.leftIcon}
              name="lock"
              size={15}
              color="black"
            />
            <TextInput style={styles.TextInput} placeholder="Password" />
            <Ionicons
              style={styles.rightIcon}
              name="eye-off"
              size={15}
              color="black"
            />
          </View>
          <View style={styles.Input1}>
            <FontAwesome5
              style={styles.leftIcon}
              name="lock"
              size={15}
              color="black"
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
            />
            <Ionicons
              style={styles.rightIcon}
              name="eye-off"
              size={15}
              color="black"
            />
          </View>
        </View>
        <View style={styles.CheckBoxConatiner}>
          <View style={styles.Check}></View>
          <Text style={styles.Text2}>I agree with Privacy and Policy</Text>
        </View>
      </View>
      <View style={styles.miniContainer3}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.SignUpButton}>
              <Text style={styles.Text3}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.enquiryContainer}>
          <Text style={styles.Text4}>or continue with</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              style={styles.icon1}
              source={require("./assets/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon1}
              source={require("./assets/facebook.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon1}
              source={require("./assets/apple.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.alreadyContainer}>
          <Text style={styles.Text5}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.Text6}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SignUpMainContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EEF7F8",
  },

  miniContainer1: {
    width: "90%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    paddingTop: 2,
    paddingBottom: 2,
  },
  ImageContainer: {
    width: 300,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
  },

  TextContainer: {
    width: 300,
    height: 30,

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
    width: "90%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 350,
    paddingTop: 2,
    paddingBottom: 2,
  },
  TextInputsContainer: {
    width: 300,

    height: 310,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  Input1: {
    width: 290,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  leftIcon: {
    left: 25,
    zIndex: 1,
  },
  rightIcon: {
    right: 25,
    zIndex: 1,
  },
  TextInput: {
    width: "98%",
    height: "98%",

    borderRadius: 10,
    paddingLeft: 35,
    paddingRight: 35,
    overflow: "hidden",
    fontSize: 15,
    fontWeight: "300",
    backgroundColor: "#AEDCE6",
  },
  destro: {
    width: "5%",
    height: "98%",
  },
  CheckBoxConatiner: {
    width: 300,

    height: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Check: {
    width: 18,
    height: 18,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#AEDCE6",
  },
  Text2: {
    fontsize: 15,
    color: "black",
    opacity: 0.5,
    marginLeft: -13,
  },
  miniContainer3: {
    width: "90%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 250,
    paddingTop: 2,
    paddingBottom: 2,
  },
  buttonContainer: {
    width: "60%",

    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  SignUpButton: {
    width: 90,
    height: 40,

    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AEDCE6",
  },
  Text3: {
    fontSize: 18,
    fontWeight: "700",
  },
  enquiryContainer: {
    width: "60%",

    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  Text4: {
    fontSize: 15,
    color: "black",
    opacity: 0.5,
    fontWeight: "400",
  },
  iconContainer: {
    width: "40%",

    height: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  icon1: {
    height: 25,
    width: 25,
  },
  alreadyContainer: {
    width: 300,

    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Text5: {
    fontSize: 15,
    color: "black",
    opacity: 0.5,
    fontWeight: "400",
  },
  Text6: {
    fontSize: 15,
    color: "#AEDCE6",
    fontWeight: "700",
    marginLeft: 7,
  },
});

export default SignUp;
