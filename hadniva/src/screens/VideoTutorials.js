// VideoTutorials.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import axios from "axios";

const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your actual YouTube API key

const categories = [
  "All",
  "Digital Marketing",
  "Web Development",
  "Cyber Security",
  "Remote Desktop Solutions",
];

const mockVideos = {
  All: [
    {
      id: "1",
      title: "Introduction to Tech",
      channelTitle: "TechGuru",
      thumbnail: "https://picsum.photos/200/112?random=1",
    },
    {
      id: "2",
      title: "The Future of Technology",
      channelTitle: "FutureTech",
      thumbnail: "https://picsum.photos/200/112?random=2",
    },
    // Add more mock videos for "All" category
  ],
  "Digital Marketing": [
    {
      id: "3",
      title: "SEO Basics",
      channelTitle: "MarketingPro",
      thumbnail: "https://picsum.photos/200/112?random=3",
    },
    {
      id: "4",
      title: "Social Media Strategy",
      channelTitle: "DigitalMarketer",
      thumbnail: "https://picsum.photos/200/112?random=4",
    },
    // Add more mock videos for "Digital Marketing" category
  ],
  "Web Development": [
    {
      id: "5",
      title: "HTML & CSS Fundamentals",
      channelTitle: "CodeMaster",
      thumbnail: "https://picsum.photos/200/112?random=5",
    },
    {
      id: "6",
      title: "JavaScript for Beginners",
      channelTitle: "WebDev101",
      thumbnail: "https://picsum.photos/200/112?random=6",
    },
    // Add more mock videos for "Web Development" category
  ],
  "Cyber Security": [
    {
      id: "7",
      title: "Introduction to Ethical Hacking",
      channelTitle: "SecurityNinja",
      thumbnail: "https://picsum.photos/200/112?random=7",
    },
    {
      id: "8",
      title: "Network Security Basics",
      channelTitle: "CyberDefender",
      thumbnail: "https://picsum.photos/200/112?random=8",
    },
    // Add more mock videos for "Cyber Security" category
  ],
  "Remote Desktop Solutions": [
    {
      id: "9",
      title: "Setting up Remote Desktop",
      channelTitle: "RemoteWorkPro",
      thumbnail: "https://picsum.photos/200/112?random=9",
    },
    {
      id: "10",
      title: "Best Remote Desktop Software",
      channelTitle: "TechReviewer",
      thumbnail: "https://picsum.photos/200/112?random=10",
    },
    // Add more mock videos for "Remote Desktop Solutions" category
  ],
};

const VideoTutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos(selectedCategory);
  }, [selectedCategory]);

  const fetchVideos = (category) => {
    setVideos(mockVideos[category]);
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryTab,
        selectedCategory === item && styles.selectedCategoryTab,
      ]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text
        style={
          selectedCategory === item
            ? styles.selectedCategoryText
            : styles.categoryText
        }
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderVideo = ({ item }) => (
    <TouchableOpacity
      style={styles.videoItem}
      onPress={() => console.log(`Video ${item.id} clicked`)}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.videoThumbnail} />
      <Text style={styles.videoTitle}>{item.title}</Text>
      <Text style={styles.channelTitle}>{item.channelTitle}</Text>
    </TouchableOpacity>
  );

  //   if (loading) {
  //     return (
  //       <View style={styles.centerContainer}>
  //         <ActivityIndicator size="large" color="#0000ff" />
  //       </View>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <View style={styles.centerContainer}>
  //         <Text>{error}</Text>
  //         <TouchableOpacity
  //           style={styles.retryButton}
  //           onPress={() => fetchVideos(selectedCategory)}
  //         >
  //           <Text>Retry</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Video Tutorials</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search videos"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={() => console.log("Search submitted:", searchQuery)}
      />
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        style={styles.categoryList}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={videos}
        renderItem={renderVideo}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.videoRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#007AFF",
  },
  categoryText: {
    color: "#000",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  videoRow: {
    justifyContent: "space-between",
  },
  videoItem: {
    width: "48%",
    marginBottom: 16,
  },
  videoThumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
  videoTitle: {
    marginTop: 4,
    fontWeight: "bold",
    fontSize: 12,
  },
  channelTitle: {
    fontSize: 10,
    color: "#666",
  },
  retryButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 16,
  },
});

export default VideoTutorials;
