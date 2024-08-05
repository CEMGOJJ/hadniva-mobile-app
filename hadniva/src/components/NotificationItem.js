
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { format, isValid, parseISO } from 'date-fns';

const NotificationItem = ({ notification, onPress, onRemove, onAction }) => {
  const { title, message, timestamp, icon, type, data } = notification;

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = typeof timestamp === 'string' ? parseISO(timestamp) : new Date(timestamp);
    return isValid(date) ? format(date, 'MMM d, h:mm a') : 'Invalid date';
  };

  const renderActionButton = () => {
    switch (type) {
      case 'friendRequest':
        return (
          <TouchableOpacity style={styles.actionButton} onPress={() => onAction('accept', data)}>
            <Text style={styles.actionButtonText}>Accept</Text>
          </TouchableOpacity>
        );
      case 'eventInvite':
      case 'groupInvite':
        return (
          <View style={styles.actionButtonGroup}>
            <TouchableOpacity style={styles.actionButton} onPress={() => onAction('accept', data)}>
              <Text style={styles.actionButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => onAction('decline', data)}>
              <Text style={styles.actionButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    } 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={onPress}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message} numberOfLines={2}>{message}</Text>
          <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
        </View>
      </TouchableOpacity>
      {renderActionButton()}
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Icon name="close-circle" size={24} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );
};

// ... (keep the existing styles)
const styles = StyleSheet.create({
  // ... (keep existing styles)
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#666',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  removeButton: {
    padding: 5,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  actionButtonGroup: {
    flexDirection: 'row',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default NotificationItem;