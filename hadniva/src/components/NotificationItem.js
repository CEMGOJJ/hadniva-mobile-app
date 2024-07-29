// src/components/NotificationItem.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NotificationItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
});

export default NotificationItem;