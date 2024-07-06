import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import SplashScreen1 from "./components/SplashScreen1";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import OTPVerify from "./components/OTPVerify";
import OTPNumber from "./components/OTPNumber";
import OTPEmail from "./components/OTPEmail";
import PasswordRecoveryEmail from "./components/PasswordRecoveryEmail";
import SetNewPassword from "./components/SetNewPassword";
import SetProfilePicture from "./components/SetProfilePicture";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <SplashScreen1 /> */}
        {/* <LogIn /> */}
        {/* <SignUp /> */}
        {/* <OTPVerify /> */}
        {/* <OTPNumber /> */}
        {/* <OTPEmail /> */}
        {/* <PasswordRecoveryEmail /> */}
        {/* <SetNewPassword /> */}
        <SetProfilePicture />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#EEF7F8",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
