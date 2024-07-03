
import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EditProfileScreen = () => {
  const [name, setName] = useState('Cindarella Ansah Kumi');
  const [email, setEmail] = useState('kwameayew@gmail.com');
  const [cityState, setCityState] = useState('Walewale, North-East Region');
  const [country, setCountry] = useState('GHANA');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Save</Text>
      
      <View style={styles.profileImageContainer}>
        <Image
          source={require('./assets/Ellipse 9.png')}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>CITY / STATE</Text>
        <TextInput
          style={styles.input}
          value={cityState}
          onChangeText={setCityState}
        />

        <Text style={styles.label}>COUNTRY</Text>
        <TextInput
          style={styles.input}
          value={country}
          onChangeText={setCountry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 300
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 12,
    opacity: 0.5,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    fontSize: 16,
    paddingVertical: 5,
    marginBottom: 20,
  },
});

export default EditProfileScreen;