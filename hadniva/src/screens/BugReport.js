import React from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const { width: windowWidth } = Dimensions.get("window");
const baseWidth = 375;
const scale = windowWidth / baseWidth;
const screenHeight = Dimensions.get("window").height;
const normalize = (size) => size * scale;

const handleSend = () => {
  // Implement your logout logic here
  // Then navigate to login screen or home screen
};

const BugReport = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={[
        styles.BugReportMainContainer,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.BugReportSubContainer1}>
        <Text style={[styles.pageTitle, { color: theme.text }]}>
          Bug Report
        </Text>
      </View>
      <View style={styles.BugReportSubContainer2}>
        <View style={styles.BugReportSubContainer2A}>
          <View style={styles.subjectContainer}>
            <Text style={[styles.subjectText, { color: theme.text }]}>
              Brief description of the issue
            </Text>
          </View>
          <View style={styles.subjectTextInputContainer}>
            <TextInput
              placeholder="(e.g., 'App crashes on login')"
              value={Text}
              style={[styles.TextInput1, { color: theme.text }]}
              placeholderTextColor={theme.placeholderTextColor}
            />
          </View>
        </View>
        <View style={styles.BugReportSubContainer2B}>
          <View style={styles.contentContainer}>
            <Text style={[styles.contentText, { color: theme.text }]}>
              Please describe the bug in detail:
            </Text>
          </View>
          <View style={styles.contentTextInputContainer}>
            <CustomTextInput
              placeholder={
                "- What were you doing when the bug occurred?\n" +
                "- What did you expect to happen?\n" +
                "- What actually happened?\n" +
                "- Steps to reproduce the bug\n" +
                " - Device model and OS version\n" +
                " - App version\n" +
                "- Any error messages you saw"
              }
              multiline={true}
              numberOfLines={14}
              value={Text}
              style={[styles.TextInput2, { color: theme.text }]}
            />
          </View>
        </View>
      </View>
      <View style={styles.BugReportSubContainer3}>
        <CustomButton title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BugReportMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
  BugReportSubContainer1: {
    width: 350,
    height: 50,
    padding: 2,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: "400",
    fontStyle: "italic",
  },
  BugReportSubContainer2: {
    width: 350,
    height: 490,
    padding: 2,

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  BugReportSubContainer2A: {
    width: 346,
    height: 120,
    padding: 2,

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  subjectContainer: {
    width: 342,
    height: 40,
    padding: 2,

    justifyContent: "center",
  },
  subjectText: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
    fontStyle: "italic",
  },
  subjectTextInputContainer: {
    width: 342,
    height: 70,
    padding: 2,

    justifyContent: "center",
    alignItems: "center",
  },
  TextInput1: {
    height: 60,
    width: 336,
    fontSize: 17,
    borderColor: "#83CBDB",
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  BugReportSubContainer2B: {
    width: 346,
    height: 360,
    padding: 2,

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  contentContainer: {
    width: 342,
    height: 40,
    padding: 2,

    justifyContent: "center",
  },
  contentText: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
    fontStyle: "italic",
  },
  contentTextInputContainer: {
    width: 342,
    height: 310,
    padding: 2,

    justifyContent: "center",
    alignItems: "center",
  },
  TextInput2: {
    height: 300,
    width: 336,
    fontSize: 17,
    borderColor: "#83CBDB",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    textAlignVertical: "top",
  },
  BugReportSubContainer3: {
    width: 350,
    height: 60,
    padding: 2,

    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default BugReport;
