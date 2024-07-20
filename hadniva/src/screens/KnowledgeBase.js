// KnowledgeBase.js
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
  "Getting Started",
  "Digital Marketing",
  "Web Development",
  "Cyber Security",
  "FAQs",
];
const sampleArticles = [
  { id: "1", title: "Introduction to Digital Marketing" },
  { id: "2", title: "Web Development Best Practices" },
  { id: "3", title: "Cyber Security Fundamentals" },
  // Add more sample articles
];

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryButton}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderArticle = ({ item }) => (
    <TouchableOpacity style={styles.articleItem}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Knowledge Base</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search articles and FAQs"
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
        data={sampleArticles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
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
  categoryButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  articleItem: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
});

export default KnowledgeBase;
