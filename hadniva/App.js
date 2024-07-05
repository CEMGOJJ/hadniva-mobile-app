import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import SplashScreen1 from "./components/SplashScreen1";
import LogIn from "./components/LogIn";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <SplashScreen1 /> */}
        <LogIn />
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
  },
});
