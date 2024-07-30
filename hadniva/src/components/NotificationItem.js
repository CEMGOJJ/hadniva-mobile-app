/*
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
*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationItem = ({ title, onPress, onRemove }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Icon name="close-circle" size={24} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  removeButton: {
    padding: 5,
  },
});

export default NotificationItem;