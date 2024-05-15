import React from 'react';
import { View, StyleSheet } from 'react-native';
import VCard from './Vcard';

const App = () => {
  return (
    <View style={styles.container}>
      <VCard 
        name="Angelica C. Masayon"
        occupation="Freelancer"
        email="masayon.angelica.c@gmail.com"
        contactNo="09158980482"
        dob="April 19, 2001"
        location="Quezon City"
        profilePic={require('./masayon.JPG')}
        coverPhoto={require('./cp.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
});

export default App;