import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";

const Settings = () => {
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View
      style={[
        styles.SettingsMainContainer,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.SettingsSubContainer1}>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <View style={styles.SubContainer1A}>
            <View style={styles.One}>
              <View style={styles.OneBox}>
                <MaterialCommunityIcons
                  style={[styles.Image, { color: theme.text }]}
                  name="account-cog"
                  size={28}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={[styles.Name, { color: theme.text }]}>
                  Account
                </Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Account")}
                >
                  <Entypo
                    name="chevron-small-right"
                    size={24}
                    style={{ color: theme.text }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ChatSupport")}>
          <View style={styles.SubContainer1A}>
            <View style={styles.One}>
              <View style={styles.OneBox}>
                <MaterialIcons
                  style={[styles.Image, { color: theme.text }]}
                  name="support-agent"
                  size={28}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={[styles.Name, { color: theme.text }]}>
                  Chat Support
                </Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ChatSupport")}
                >
                  <Entypo
                    name="chevron-small-right"
                    size={24}
                    style={{ color: theme.text }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LogOut")}>
          <View style={styles.SubContainer1A}>
            <View style={styles.One}>
              <View style={styles.OneBox}>
                <MaterialIcons
                  style={[styles.Image, { color: theme.text }]}
                  name="logout"
                  size={28}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={[styles.Name, { color: theme.text }]}>Logout</Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity onPress={() => navigation.navigate("LogOut")}>
                  <Entypo
                    name="chevron-small-right"
                    size={24}
                    style={{ color: theme.text }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("BugReport")}>
          <View style={styles.SubContainer1A}>
            <View style={styles.One}>
              <View style={styles.OneBox}>
                <MaterialIcons
                  style={[styles.Image, { color: theme.text }]}
                  name="bug-report"
                  size={28}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={[styles.Name, { color: theme.text }]}>
                  Report a bug
                </Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("BugReport")}
                >
                  <Entypo
                    name="chevron-small-right"
                    size={24}
                    style={{ color: theme.text }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SendFeedback")}>
          <View style={styles.SubContainer1A}>
            <View style={styles.One}>
              <View style={styles.OneBox}>
                <MaterialIcons
                  style={[styles.Image, { color: theme.text }]}
                  name="feedback"
                  size={28}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={[styles.Name, { color: theme.text }]}>
                  Send Feedback
                </Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SendFeedback")}
                >
                  <Entypo
                    name="chevron-small-right"
                    size={24}
                    style={{ color: theme.text }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.SettingsSubContainer2}>
        <View style={styles.SubContainer2A}>
          <View style={styles.themeToggleContainer}>
            <Text style={[styles.themeText, { color: theme.text }]}>Theme</Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: "black", true: "white" }}
              thumbColor={isDarkMode ? "#83CBDB" : "#83CBDB"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SettingsMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
  },
  SettingsSubContainer1: {
    width: 350,
    height: 450,

    alignItems: "center",
    justifyContent: "space-evenly",
  },
  SubContainer1A: {
    width: 330,
    height: 70,
    borderWidth: 2,
    borderColor: "#83CBDB",
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  One: {
    width: 50,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
  },
  OneBox: {
    width: 40,
    height: 40,

    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
    paddingTop: 5,
  },
  Image: {
    width: 35,
    height: 35,
  },
  Two: {
    width: 200,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
  },
  TwoBox: {
    width: 200,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  Three: {
    width: 50,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  ThreeBox: {
    width: 50,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  Name: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },

  SettingsSubContainer2: {
    width: 350,
    height: 150,
    display: "flex",
    alignItems: "flex-end",
  },
  SubContainer2A: {
    width: 150,
    height: 50,
  },

  themeToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  themeText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Settings;
