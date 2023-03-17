import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import  PaymentCards  from '../components/Payments/PaymentsCards';
import  PaymentCardsagregar  from '../components/Payments/PaymentsAgregar';
import styles from '../components/Payments/PaymentsStyles';

export default function PaymentsScreen() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.Head}>
        <View style={styles.Flecha}>
          <TouchableOpacity style={styles.button} onPress={console.log('boton pusheado')}>
          <Text>Flecha</Text>
          </TouchableOpacity>
          </View>
        <View style={styles.Logotipo}><Text style={{fontSize: 48, fontWeight: 'bold', fontWeight: '250'}}>CARDS</Text></View>
        
      </View>
      <ScrollView>
        <View style={styles.contenedorscroll}>
          <PaymentCards/>
          <PaymentCards/>
          <PaymentCardsagregar/>
        </View>
    </ScrollView>
      </SafeAreaView>
  );
}
