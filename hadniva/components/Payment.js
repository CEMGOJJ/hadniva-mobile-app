import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";
const Payment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PAYMENT METHODS</Text>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Choose Payment Option</Text>
      <Card style={styles.cardcontainer}>
        <View style={{ gap: 25 }}>
          <Card style={styles.cards}>
            <View style={{ flexDirection: "row", gap: 110 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 20,
                  fontSize: 18,
                }}
              >
                Debit / Credit Card
              </Text>
              <TouchableOpacity>
                <Image
                  source={require("./assets/main-qimg-f66d9bec6e852d5f94b3bb58cf86beff-removebg-preview 1.png")}
                />
              </TouchableOpacity>
            </View>
          </Card>
          <Card style={styles.cards}>
            <View style={{ flexDirection: "row", gap: 140 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 20,
                  fontSize: 18,
                }}
              >
                Bank Payment
              </Text>
              <TouchableOpacity>
                <Image
                  source={require("./assets/pngimg.com - bank_PNG25 1.png")}
                  style={{ marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </Card>
          <Card style={styles.cards}>
            <View style={{ flexDirection: "row", gap: 200 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 20,
                  fontSize: 18,
                }}
              >
                Pay Pal
              </Text>
              <TouchableOpacity>
                <Image
                  source={require("./assets/images-removebg-preview (1) 1.png")}
                  style={{ marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </Card>
          <Card style={styles.cards}>
            <View style={{ flexDirection: "row", gap: 200 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 20,
                  marginTop: 20,
                  fontSize: 18,
                }}
              >
                Momo
              </Text>
              <TouchableOpacity>
                <Image
                  source={require("./assets/download 2.png")}
                  style={{ marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </Card>
      <Card
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          marginLeft: 130,
          justifyContent: "center",
          marginTop: -30,
        }}
      >
        <TouchableOpacity
          onPress={() => Alert.alert("Hello,Do you want to call Hadniva?")}
        >
          <Image
            source={require("./assets/Group 45.png")}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      </Card>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require("./assets/Vector (2).png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("./assets/Group.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("./assets/Group (1).png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardcontainer: {
    height: 620,
    width: "100%",
    marginLeft: -5,
    justifyContent: "flex-start",
    backgroundColor: "#E0FFFF",
  },
  cards: {
    height: 80,
    width: "100%",
    backgroundColor: "#ADD8E6",
    marginLeft: -10,
    marginRight: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ADD8E6",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  },
});

export default Payment;
