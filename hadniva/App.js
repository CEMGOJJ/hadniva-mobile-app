
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

// Importing screen components
import LogIn from "./src/screens/LogIn";
import SignUp from "./src/screens/SignUp";
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
import OTPEmail from "./src/screens/OTPEmail";
import SplashScreen1 from "./src/screens/SplashScreen1";
import SplashScreen2 from "./src/screens/SplashScreen2";
import PasswordRecoveryEmail from "./src/screens/PasswordRecoveryEmail";
import PasswordRecoveryScreen from "./src/screens/PasswordRecoveryScreen";
import NotificationDisplay from "./src/screens/NotificationDisplay";
import NotificationDetails from "./src/screens/NotificationDetails";
import NotificationManager from "./src/screens/NotificationManager";
// Importing Contexts
import { ThemeProvider } from "./src/context/ThemeContext";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Stack.Navigator
      initialRouteName="EntireHomeScreen"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={24}
            color={theme.text}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
      })}
    >
      <Stack.Screen
        name="EntireHomeScreen"
        component={Home}
        options={{ headerTitle: "Home" }}
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
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Appointment" component={Appointment} />
     <Stack.Screen name="PasswordRecoveryEmail" component={PasswordRecoveryEmail} />
      <Stack.Screen name="PasswordRecoveryScreen" component={PasswordRecoveryScreen} />
      <Stack.Screen name="NotificationDisplay" component={NotificationDisplay} />
      <Stack.Screen name="NotificationDetails" component={NotificationDetails} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AppointmentTab") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "SettingsTab") {
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
      <Tab.Screen
        name="AppointmentTab"
        component={HomeStack}
        options={{ tabBarLabel: "Appointment" }}
        initialParams={{ screen: "Appointment" }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ tabBarLabel: "Home" }}
        initialParams={{ screen: "EntireHomeScreen" }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={HomeStack}
        options={{ tabBarLabel: "Settings" }}
        initialParams={{ screen: "Settings" }}
      />
    </Tab.Navigator>
  );
}

function MainAppNavigator() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#83CBDB",
        drawerInactiveTintColor: "gray",
        drawerStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="explore" color={color} size={size} />
          ),
        }}
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
  );
}

function AppContent() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTPEmail" component={OTPEmail} />
        <Stack.Screen name="SplashScreen1" component={SplashScreen1} />
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
        <Stack.Screen name="MainApp" component={MainAppNavigator} />
        <Stack.Screen name="PasswordRecoveryEmail" component={PasswordRecoveryEmail} />
        <Stack.Screen name="PasswordRecoveryScreen" component={PasswordRecoveryScreen} />
      </Stack.Navigator>
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
