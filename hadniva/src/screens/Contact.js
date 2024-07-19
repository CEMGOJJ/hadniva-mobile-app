import React from "react";
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, ViewBase } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

const Contact = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.title}>Talk With Us</Text>
      <Text style={styles.description}>
        For any issue, please contact us. You can reach us on our phone
        number, email, website, or social media platforms. Our dedicated team is available to
        assist you with any queries or concerns.
      </Text>

      <View style={styles.contactInfo}>
        <View style={styles.contactItem}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <Text style={styles.contactText}>info@hadnivamultimedia.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.contactText}>41, Ben Quao Mensah Street, Tesano</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="call-outline" size={24} color="black" />
          <Text style={styles.contactText}>0800-423-6482</Text>
        </View>
      </View>
<View style={styles.firstName}>
<TextInput style={styles.input1} placeholder="First Name" />
      <TextInput style={styles.input1} placeholder="Last Name" />
</View>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Phone Number" />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Message"
        multiline
      />
</View>
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>SEND</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },

  contactInfo: {
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
  },


  contactInfo: {
    marginBottom: 20,
  },
  firstName: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#83CBDB',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  input1: {
    borderColor: '#83CBDB',
    borderWidth: 1,
    width: '50%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  messageInput: {
    height: 100,
  },
  
  sendButton: {
    backgroundColor: '#83CBDB',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '40%',
    alignSelf: 'center',},
  sendButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Contact;
