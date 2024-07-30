/*
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const NotificationDisplay = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.NotificationDisplay}>
            <Text>Dear Jennifer</Text>
            <Text> We are excited to announce a major update to our app!</Text>
            <Text> The latest version includes enhanced security features, a more intuitive user interface, and improved performance.</Text>
            <Text> Upgrade now to enjoy a seamless experience and new functionalities designed to boost your productivity.</Text>
            <Text> As always, your feedback is invaluable to us. </Text>
            <Text>If you encounter any issues or have suggestions, please reach out to our support team.</Text>
            <Text> Thank you for being a valued part of our community!</Text>
            <View>
        
        <Text>Best Regards</Text>
        <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>Hadniva!!</Text>
        </View>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    NotificationDisplay: {
      backgroundColor: 'grey',
      height: 600,
      width: '90%',
      borderRadius: 20,
      alignItems: 'left',
      padding: 20,
      flexDirection: 'colomn',
      gap: 20,

    },
});

export default NotificationDisplay;
*/
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const NotificationDisplay = ({ route }) => {
  const { notification } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.notificationDisplay}>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.message}>{notification.message}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDisplay: {
    backgroundColor: '#f0f0f0',
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NotificationDisplay;