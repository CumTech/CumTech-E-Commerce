import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import BackBotton from '../components/Buttons/BackButton';
import Cards from '../components/Cards';
import AddCardButton from '../components/Buttons/AddCardButton';
import Header from '../components/Header';

// import styles from '../components/styles/PaymentsStyles';

export default function PaymentsScreen() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
      <Header Title='WALLET'/>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
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
//--------------------------HEADER--------------------------//
  header: {
    height: 80,
    flexDirection: 'row',                                             
    justifyContent: 'center',
      alignItems: 'center',
  },
  backButtonContainer: {
    flex: 0.7,
    alignItems: 'center',
  },
  backButton: {
  },
  titleContainer: {
    flex: 1.1,
    alignItems: 'center',
  },
  title: { 
    fontFamily: 'coco-goose',
    fontSize: 48,
    color: '#000000',
  },
  spaceToCenterContainer: {
    flex: 0.7,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
//--------------------------SCROLL--------------------------//
  scrollContainer: {
    paddingLeft: '8%',
    paddingVertical: '3%',
    backgroundColor: '#FFF7ED',
  },
});

