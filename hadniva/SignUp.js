//import { Checkbox } from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { View,Image, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Alert } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (!agree) {
      Alert.alert('Error', 'You must agree to the Privacy and Policy');
      return;
    }

  
    Alert.alert('Success', 'You have signed up successfully!');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <Image
            source={require('./assets/WhatsApp Image 2024-06-12 at 10.18.16.jpeg')}
            style={styles.hadniva}
          />
          <View style={{height: 10}}/>
      <Text style={styles.header}>Sign Up To Get Started</Text>
      
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <Ionicons name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
       <CheckBox
          value={agree}
          onValueChange={setAgree}
        /> 
        
        <Text style={styles.checkboxText}>I agree with Privacy and Policy</Text>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.orContinueWithText}>or continue with</Text>

      <View style={styles.socialIconsContainer}>
        <AntDesign name="google" size={30} color="#DB4437" />
        <FontAwesome name="facebook-square" size={30} color="#3b5998" />
        <AntDesign name="apple1" size={30} color="#000" />
      </View>

      <View style={styles.footer}>
        <Text>Already have an Account? </Text>
        <TouchableOpacity>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
 /* logo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },*/
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    //color: '#77c3ec',
    color: '#00BFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxText: {
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContinueWithText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInText: {
    color: '#00BFFF',
    fontWeight: 'bold',
  },
  hadniva: {
    height: 80,
    width: '100%',
    borderRadius: 20,
    marginLeft: 0,
  }
});

export default App;