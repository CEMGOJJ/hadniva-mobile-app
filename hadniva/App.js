import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SplashScreen from "./SplashScreen";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SplashScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#eef7f8",
    marginTop: 15,
    padding: 5,
    height: "100%",
    width: "100%",
  },
});
