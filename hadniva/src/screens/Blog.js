// Blog.js
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import * as rssParser from "react-native-rss-parser";
import moment from "moment";

const NEWS_SOURCES = [
  {
    name: "NASA Image of the Day",
    url: "https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss",
  },
  { name: "BBC News", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "CNN", url: "http://rss.cnn.com/rss/edition.rss" },
  { name: "The Guardian", url: "https://www.theguardian.com/world/rss" },
  { name: "TechCrunch", url: "http://feeds.feedburner.com/TechCrunch/" },
  { name: "The Verge", url: "https://www.theverge.com/rss/index.xml" },
  { name: "Wired", url: "https://www.wired.com/feed/rss" },
];

const extractImageUrl = (item) => {
  let imageUrl;
  if (item.enclosures && item.enclosures[0] && item.enclosures[0].url) {
    imageUrl = item.enclosures[0].url;
  } else {
    const imgRegex = /<img.*?src="(.*?)"/;
    const match = item.content ? item.content.match(imgRegex) : null;
    imageUrl =
      match && match[1]
        ? match[1]
        : "https://via.placeholder.com/300x200?text=No+Image";
  }
  console.log("Image URL:", imageUrl);
  return imageUrl;
};

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSource, setCurrentSource] = useState(NEWS_SOURCES[0]);
  const flatListRef = useRef(null);

  useEffect(() => {
    fetchNews();
  }, [currentSource]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching news from:", currentSource.url);
      const response = await axios.get(currentSource.url);
      console.log("RSS data received:", response.data.slice(0, 100) + "..."); // Log first 100 characters
      const parsed = await rssParser.parse(response.data);
      console.log("Parsed articles:", parsed.items.length);
      setArticles(parsed.items);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to fetch news: " + err.message);
      setLoading(false);
    }
  };

  const renderSourceItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.sourceButton,
        currentSource.name === item.name && styles.selectedSourceButton,
      ]}
      onPress={() => {
        setCurrentSource(item);
        if (flatListRef.current) {
          flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
        }
      }}
    >
      <Text
        style={[
          styles.sourceButtonText,
          currentSource.name === item.name && styles.selectedSourceButtonText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderSourceSelector = () => (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={NEWS_SOURCES}
      renderItem={renderSourceItem}
      keyExtractor={(item) => item.name}
      style={styles.sourceSelector}
      contentContainerStyle={styles.sourceSelectorContent}
    />
  );

  const renderFeaturedPost = () => {
    if (!articles || articles.length === 0) return null;
    const featuredArticle = articles[0];
    const imageUrl = extractImageUrl(featuredArticle);

    return (
      <TouchableOpacity
        style={styles.featuredPost}
        onPress={() => Linking.openURL(featuredArticle.links[0].url)}
      >
        <Image
          source={{ uri: imageUrl }}
          style={styles.featuredImage}
          resizeMode="cover"
        />
        <Text style={styles.featuredTitle}>{featuredArticle.title}</Text>
        <Text style={styles.featuredExcerpt}>
          {featuredArticle.description
            ? featuredArticle.description.slice(0, 100) + "..."
            : ""}
        </Text>
        <Text style={styles.featuredDate}>
          {moment(featuredArticle.published).fromNow()}
        </Text>
        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const renderPost = ({ item }) => {
    if (!item) return null;
    const imageUrl = extractImageUrl(item);

    return (
      <TouchableOpacity
        style={styles.postItem}
        onPress={() => Linking.openURL(item.links[0].url)}
      >
        <Image
          source={{ uri: imageUrl }}
          style={styles.postImage}
          resizeMode="cover"
        />
        <View style={styles.postContent}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.postExcerpt}>
            {item.description ? item.description.slice(0, 50) + "..." : ""}
          </Text>
          <Text style={styles.postDate}>
            {moment(item.published).fromNow()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchNews}>
          <Text>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest News</Text>
      {renderSourceSelector()}
      <FlatList
        ref={flatListRef}
        data={articles || []}
        renderItem={renderPost}
        keyExtractor={(item, index) => `${item.id || item.title || index}`}
        ListHeaderComponent={renderFeaturedPost}
        refreshing={loading}
        onRefresh={fetchNews}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
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
  sourceSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  sourceButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },

  featuredPost: {
    marginBottom: 24,
  },
  featuredImage: {
    aspectRatio: 16 / 9,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#f0f0f0",
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  featuredExcerpt: {
    marginBottom: 8,
  },
  featuredDate: {
    color: "#666",
    marginBottom: 8,
  },
  readMoreButton: {
    backgroundColor: "#83CBDB",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
  },
  readMoreText: {
    color: "#fff",
    fontWeight: "bold",
  },
  postItem: {
    flexDirection: "row",
    marginBottom: 16,
  },
  postImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "white",
  },
  postContent: {
    flex: 1,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  postExcerpt: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  postDate: {
    fontSize: 12,
    color: "#999",
  },
  retryButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 16,
  },
  sourceSelector: {
    marginBottom: 16,
  },
  sourceSelectorContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",

    height: 60,
  },
  sourceButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#83CBDB",
    marginRight: 10,
    minWidth: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  selectedSourceButton: {
    backgroundColor: "#83CBDB",
  },
  sourceButtonText: {
    fontWeight: "bold",
  },
  selectedSourceButtonText: {
    color: "#fff",
  },
});

export default Blog;
