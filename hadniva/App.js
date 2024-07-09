import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

//Importing screen components
import SplashScreen1 from "./components/SplashScreen1";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import OTPVerify from "./components/OTPVerify";
import OTPNumber from "./components/OTPNumber";
import OTPEmail from "./components/OTPEmail";
import PasswordRecoveryEmail from "./components/PasswordRecoveryEmail";
import SetNewPassword from "./components/SetNewPassword";
import SetProfilePicture from "./components/SetProfilePicture";
import SplashScreen2 from "./components/SplashScreen2";
import Home from "./components/Home";

import WebDevelopment from "./components/WebDevelopment";
import SocialMediaMarketing from "./components/SocialMediaMarketing";
import RemoteDesktopSolutions from "./components/RemoteDesktopSolutions";

//Creating the navigation containers

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Payment") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#83CBDB",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          borderTopWidth: 3,
          elevation: 10,
          shadowOpacity: 0.2,
          setOffset: { width: 0, height: -3 },
        },
      })}
    >
      <Tab.Screen name="Payment" component={SignUp} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SignUp} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={
          {
            // This hides the header for the drawer navigation
          }
        }
      >
        <Drawer.Screen name="Main" component={TabNavigator} />
        <Drawer.Screen name="About" component={SplashScreen2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
