
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import emailjs from 'emailjs-com';

const Contact = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!firstName || !lastName || !email || !phone || !message) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const templateParams = {
      to_email: 'bawahjosephus67@gmail.com',
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      phone: phone,
      message: message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        Alert.alert('Success', 'Message sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        Alert.alert('Error', 'Failed to send message. Please try again.');
      });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Talk With Us</Text>
        <Text style={styles.description}>
          For any issue, please contact us. You can reach us on our phone
          number, email, website, or social media platforms. Our dedicated team
          is available to assist you with any queries or concerns.
        </Text>

        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Ionicons name="mail-outline" size={24} color="black" />
            <Text style={styles.contactText}>info@hadnivamultimedia.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={styles.contactText}>
              41, Ben Quao Mensah Street, Tesano
            </Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="call-outline" size={24} color="black" />
            <Text style={styles.contactText}>0800-423-6482</Text>
          </View>
        </View>
        <View style={styles.firstName}>
          <TextInput 
            style={styles.input1} 
            placeholder="First Name" 
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput 
            style={styles.input1} 
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <TextInput 
          style={styles.input} 
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <CustomButton title="Send" onPress={handleSend} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },

  contactInfo: {
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
  },

  contactInfo: {
    marginBottom: 20,
  },
  firstName: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#83CBDB",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  input1: {
    borderColor: "#83CBDB",
    borderWidth: 1,
    width: "50%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },

  sendButton: {
    backgroundColor: "#83CBDB",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "40%",
    alignSelf: "center",
  },
  sendButtonText: {
    fontWeight: "bold",
    fontSize: 20,
  }, 
});

export default Contact;