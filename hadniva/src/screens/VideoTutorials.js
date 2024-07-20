// VideoTutorials.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const categories = [
  "All",
  "Digital Marketing",
  "Web Development",
  "Cyber Security",
];
const sampleVideos = [
  { id: "1", title: "Introduction to SEO", duration: "10:30" },
  { id: "2", title: "React Native Basics", duration: "15:45" },
  { id: "3", title: "Cyber Security Best Practices", duration: "12:20" },
  // Add more sample videos
];

const VideoTutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryTab,
        selectedCategory === item && styles.selectedCategoryTab,
      ]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderVideo = ({ item }) => (
    <TouchableOpacity style={styles.videoItem}>
      <View style={styles.videoThumbnail} />
      <Text style={styles.videoTitle}>{item.title}</Text>
      <Text style={styles.videoDuration}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Video Tutorials</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search videos"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        style={styles.categoryList}
      />
      <FlatList
        data={sampleVideos}
        renderItem={renderVideo}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchBar: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  categoryList: {
    marginBottom: 16,
  },
  categoryTab: {
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  selectedCategoryTab: {
    backgroundColor: "#a0a0a0",
  },
  videoItem: {
    flex: 1,
    margin: 4,
  },
  videoThumbnail: {
    backgroundColor: "#d0d0d0",
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
  videoTitle: {
    marginTop: 4,
    fontWeight: "bold",
  },
  videoDuration: {
    fontSize: 12,
    color: "#666",
  },
});

export default VideoTutorials;
