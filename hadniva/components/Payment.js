import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Payment = () => {
  return (
    <View>
      <Text style={styles.headerText}>Choose a Payment Option</Text>
      <View style={styles.Payoptions}>
      <View style={styles.debitCard}>
<Text style={styles.paymentText}>Debit / Credit Card</Text>
<TouchableOpacity><Image source={require('../assets/debitCard.png')} /></TouchableOpacity>
      </View>
      <View style={styles.mobileMoney}>
<Text style={styles.paymentText}>Mobile Money</Text>
<TouchableOpacity><Image source={require('../assets/visa.png')} /></TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
headerText: {
fontSize: 22,
fontWeight: "bold",
padding: 20,
},
paymentText: {
  fontSize: 20,
  fontWeight: 'bold',
},
debitCard: {
  backgroundColor: "#F4F4F4",
  paddingLeft: 20,
  flexDirection: 'row',
  gap: 100,
   borderBottomWidth: 0.5,

},

mobileMoney: {
  backgroundColor: "#F4F4F4",
  paddingLeft: 20, 
  flexDirection: 'row',
  gap: 140,
  borderBottomWidth: 0.5,
},
Payoptions: {
  top: 130,
  gap: 80,
},
});

export default Payment;
