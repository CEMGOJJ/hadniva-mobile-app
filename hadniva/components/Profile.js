import React from "react";
import { View, StyleSheet, Text,SafeAreaView, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Profile = () => {
    const date = new Date().toLocaleDateString();
  return (
    <SafeAreaView>
      <View>
      <Image source={require('../assets/picture1.png')} style={styles.profileImage}/>
     <View style={styles.editProfile}>
     <Text style={styles.editProfileText}>Edit Profile</Text>
     </View>
     <Image source={require('../assets/Ellipse 9.png')} style={styles.elipseImg}/>
     </View>
     <View style={styles.afterElipseImg}>
     <Text style={styles.editProfileText}>Jennifer Akwele</Text>
     <Text>jenbaddie78@outlook.com</Text>
     </View>
     <View style={styles.afterjeniffer}>
      <Text style={styles.editProfileText}>Bio</Text>
      <Text>UDKJAC IHAJBCIOAJ DCICHQDJDC HVGSD UUUHVDDV</Text> 
       <Text>UGDUADA HAG GG U G AUCU GASH XGX ffff thehjjh</Text>
      <Text>HAKA BVD ADDJDBVC DHGAUhf hkehfkghf hgdjds hfgsjg hf</Text>
      <Text>hello hello hello sweetie hello daddy</Text>
      <Text>look whose coming in, straight from the jungle</Text>
<View style={{height: 25}}/>
      <View style={styles.datecontainer}>
            <Icon name="calendar" size={24} color="#000" />
            <Text style={styles.dateText}>Joined</Text>
            <Text style={styles.dateText}>{date}</Text>
        </View>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: '100%'
  },
  editProfile: {
  alignItems: 'flex-end',
  padding: 10,
  },
  editProfileText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  elipseImg: {
    position: 'absolute',
    left: 20,
    top: 180,
    width: 130,
    height: 130,
  },
  afterElipseImg: {
    top: 45,
    padding: 10,
  },
  afterjeniffer: {
    top: 40,
    padding: 10,
  },
   datecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        marginLeft: 10,
        fontSize: 18,
    },
});

export default Profile;
