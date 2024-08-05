
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationItem from '../components/NotificationItem';
import { getNotifications, removeNotification } from '../screens/notificationService';
import { useFocusEffect } from '@react-navigation/native';

const Notifications = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchNotifications = useCallback(async () => {
    try {
      const fetchedNotifications = await getNotifications();
      setNotifications(fetchedNotifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  useFocusEffect(
    useCallback(() => {
      fetchNotifications();
    }, [fetchNotifications])
  );

  const handleNotificationPress = useCallback((notification) => {
    switch (notification.type) {
      case 'postLike':
      case 'comment':
        navigation.navigate('PostDetails', { postId: notification.data.postId });
        break;
      case 'eventInvite':
        navigation.navigate('EventDetails', { eventId: notification.data.eventId });
        break;
      case 'message':
        navigation.navigate('Chat', { senderName: notification.data.senderName });
        break;
      default:
        navigation.navigate('NotificationDetails', { notification });
    }
  }, [navigation]);

  const handleRemoveNotification = useCallback(async (id) => {
    const success = await removeNotification(id);
    if (success) {
      await fetchNotifications();
    }
  }, [fetchNotifications]);

  const handleNotificationAction = useCallback(async (action, data) => {
    console.log(`Action: ${action}`, data);
    await fetchNotifications();
  }, [fetchNotifications]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchNotifications();
    setRefreshing(false);
  }, [fetchNotifications]);

  if (notifications.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="notifications-off" size={50} color="#999" />
        <Text style={styles.emptyText}>You have no new notifications</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            notification={item}
            onPress={() => handleNotificationPress(item)}
            onRemove={() => handleRemoveNotification(item.id)}
            onAction={handleNotificationAction}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginTop: 10,
  },
});



export default Notifications;