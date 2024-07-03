import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfilePictureScreen = () => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a profile picture</Text>
      <TouchableOpacity style={styles.profilePictureContainer} >
        <Card style={{height: 280, width: 320, backgroundColor: '#fff', justifyContent: 'center', paddingLeft: 30,borderRadius: 70}}> 
        <Image
          source={require('./assets/Picture 1.gif') 
          }
          style={styles.profilePicture}
        />
        </Card>
        
        <View style={styles.cameraIconContainer}>
          <Text style={styles.cameraIcon}>📸</Text>
        </View>
      </TouchableOpacity>
      <Button mode="contained" onPress={() => {}} style={styles.button}>
        NEXT
      </Button>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profilePictureContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profilePicture: {
    width: 260,
    height: 260,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#b2ebf2',
    borderRadius: 20,
    padding: 5,
  },
  cameraIcon: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#b2ebf2',
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  skipText: {
    color: 'gray',
  },
});

export default ProfilePictureScreen;
