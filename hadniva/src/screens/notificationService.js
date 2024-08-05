/*
// src/services/notificationService.js
let notifications = [];

export const addNotification = (notification) => {
  notifications.push(notification);
};

export const getNotifications = () => {
  return notifications;
};

export const clearNotifications = () => {
  notifications = [];
};
*/
// src/services/notificationService.js
/*
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addNotification = async (notification) => {
  try {
    const existingNotifications = await getNotifications();
    const updatedNotifications = [...existingNotifications, notification];
    await AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    return true;
  } catch (error) {
    console.error('Error adding notification:', error);
    return false;
  }
};

export const getNotifications = async () => {
  try {
    const notificationsJson = await AsyncStorage.getItem('notifications');
    return notificationsJson ? JSON.parse(notificationsJson) : [];
  } catch (error) {
    console.error('Error getting notifications:', error);
    return [];
  }
};

export const clearNotifications = async () => {
  try {
    await AsyncStorage.removeItem('notifications');
    return true;
  } catch (error) {
    console.error('Error clearing notifications:', error);
    return false;
  }
};

export const removeNotification = async (id) => {
  try {
    const existingNotifications = await getNotifications();
    const updatedNotifications = existingNotifications.filter(notification => notification.id !== id);
    await AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    return true;
  } catch (error) {
    console.error('Error removing notification:', error);
    return false;
  }
};
*/
import AsyncStorage from '@react-native-async-storage/async-storage';

const MAX_NOTIFICATIONS = 100;

export const addNotification = async (notification) => {
  try {
    const existingNotifications = await getNotifications();
    const newNotification = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(), // Ensure we always store a valid ISO string
      ...notification,
    };
    const updatedNotifications = [newNotification, ...existingNotifications].slice(0, MAX_NOTIFICATIONS);
    await AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    return true;
  } catch (error) {
    console.error('Error adding notification:', error);
    return false;
  }
};

export const getNotifications = async () => {
  try {
    const notificationsJson = await AsyncStorage.getItem('notifications');
    return notificationsJson ? JSON.parse(notificationsJson) : [];
  } catch (error) {
    console.error('Error getting notifications:', error);
    return [];
  }
};

export const clearNotifications = async () => {
  try {
    await AsyncStorage.removeItem('notifications');
    return true;
  } catch (error) {
    console.error('Error clearing notifications:', error);
    return false;
  }
};

export const removeNotification = async (id) => {
  try {
    const existingNotifications = await getNotifications();
    const updatedNotifications = existingNotifications.filter(notification => notification.id !== id);
    await AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    return true;
  } catch (error) {
    console.error('Error removing notification:', error);
    return false;
  }
};