import 'react-native-gesture-handler';
import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import Cards from '../components/Cards';
import AddCardButton from '../components/Buttons/AddCardButton';
import Header from '../components/Header';


export default function PaymentsScreen() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Header Title='WALLET'/>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <Cards/>
            <AddCardButton/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
//--------------------------CONTAINER--------------------------//
    container: {
    height: '100%',
    backgroundColor: '#FFF7ED',
  },
//--------------------------SCROLL--------------------------//
  scrollContainer: {
    paddingLeft: '8%',
    paddingVertical: '3%',
    backgroundColor: '#FFF7ED',
  },
});

