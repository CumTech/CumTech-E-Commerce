// export default function ProfileScreen(pageName) {
//   const { navigation } = pageName;
//   const goToPage = (pageName) => {
//     navigation.navigate(pageName);
//   };

import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import SafeAreaAndroid from '../components/SafeViewAndroid';

export default function ProfileScreen(props) {
  const { navigation } = props;
  const goBack = () => {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={styles.padreDios}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{'<'}</Text>
            </View>
          </TouchableOpacity>
          {/* <Button title="<" onPress={goBack} color="#F77019" style={styles.button}/> */}
          <Text style={styles.title}>Hello!</Text>
        </View>
        <View style={styles.profileImages}>
          <Text>Profile Images</Text>
        </View>
        <View style={styles.buttonsProfile}>
          <Text>Buttons Profile</Text>
        </View>
        <View style={styles.orderDetails}>
          <Text>Order Details</Text>
        </View>
        <View style={styles.singOut}>
          <Text style={styles.singOutText}>Sing Out</Text>
        </View>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  padreDios: {
    flex: 1,
    backgroundColor: '#FAFAFAFA',
    flexDirection: 'column',
    },
  container: {
    flex: 1,
    backgroundColor: '#FAFA',

  },
  header: {
    flex: 1,
    backgroundColor: '#F77019',
  },
});