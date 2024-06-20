//import { Checkbox } from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { SafeAreaView,View,Image, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Alert } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    if (!email || !password ) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

  
    Alert.alert('Success', 'You have logged in successfully!');
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" />
      
      
          <View style={{height: 10}}/>
      <View>
      <Text style={styles.header}>Welcome back</Text>
      <Text>We are happy to see you here again</Text>
      <Text>Enter your email and password to log into your Account</Text>
      </View>
     
<View>
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

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Login</Text>
      </TouchableOpacity>
</View>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 130, textAlign: 'center'}}>forgot password ?</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
      <View style={styles.socialIconsContainer}>
        <AntDesign name="google" size={30} color="#DB4437" />
        <FontAwesome name="facebook-square" size={30} color="#3b5998" />
        <AntDesign name="apple1" size={30} color="#000" />
      </View>

      <View style={styles.footer}>
        <Text>Don't have an Account? </Text>
        <TouchableOpacity>
          <Text style={styles.logInText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'space-evenly'
  },
 
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0,
    marginBottom: 20,
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  
  signUpButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 8,
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
  
});

export default App;