import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";

// Mock user data
const mockUser = {
  coverPhoto: require("../../assets/picture1.png"),
  profilePhoto: require("../../assets/picture1.png"),
  name: "John Doe",
  bio: "Front-end developer passionate about creating beautiful user interfaces",
  email: "johndoe@example.com",
  joinDate: "2023-01-01",
};

const Profile = ({ user }) => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // if (!user) {
  //   return (
  //     <View
  //       style={[
  //         styles.container,
  //         {
  //           backgroundColor: theme.background,
  //           justifyContent: "center",
  //           alignItems: "center",
  //         },
  //       ]}
  //     >
  //       <ActivityIndicator size="large" color={theme.primaryColor} />
  //       <Text style={[styles.loadingText, { color: theme.text }]}>
  //         Loading profile...
  //       </Text>
  //     </View>
  //   );
  // }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={mockUser.coverPhoto} style={styles.coverPhoto} />
      <View style={styles.profileInfoContainer}>
        <Image source={mockUser.profilePhoto} style={styles.profilePhoto} />
        <Text style={[styles.name, { color: theme.text }]}>
          {mockUser.name}
        </Text>
        <Text style={[styles.bio, { color: theme.secondaryText }]}>
          {mockUser.bio}
        </Text>
        <Text style={[styles.email, { color: theme.secondaryText }]}>
          {mockUser.email}
        </Text>
        <Text style={[styles.joinDate, { color: theme.secondaryText }]}>
          Joined {formatDate(mockUser.joinDate)}
        </Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate(
              "ProfileEdit",

              { user: mockUser }
            )
          }
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  coverPhoto: {
    width: "100%",
    height: 200,
  },
  profileInfoContainer: {
    alignItems: "center",
    padding: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: -60,
    borderWidth: 3,
    borderColor: "white",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    marginTop: 5,
  },
  joinDate: {
    fontSize: 14,
    marginTop: 5,
  },
  editButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#83CBDB",
    borderRadius: 5,
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Profile;
