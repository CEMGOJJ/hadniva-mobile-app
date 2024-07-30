/*
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
*/
// src/screens/Notifications.js
/*
import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationItem from '../components/NotificationItem';
import { getNotifications } from '../services/notificationService';

const Notifications = ({ navigation }) => {
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Welcome to our app!', content: 'NotificationDisplay' },
    // Add more notifications as needed
  ]);

  const handleNotificationPress = (notification) => {
    if (notification.content === 'NotificationDisplay') {
      navigation.navigate('NotificationDisplay');
    } else {
      // Handle other types of notifications
    }
  };
  const Notifications = ({ navigation }) => {
    const [notifications, setNotifications] = useState([]);
  
    useEffect(() => {
      setNotifications(getNotifications());
    }, []);

  if (notifications.length === 0) {
    return (
      <View style={styles.container}>
        <Icon name="notifications-off" size={30} color="black" />
        <Text style={styles.text}>You have No New Notifications</Text>
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
            title={item.title}
            onPress={() => handleNotificationPress(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Notifications;
*//*
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationItem from '../components/NotificationItem';
import { getNotifications } from '..//screens/notificationService';

const Notifications = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const fetchedNotifications = await getNotifications();
      setNotifications(fetchedNotifications);
    };

    fetchNotifications();
  }, []);
  
  const handleNotificationPress = (notification) => {
    if (notification.content === 'NotificationDisplay') {
      navigation.navigate('NotificationDisplay');
    } else {
      // Handle other types of notifications
    }
  };

  if (notifications.length === 0) {
    return (
      <View style={styles.container}>
        <Icon name="notifications-off" size={30} color="black" />
        <Text style={styles.text}>You have No New Notifications</Text>
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
            title={item.title}
            onPress={() => handleNotificationPress(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Notifications;
*/
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList, RefreshControl, } from 'react-native';
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
    if (notification.content === 'NotificationDisplay') {
      navigation.navigate('NotificationDisplay', { notification });
    } else {
      // Handle other types of notifications
    }
  }, [navigation]);

  const handleRemoveNotification = useCallback(async (id) => {
    const success = await removeNotification(id);
    if (success) {
      await fetchNotifications();
    }
  }, [fetchNotifications]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchNotifications();
    setRefreshing(false);
  }, [fetchNotifications]);

  if (notifications.length === 0) {
    return (
      <View style={styles.container}>
        <Icon name="notifications-off" size={30} color="black" />
        <Text style={styles.text}>You have No New Notifications</Text>
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
            title={item.title}
            onPress={() => handleNotificationPress(item)}
            onRemove={() => handleRemoveNotification(item.id)}
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

// ... (styles remain unchanged)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
export default Notifications;