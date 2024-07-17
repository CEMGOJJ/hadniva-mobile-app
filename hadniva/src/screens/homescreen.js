
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>HOME</Text>
        <View style={styles.placeholder} />
      </View>

      <Text style={styles.welcomeText}>Hi Cindarella !</Text>
      <Text style={styles.subText}>Welcome back</Text>

      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="gray" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search..."
        />
      </View>

      <Text style={styles.categoryTitle}>Top Categories</Text>
      <ScrollView horizontal style={styles.categoriesContainer}>
<View style={{flexDirection: 'row', gap: 10}}>
<View style={styles.categoriesView}>
  <Image source={require('./assets/Google Code.png')} />
  <Text style={{fontWeight: 'bold', marginTop: 35}}>Website Development</Text>

</View>
<View style={styles.categoriesView}>
<Image source={require('./assets/Media.png')} />
<Text style={{fontWeight: 'bold',marginTop: 35}}>Social Media Marketing</Text>
</View>
<View style={styles.categoriesView}>
<Image source={require('./assets/Cyber Security.png')} />
<Text style={{fontWeight: 'bold',marginTop: 35}}>Cyber Security</Text>
</View>
</View>
      </ScrollView>

      <View style={styles.supportIconContainer}>
        <Image source={require('./assets/Vector.png')} />
      </View>
      <View style={styles.bottomNav}>
      <Image source={require('./assets/Vector (1).png')} />
      <Image source={require('./assets/material-symbols-light_home-outline.png')} />
      <Image source={require('./assets/iconamoon_profile-thin.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
categoriesView: {
  height: 110,
  width: 140,
  backgroundColor: '#F0F0F0',
},
  supportIconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    padding: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ADD8E6',
    marginBottom: -20,
    width: '112%',
    marginLeft: -20,
  },
});

export default HomePage;