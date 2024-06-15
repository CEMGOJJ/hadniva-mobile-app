import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SplashScreen from "./SplashScreen";
import SignUp from "./SignUp";
import OTP from "./OTP";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <SplashScreen /> */}
        <SignUp />
        {/* <OTP /> */}
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
    paddingTop: 40,
  },
});
