import React, { useState } from 'react';
import { View,Image, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Card } from 'react-native-paper'; 
const PaymentMethodsScreen = () => {
    const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
    <Image source={require('./assets/Rectangle 92.png')} style={{width: '100%'}}/>
    <Card style={styles.card}>
<View>
      <TextInput
        style={styles.input}
        placeholder="Message"
        placeholderTextColor="#ADD8E6"
        value={text}
        onChangeText={(text) => setText(text)}
        autoFocus={false}
        onFocus={()=>Alert.alert('Your text should be at most 100 charactres')}
        maxLength={100}
      />
    </View>
    <View style={styles.horizontalLine}>
    <TouchableOpacity onPress={()=> Alert.alert('Your message has been sent')}>
    <Card style={styles.card1}>
      <Image source={require('./assets/Vector-2.png')} style={styles.messageUs} />
      </Card>
      </TouchableOpacity>
      </View>
    </Card>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    height: 600, 
    width: '100%',
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    backgroundColor: 'white',
    marginTop: -50,
    justifyContent: 'centre',
  },
  card1: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 150,
  },
  messageUs: {
    marginLeft: 20,
    marginTop: 20,
  },
  horizontalLine: {
borderColor: 'gray',
borderTopWidth: 1,
height: 100, 
width: '100%',
backgroundColor: '#FFF',
marginTop: 330,
  },
  input: {
    height: 100,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 60,
    fontSize: 25,
    marginLeft: 20
  },
});

export default PaymentMethodsScreen;