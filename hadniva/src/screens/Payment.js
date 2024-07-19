import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";

const Payment = ({ navigation, route }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [momoNumber, setMomoNumber] = useState("");
  const [momoProvider, setMomoProvider] = useState("");

  const handlePayment = () => {
    if (paymentMethod === "card") {
      if (!cardNumber || !expiryDate || !cvv) {
        Alert.alert("Error", "Please fill all card details");
        return;
      }
      // Send card payment details to backend
      console.log("Processing card payment", { cardNumber, expiryDate, cvv });
    } else if (paymentMethod === "momo") {
      if (!momoNumber || !momoProvider) {
        Alert.alert("Error", "Please fill all Mobile Money details");
        return;
      }
      // Send MoMo payment details to backend
      console.log("Processing MoMo payment", { momoNumber, momoProvider });
    } else {
      Alert.alert("Error", "Please select a payment method");
      return;
    }

    // Here you would typically make an API call to your backend
    // For now, we'll just show a success message
    Alert.alert("Success", "Payment processed successfully!", [
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
  };

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        Select Payment Method
      </Text>

      <TouchableOpacity
        style={[
          styles.methodButton,
          paymentMethod === "card" && styles.selectedMethod,
        ]}
        onPress={() => setPaymentMethod("card")}
      >
        <Text style={styles.methodButtonText}>Card Payment (ATM)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.methodButton,
          paymentMethod === "momo" && styles.selectedMethod,
        ]}
        onPress={() => setPaymentMethod("momo")}
      >
        <Text style={styles.methodButtonText}>Mobile Money (MoMo)</Text>
      </TouchableOpacity>

      {paymentMethod === "card" && (
        <View style={styles.detailsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
      )}

      {paymentMethod === "momo" && (
        <View style={styles.detailsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Money Number"
            value={momoNumber}
            onChangeText={setMomoNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="MoMo Provider (e.g., MTN, Vodafone)"
            value={momoProvider}
            onChangeText={setMomoProvider}
          />
        </View>
      )}

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  methodButton: {
    backgroundColor: "#83CBDB",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedMethod: {
    borderColor: "#83CBDB",
    borderWidth: 3,
    backgroundColor: "white",
  },
  methodButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  payButton: {
    backgroundColor: "#83CBDB",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  payButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Payment;
