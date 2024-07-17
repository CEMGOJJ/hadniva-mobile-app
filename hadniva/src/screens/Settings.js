import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.SettingsMainContainer}>
      <View style={styles.SettingsSubContainer1}>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <View style={styles.SubContainer1A}>
            <View style={styles.One}>
              <View style={styles.OneBox}>
                <MaterialCommunityIcons
                  style={styles.Image}
                  name="account-cog"
                  size={30}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={styles.Name}>Account</Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Account")}
                >
                  <Entypo name="chevron-small-right" size={24} color="black" />
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
                  style={styles.Image}
                  name="support-agent"
                  size={30}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={styles.Name}>Chat Support</Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ChatSupport")}
                >
                  <Entypo name="chevron-small-right" size={24} color="black" />
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
                  style={styles.Image}
                  name="logout"
                  size={30}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={styles.Name}>Logout</Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity onPress={() => navigation.navigate("LogOut")}>
                  <Entypo name="chevron-small-right" size={24} color="black" />
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
                  style={styles.Image}
                  name="bug-report"
                  size={30}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={styles.Name}>Report a bug</Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("BugReport")}
                >
                  <Entypo name="chevron-small-right" size={24} color="black" />
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
                  style={styles.Image}
                  name="feedback"
                  size={30}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.Two}>
              <View style={styles.TwoBox}>
                <Text style={styles.Name}>Send Feedback</Text>
              </View>
            </View>
            <View style={styles.Three}>
              <View style={styles.ThreeBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SendFeedback")}
                >
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.SettingsSubContainer2}>
        <View style={styles.SubContainer2A}></View>
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
    borderWidth: 1,
    borderColor: "black",
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
    width: 50,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
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

  SettingsSubContainer2: {},
  SubContainer2A: {
    width: 350,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Settings;
