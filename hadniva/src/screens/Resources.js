// ResourceCenter.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ResourceCard = ({ title, icon, description, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Icon name={icon} size={24} color="#000" />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </TouchableOpacity>
);

const Resources = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resource Center</Text>
      <ResourceCard
        title="Knowledge Base"
        icon="book"
        description="Access articles, tutorials, and FAQs"
        onPress={() => navigation.navigate("KnowledgeBase")}
      />
      <ResourceCard
        title="Video Tutorials"
        icon="play-circle-outline"
        description="Watch tutorials on digital marketing, web development, and cyber security"
        onPress={() => navigation.navigate("VideoTutorials")}
      />
      <ResourceCard
        title="Blog"
        icon="create"
        description="Read our latest blog posts"
        onPress={() => navigation.navigate("Blog")}
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  cardDescription: {
    marginTop: 4,
  },
});

export default Resources;
