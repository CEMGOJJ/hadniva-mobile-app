import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";

const { width: windowWidth } = Dimensions.get('window');
const baseWidth = 375;
const scale = windowWidth / baseWidth;

const normalize = (size) => size * scale;

const BugReport = () => {
  return (
    <SafeAreaView style={styles.BugReportMainContainer}>
      <View style={styles.subjectContainer}>
      <Text style={styles.subjectText}>Subject</Text>
      </View>
      <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Subject"
        value={Text}
        style={styles.BugReportTextInput}
      />
      </View>

      <View >
        <Text style={styles.subjectText}>Content</Text>
      </View>
      <View style={styles.ContentContainer}>
      <TextInput
        placeholder=""
        placeholderStyle={{marginTop: 100}}
        value={Text}
        style={styles.BugReportTextIContent}
      />
      </View>
      <TouchableOpacity>
      <View style={styles.sendbutton}>
      <View style={styles.buttonContainer}>
        <Text style={styles.sendText}>Send</Text>
      </View>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BugReportMainContainer: {
    justifyContent: "space-between",
    height: '100%',
    width: "100%",
    backgroundColor: "white",
  },
  subjectContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  subjectText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20
  },
  BugReportTextInput: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#83CBDB',
    paddingLeft: 10,
    letterSpacing: 2,
    opacity: 0.5,
    borderWidth: 3,
  },
  textInputContainer: {
    paddingTop: 20,
    alignItems: 'center'
  },
  BugReportTextIContent: {
    height: 370,
    width: '90%',
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#83CBDB',
    paddingLeft: 10,
    letterSpacing: 2,
    opacity: 0.5,
    borderWidth: 3,
     paddingLeft: 20,
  },
  ContentContainer: {
    paddingTop: 20,
    alignItems: 'center' 
  },
  buttonContainer: {
    backgroundColor: '#83CBDB',
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  sendText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sendbutton: {
    paddingTop: 20,
    paddingBottom: 60,
    alignItems: 'center'
  }
});

export default BugReport;
