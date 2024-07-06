import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const SetProfilePicture = () => {
  return (
    <View style={styles.SetProfilePictureMainContainer}>
      <View style={styles.SetProfilePictureSubContainer1}>
        <View style={styles.SetProfilePictureSubContainer1A}></View>
        <View style={styles.SetProfilePictureSubContainer1B}>
          <View style={styles.TextBox1}>
            <Text style={styles.Text1}>Choose a profile picture</Text>
          </View>
          <View style={styles.TextBox2}></View>
        </View>
      </View>
      <View style={styles.SetProfilePictureSubContainer2}>
        <View style={styles.AB}>
          <View style={styles.SetProfilePictureSubContainer2A}>
            <ImageBackground
              source={require("../assets/picture1.png")}
              style={styles.Background}
            >
              <TouchableOpacity>
                <View style={styles.SetProfilePictureSubContainer2B}>
                  <Image
                    style={styles.cameraIcon}
                    source={require("../assets/camera.png")}
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </View>
      <View style={styles.SetProfilePictureSubContainer3}>
        <View style={styles.SetProfilePictureSubContainer3D}></View>
        <View style={styles.SetProfilePictureSubContainer3B}>
          <TouchableOpacity>
            <View style={styles.SetProfilePictureButton}>
              <Text style={styles.ButtonText}>NEXT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.SetProfilePictureSubContainer3A}>
          <Text style={styles.Recommend}>Skip for now</Text>
        </View>
        <View style={styles.SetProfilePictureSubContainer3C}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SetProfilePictureMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 40,
    alignSelf: "center",
  },
  SetProfilePictureSubContainer1: {
    width: 350,
    height: 140,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  SetProfilePictureSubContainer1A: {
    width: 346,
    height: 30,
  },
  SetProfilePictureSubContainer1B: {
    width: 346,
    height: 100,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  TextBox1: {
    width: 342,
    height: 30,
  },
  TextBox2: {
    width: 342,
    height: 50,
  },
  Text1: {
    fontSize: 24,
    fontWeight: "700",
  },
  Text2: {
    fontSize: 16,
    opacity: 0.5,
    fontWeight: "normal",
  },
  SetProfilePictureSubContainer2: {
    width: 350,
    height: 240,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    flexDirection: "row",
  },
  AB: {
    width: 250,
    height: 220,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    flexDirection: "row",
  },
  SetProfilePictureSubContainer2A: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 75,
    zIndex: -1,
    alignItems: "center",
    justifyContent: "center",
  },
  SetProfilePictureSubContainer2B: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    zIndex: 1,
    top: 40,
    right: -70,
    backgroundColor: "#ADE7EE",
    alignItems: "center",
    justifyContent: "center",
  },
  Background: {},
  cameraIcon: {
    width: 30,
    height: 30,
  },
  SetProfilePictureSubContainer3: {
    width: 350,
    height: 300,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  SetProfilePictureSubContainer3A: {
    width: 346,
    height: 30,

    alignItems: "center",
    justifyContent: "center",
  },
  Recommend: {
    fontSize: 16,
    opacity: 0.3,
  },
  SetProfilePictureSubContainer3B: {
    width: 346,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
  },
  SetProfilePictureButton: {
    borderWidth: 0.5,
    borderColor: "grey",
    height: 50,
    width: 280,
    backgroundColor: "#ADE7EE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: "700",
    opacity: 0.8,
  },
  SetProfilePictureSubContainer3C: {
    width: 346,
    height: 130,
  },
  SetProfilePictureSubContainer3D: {
    width: 346,
    height: 30,

    alignItems: "center",
    justifyContent: "center",
  },
});

export default SetProfilePicture;
