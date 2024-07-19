import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";

const Appointment = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");
  const [showServiceOptions, setShowServiceOptions] = useState(false);

  const services = [
    "Web Development",
    "Remote Desktop Solutions",
    "Social Media Marketing",
  ];

  const addAppointment = () => {
    if (!date || !time || !service) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }
    const newAppointment = {
      id: Date.now().toString(),
      date,
      time,
      service,
      note,
    };
    setAppointments([...appointments, newAppointment]);
    setModalVisible(false);
    resetForm();
  };

  const cancelAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const resetForm = () => {
    setDate("");
    setTime("");
    setService("");
    setNote("");
  };

  const renderAppointmentItem = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.appointmentText}>
        {item.date} at {item.time}
      </Text>
      <Text style={styles.appointmentText}>Service: {item.service}</Text>
      <Text style={styles.appointmentText}>Note: {item.note}</Text>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => cancelAppointment(item.id)}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Book New Appointment</Text>
      </TouchableOpacity>

      <FlatList
        data={appointments}
        renderItem={renderAppointmentItem}
        keyExtractor={(item) => item.id}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={setDate}
              value={date}
              placeholder="Date (YYYY-MM-DD)"
            />
            <TextInput
              style={styles.input}
              onChangeText={setTime}
              value={time}
              placeholder="Time (HH:MM AM/PM)"
            />
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowServiceOptions(!showServiceOptions)}
            >
              <Text>{service || "Select a service"}</Text>
            </TouchableOpacity>
            {showServiceOptions && (
              <View style={styles.serviceOptions}>
                {services.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.serviceOption}
                    onPress={() => {
                      setService(item);
                      setShowServiceOptions(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            <TextInput
              style={styles.input}
              onChangeText={setNote}
              value={note}
              placeholder="Additional notes"
              multiline
            />
            <TouchableOpacity
              style={styles.bookButton}
              onPress={addAppointment}
            >
              <Text style={styles.buttonText}>Save Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  bookButton: {
    backgroundColor: "#83CBDB",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  appointmentItem: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  appointmentText: {
    fontSize: 16,
    marginBottom: 5,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  paymentButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  serviceOptions: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  serviceOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default Appointment;
