import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import styles from './PaymentsStyles';

const PaymentsCardsagregar = () => {
  return (
    <View style={styles.tarjetasAgregar}>
    <Text style={{fontSize:150, textAlign:'center', alignContent:'center',fontWeight: 'bold'}}>+</Text>
    </View>
  )
}

export default PaymentsCardsagregar;