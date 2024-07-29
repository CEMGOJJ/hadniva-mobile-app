
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

const PasswordRecoveryScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      // Here you would typically call an API to update the password
      Alert.alert("Success", "You have successfully reset your password", [
        { text: "OK", onPress: () => navigation.navigate("Login") }
      ]);
    } else {
      Alert.alert('Error', 'Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Up New Password</Text>
      <Text style={styles.subHeader}>
        Your New Password Must Be Different From Previously Used Password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button mode="contained" onPress={handleResetPassword} style={styles.button}>
        Reset Password
      </Button>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#b2ebf2',
    width: '100%',
    padding: 10,
  },
});

export default PasswordRecoveryScreen;
