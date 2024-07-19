import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SocialMediaMarketing = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const navigation = useNavigation();

  const handleBookings = () => {
    navigation.navigate("Appointment");
  };

  return (
    <View
      style={[
        styles.SocialMediaMarketingMainContainer,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.SocialMediaMarketingSubContainer1}>
        <View style={styles.SocialMediaMarketingSubContainer1A}>
          <Text style={[styles.Title, { color: theme.text }]}>
            Social Media Marketing
          </Text>
        </View>
        <View style={styles.SocialMediaMarketingSubContainer1B}>
          <Text style={[styles.Description, { color: theme.text }]}>
            For social media marketing, we offer the following services:
          </Text>
        </View>
      </View>
      <View style={styles.SocialMediaMarketingSubContainer2}>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            1. Social Media Strategy and Planning
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            2. Content Creation and Management
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            3. Social Media Advertising
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            4. Influencer Marketing
          </Text>
        </View>
        <View style={styles.ListOfServices}>
          <Text style={[styles.Description, { color: theme.text }]}>
            5. Analytics and Reporting
          </Text>
        </View>
      </View>
      <View style={styles.SocialMediaMarketingSubContainer3}>
        <CustomButton title="Book appointment" onPress={handleBookings} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SocialMediaMarketingMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    backgroundColor: "white",

    alignSelf: "center",
  },
  SocialMediaMarketingSubContainer1: {
    width: 350,
    height: 100,
    padding: 2,

    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  SocialMediaMarketingSubContainer1A: {
    width: 346,
    height: 40,
    padding: 2,

    justifyContent: "center",
  },
  Title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
  },
  Description: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
  },
  SocialMediaMarketingSubContainer1B: {
    width: 346,
    height: 45,
    padding: 2,

    justifyContent: "center",
  },
  SocialMediaMarketingSubContainer2: {
    width: 350,
    height: 380,
    padding: 2,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ListOfServices: {
    width: 342,
    height: 50,
    padding: 2,

    borderRadius: 10,
    justifyContent: "center",
  },
  SocialMediaMarketingSubContainer3: {
    width: 350,
    height: 100,
    padding: 2,

    alignItems: "center",
    justifyContent: "center",
  },
});

export default SocialMediaMarketing;
