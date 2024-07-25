
import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../components/theme";

const { width } = Dimensions.get("window");

const Slideshow = ({ images }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    let scrollIndex = 0;
    const timerId = setInterval(() => {
      scrollIndex = (scrollIndex + 1) % images.length;
      flatListRef.current.scrollToIndex({
        index: scrollIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(timerId);
  }, [images]);

  const renderItem = ({ item }) => (
    <Image source={item} style={styles.slideImage} />
  );

  return (
    <View style={styles.slideContainer}>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.2, 0.8],
            extrapolate: "clamp",
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={index}
              style={[styles.indicator, { opacity, transform: [{ scale }] }]}
            />
          );
        })}
      </View>
    </View>
  );
};

const Home = () => {
  const navigation = useNavigation();
  const images = [
    require("../../assets/picture1.png"),
    require("../../assets/picture1.png"),
    require("../../assets/picture1.png"),
    require("../../assets/picture1.png"),
    require("../../assets/picture1.png"),
  ];

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const Black1 = require("../../assets/coding.png");
  const White1 = require("../../assets/coding1.png");

  const Black2 = require("../../assets/marketing.png");
  const White2 = require("../../assets/marketing1.png");

  const Black3 = require("../../assets/remoteDesktop.png");
  const White3 = require("../../assets/remoteDesktop1.png");

  return (
    <View
      style={[styles.HomeMainContainer, { backgroundColor: theme.background }]}
    >
      <View style={styles.HomeMainSubContainer1}>
        <View style={styles.HomeMainSubContainer1B}>
          <View style={styles.MiniSubContainer1B1}>
            <Text style={[styles.Text1, { color: theme.text }]}>
              Hi Jennifer {""}!
            </Text>
          </View>
          <View style={styles.MiniSubContainer1B2}>
            <Text style={[styles.Text2, { color: theme.text }]}>
              Welcome back
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.HomeMainSubContainer2}>
        <View style={styles.HomeMainSubContainer2A}>
          <TextInput
            style={[styles.TextInput, { color: theme.text }]}
            placeholder="Search for a service"
            placeholderTextColor={theme.placeholderTextColor}
          />
          <Feather
            style={styles.Magnifier}
            name="search"
            size={24}
            color="grey"
          />
        </View>
        <View
          style={[
            styles.HomeMainSubContainer2B,
            { borderColor: theme.borderColor },
          ]}
        >
          <Slideshow images={images} />
        </View>
      </View>
      <View style={styles.HomeMainSubContainer3}>
        <View style={styles.HomeMainSubContainer3A}>
          <Text style={[styles.Text3, { color: theme.text }]}>
            Our Services
          </Text>
        </View>
        <View style={styles.HomeMainSubContainer3B}>
          <View style={styles.HomeMainSubContainer3BB}>
            <TouchableOpacity onPress={() => navigation.navigate("Web")}>
              <View style={styles.Container3BMini1}>
                <View style={styles.One}>
                  <View style={styles.OneBox}>
                    <Image
                      style={styles.Image}
                      source={isDarkMode ? White1 : Black1}
                    />
                  </View>
                </View>
                <View style={styles.Two}>
                  <View style={styles.TwoBox}>
                    <Text style={[styles.ServiceName, { color: theme.text }]}>
                      Website Development
                    </Text>
                  </View>
                </View>
                <View style={styles.Three}>
                  <View style={styles.ThreeBox}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Web")}
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
            <TouchableOpacity onPress={() => navigation.navigate("Social")}>
              <View style={styles.Container3BMini2}>
                <View style={styles.One}>
                  <View style={styles.OneBox}>
                    <Image
                      style={styles.Image}
                      source={isDarkMode ? White2 : Black2}
                    />
                  </View>
                </View>
                <View style={styles.Two}>
                  <View style={styles.TwoBox}>
                    <Text style={[styles.ServiceName, { color: theme.text }]}>
                      Social Media Marketing
                    </Text>
                  </View>
                </View>
                <View style={styles.Three}>
                  <View style={styles.ThreeBox}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Social")}
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
            <TouchableOpacity onPress={() => navigation.navigate("Remote")}>
              <View style={styles.Container3BMini3}>
                <View style={styles.One}>
                  <View style={styles.OneBox}>
                    <Image
                      style={styles.Image}
                      source={isDarkMode ? White3 : Black3}
                    />
                  </View>
                </View>
                <View style={styles.Two}>
                  <View style={styles.TwoBox}>
                    <Text style={[styles.ServiceName, {
			color: theme.text }]}>
                      Remote Desktop Solutions
                    </Text>
                  </View>
                </View>
                <View style={styles.Three}>
                  <View style={styles.ThreeBox}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Remote")}
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  HomeMainSubContainer1: {
    width: 350,
    height: 55,
    padding: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  HomeMainSubContainer1B: {
    width: 346,
    height: 45,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 2,
  },
  MiniSubContainer1B1: {
    width: 342,
    height: 30,
    justifyContent: "center",
    padding: 2,
  },
  MiniSubContainer1B2: {
    width: 342,
    height: 25,
    justifyContent: "center",
    padding: 2,
  },
  Text1: {
    fontSize: 22,
    fontWeight: "900",
    opacity: 0.6,
  },
  Text2: {
    fontSize: 18,
    fontWeight: "500",
    opacity: 0.4,
  },
  Text3: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  HomeMainSubContainer2: {
    width: 350,
    height: 270,
    padding: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  HomeMainSubContainer2A: {
    width: 346,
    height: 60,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  TextInput: {
    width: 336,
    height: 50,
    borderWidth: 2,
    borderColor: "#83CBDB",
    padding: 2,
    borderRadius: 10,
    paddingLeft: 45,
    zIndex: -1,
    bottom: -12,
    fontSize: 17,
  },
  Magnifier: {
    zIndex: 1,
    top: -26,
    right: 145,
  },
  HomeMainSubContainer2B: {
    width: 334,
    height: 200,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  slideContainer: {
    height: "100%",
    width: "100%",
  },
  slideImage: {
    width: 340,
    height: 200,
    resizeMode: "cover",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    margin: 5,
  },
  HomeMainSubContainer3: {
    width: 350,
    height: 280,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 2,
  },
  HomeMainSubContainer3A: {
    width: 340,
    height: 30,
    borderColor: "black",
    justifyContent: "center",
  },
  HomeMainSubContainer3B: {
    width: 340,
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 2,
  },
  HomeMainSubContainer3BB: {
    width: "100%",
    height: 230,
    borderColor: "blue",
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "space-evenly",
  },
  Container3BMini1: {
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
  Container3BMini2: {
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
  Container3BMini3: {
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
  ServiceName: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Home;