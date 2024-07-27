import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../asset/NoNotification.png')} />
      <View style={styles.NoNotification}>
      <Icon name="notifications-off" size={30} color="black" />
      <Text style={styles.text}>You have No New Notifications</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'grey',
  },
  text: {
    fontSize: 18,
  },
NoNotification: {
  flexDirection: 'row',
  gap: 10
}
});

export default Notifications;
