import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import BackBotton from '../components/Buttons/BackButton';
import  PaymentCards  from '../components/PaymentsCards';
import  PaymentCardsagregar  from '../components/Buttons/PaymentsAgregar';
// import styles from '../components/styles/PaymentsStyles';

export default function PaymentsScreen() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButtonContainer}>
            <View style={styles.backButton}>
              <BackBotton/>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>CARDS</Text>
          </View>
          <View style={styles.spaceToCenterContainer}>
          </View>
        </View>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <PaymentCards/>
            <PaymentCards/>
            <PaymentCards/>
            <PaymentCards/>
            <PaymentCards/>
            <PaymentCards/>
            <PaymentCardsagregar />
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
    backgroundColor: '#FFF7ED', //Color de fondo de la ScrollView
    flexDirection: 'row', //Para que los elementos se distribuyan en una sola fila
    flexWrap: 'wrap', //Para que los elementos se distribuyan de manera uniforme
    justifyContent: 'space-between', //Para que los elementos se distribuyan de manera uniforme
    paddingHorizontal: '3%', //Para que la ScrollView tenga un espacio lateral para hacer scroll
    paddingTop: '1%', //Para que la ScrollView tenga un espacio superior para hacer scroll
    paddingBottom: '1%', //Para que la ScrollView tenga un espacio inferior para hacer scroll
  },
});

