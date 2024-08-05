import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NotificationDetails = ({ route }) => {
  const { notification } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{notification.title}</Text>
      <Text style={styles.message}>{notification.message}</Text>
      <Text style={styles.timestamp}>
        {new Date(notification.timestamp).toLocaleString()}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  timestamp: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationDetails;