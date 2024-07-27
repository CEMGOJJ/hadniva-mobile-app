import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationDisplay = () => {
    return (
        <View style={StyleSheet.NotificationDisplay}>
            <Text>Notification Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    NotificationDisplay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
});

export default NotificationDisplay;