
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const OTPEmail = ({ route }) => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const { email, isSignUp } = route.params;

  const handleVerify = () => {
    // In a real app, you'd verify the OTP with your backend
    if (otp === '1234') { // Example OTP
      if (isSignUp) {
        navigation.navigate('SplashScreen1');
      } else {
        navigation.replace('MainApp');
      }
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>An OTP has been sent to {email}</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ADE7EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OTPEmail;