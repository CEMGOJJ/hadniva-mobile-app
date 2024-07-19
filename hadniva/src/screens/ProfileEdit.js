import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";

const mockUser = {
  coverPhoto: require("../../assets/picture1.png"),
  profilePhoto: require("../../assets/picture1.png"),
  name: "John Doe",
  bio: "Front-end developer passionate about creating beautiful user interfaces",
  email: "johndoe@example.com",
  joinDate: "2023-01-01",
};

const ProfileEdit = ({ route }) => {
  const { user } = route.params;
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto);
  const [coverPhoto, setCoverPhoto] = useState(user.coverPhoto);

  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const pickImage = async (isProfilePhoto) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: isProfilePhoto ? [1, 1] : [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      if (isProfilePhoto) {
        setProfilePhoto(result.uri);
      } else {
        setCoverPhoto(result.uri);
      }
    }
  };

  const handleSave = () => {
    // Here you would typically send the updated info to your backend
    // For now, we'll just go back to the profile page
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity onPress={() => pickImage(false)}>
        <Image source={{ uri: coverPhoto }} style={styles.coverPhoto} />
        <Text style={[styles.changePhotoText, { color: theme.text }]}>
          Change Cover Photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pickImage(true)}>
        <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
        <Text style={[styles.changePhotoText, { color: theme.text }]}>
          Change Profile Photo
        </Text>
      </TouchableOpacity>
      <TextInput
        style={[
          styles.input,
          { color: theme.text, borderColor: theme.borderColor },
        ]}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor={theme.placeholderTextColor}
      />
      <TextInput
        style={[
          styles.input,
          styles.bioInput,
          { color: theme.text, borderColor: theme.borderColor },
        ]}
        value={bio}
        onChangeText={setBio}
        placeholder="Bio"
        placeholderTextColor={theme.placeholderTextColor}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  coverPhoto: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 10,
  },
  changePhotoText: {
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  bioInput: {
    height: 100,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#83CBDB",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileEdit;
