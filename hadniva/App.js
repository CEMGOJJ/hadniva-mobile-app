import "react-native-gesture-handler";
import React from "react";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "./src/context/ThemeContext";
import { darkTheme, lightTheme } from "./src/components/theme";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

//Importing screen components
// import SplashScreen1 from "./components/SplashScreen1";
// import LogIn from "./components/LogIn";
// import SignUp from "./components/SignUp";
// import OTPVerify from "./components/OTPVerify";
// import OTPNumber from "./components/OTPNumber";
// import OTPEmail from "./components/OTPEmail";
// import PasswordRecoveryEmail from "./components/PasswordRecoveryEmail";
// import SetNewPassword from "./components/SetNewPassword";
// import SetProfilePicture from "./components/SetProfilePicture";
// import SplashScreen2 from "./components/SplashScreen2";
import Home from "./src/screens/Home";

import WebDevelopment from "./src/screens/WebDevelopment";
import SocialMediaMarketing from "./src/screens/SocialMediaMarketing";
import RemoteDesktopSolutions from "./src/screens/RemoteDesktopSolutions";
import Settings from "./src/screens/Settings";
import Payment from "./src/screens/Payment";
import Profile from "./src/screens/Profile";
import Notifications from "./src/screens/Notifications";
import Analytics from "./src/screens/Analytics";
import Resources from "./src/screens/Resources";
import Contact from "./src/screens/Contact";
import Account from "./src/screens/Account";
import ChatSupport from "./src/screens/ChatSupport";
import LogOut from "./src/screens/LogOut";
import BugReport from "./src/screens/BugReport";
import SendFeedback from "./src/screens/SendFeedback";
import Appointment from "./src/screens/Appointment";
import ProfileEdit from "./src/screens/ProfileEdit";
import KnowledgeBase from "./src/screens/KnowledgeBase";
import VideoTutorials from "./src/screens/VideoTutorials";
import Blog from "./src/screens/Blog";

// Importing Contexts
import { ThemeProvider } from "./src/context/ThemeContext";

//Creating the navigation containers

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerShown: true,
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color={theme.text}
            onPress={() =>
              navigation.canGoBack()
                ? navigation.goBack()
                : navigation.navigate("EntireHomeScreen")
            }
          />
        ),
        headerTitle: route.name,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
      })}
    >
      <Stack.Screen
        name="EntireHomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Remote" component={RemoteDesktopSolutions} />
      <Stack.Screen name="Web" component={WebDevelopment} />
      <Stack.Screen name="Social" component={SocialMediaMarketing} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="ChatSupport" component={ChatSupport} />
      <Stack.Screen name="LogOut" component={LogOut} />
      <Stack.Screen name="BugReport" component={BugReport} />
      <Stack.Screen name="SendFeedback" component={SendFeedback} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="KnowledgeBase" component={KnowledgeBase} />
      <Stack.Screen name="VideoTutorials" component={VideoTutorials} />
      <Stack.Screen name="Blog" component={Blog} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Appointment") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#83CBDB",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: theme.borderColor,
          elevation: 10,
          shadowOpacity: 0.2,
          setOffset: { width: 0, height: -3 },
          backgroundColor: theme.background,
        },
      })}
    >
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function AppContent() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          return {
            headerShown: !routeName || routeName === "EntireHomeScreen",
            headerTitle: "",
            headerTintColor: theme.text,
            headerStyle: {
              backgroundColor: theme.background,
            },
            drawerActiveTintColor: "#83CBDB",
            drawerInactiveTintColor: "gray",
            drawerStyle: {
              backgroundColor: theme.background,
            },
          };
        }}
      >
        <Drawer.Screen
          name="Main"
          component={TabNavigator}
          options={({ route }) => ({
            drawerIcon: ({ color, size }) => (
              <Icon name="explore" color={color} size={size} />
            ),
            headerShown:
              !getFocusedRouteNameFromRoute(route) ||
              getFocusedRouteNameFromRoute(route) === "EntireHomeScreen",
          })}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="notifications-active" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Analytics"
          component={Analytics}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="trending-up" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Resources Center"
          component={Resources}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="folder" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={Contact}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
