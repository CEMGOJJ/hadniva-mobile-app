
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text,Alert } from 'react-native';
import { Button } from 'react-native-paper';

const PasswordRecoveryScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      Alert.alert("You have successfully reset your password") ;
    } else {
      Alert.alert('Passwords do not match');
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
