import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  ActivityIndicator
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    bio: '',
    mediaImage: null,
    miniMediaImage: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = useCallback(async () => {
    setIsLoading(true);
    try {
      const keys = ['username', 'email', 'bio', 'mediaImage', 'miniMediaImage'];
      const values = await AsyncStorage.multiGet(keys);
      const loadedData = Object.fromEntries(values.filter(([_, value]) => value !== null));
      setProfileData(prevData => ({...prevData, ...loadedData}));
    } catch (error) {
      console.error('Error loading profile data:', error);
      Alert.alert('Error', 'Failed to load profile data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveProfileData = useCallback(async () => {
    if (!profileData.username.trim() || !profileData.email.trim()) {
      Alert.alert('Error', 'Username and email are required');
      return;
    }
    setIsLoading(true);
    try {
      const entries = Object.entries(profileData).filter(([_, value]) => value !== null && value !== undefined);
      await AsyncStorage.multiSet(entries);
      setIsEditing(false);
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      console.error('Error saving profile data:', error);
      Alert.alert('Error', 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  const pickImage = useCallback(async (isMediaImage) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: isMediaImage ? [16, 9] : [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setProfileData(prevData => ({
          ...prevData,
          [isMediaImage ? 'mediaImage' : 'miniMediaImage']: result.assets[0].uri
        }));
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image');
    }
  }, []);

  const handleInputChange = useCallback((key, value) => {
    setProfileData(prevData => ({...prevData, [key]: value}));
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#83CBDB" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => pickImage(true)} accessibilityLabel="Change cover photo">
          <Image 
            source={profileData.mediaImage ? { uri: profileData.mediaImage } : require('../asset/mediaImage.png')} 
            style={styles.profileImage} 
          />
        </TouchableOpacity>
        <View style={styles.editProfile}>
          <TouchableOpacity 
            onPress={() => isEditing ? saveProfileData() : setIsEditing(true)} 
            accessibilityLabel={isEditing ? "Save profile" : "Edit profile"}
            style={styles.editProfileButton}
          >
            <Text style={styles.editProfileButtonText}>{isEditing ? 'Save Profile' : 'Edit Profile'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => pickImage(false)} accessibilityLabel="Change profile picture">
          <Image 
            source={profileData.miniMediaImage ? { uri: profileData.miniMediaImage } : require('../asset/miniMediaImage.png')} 
            style={styles.elipseImg} 
          />
        </TouchableOpacity>
        <View style={styles.afterElipseImg}>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.username}
              onChangeText={(text) => handleInputChange('username', text)}
              placeholder="Username"
              accessibilityLabel="Edit username"
            />
          ) : (
            <Text style={styles.username}>{profileData.username}</Text>
          )}
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              placeholder="Email"
              accessibilityLabel="Edit email"
            />
          ) : (
            <Text>{profileData.email}</Text>
          )}
        </View>
        <View style={styles.afterjeniffer}>
          <Text style={styles.bioTitle}>Bio</Text>
          <TextInput
            style={styles.bioInput}
            multiline
            value={profileData.bio}
            onChangeText={(text) => handleInputChange('bio', text)}
            editable={isEditing}
            placeholder="Write something about yourself"
            accessibilityLabel="Edit bio"
          />
          <View style={{ height: 25 }} />
          <View style={styles.datecontainer}>
            <Icon name="calendar" size={24} color="#000" />
            <Text style={styles.dateText}>Joined</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: 200,
  },
  editProfile: {
    alignItems: 'flex-end',
    padding: 10,
  },
  editProfileButton: {
    backgroundColor: '#83CBDB',
    padding: 10,
    borderRadius: 5,
  },
  editProfileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  elipseImg: {
    position: 'absolute',
    left: 20,
    top: -100,
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  afterElipseImg: {
    marginTop: 45,
    padding: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  afterjeniffer: {
    marginTop: 20,
    padding: 10,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  datecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 10,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  bioInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    minHeight: 100,
  },
});

export default Profile;