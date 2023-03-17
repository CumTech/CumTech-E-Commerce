import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from './PaymentsStyles'

const PaymentsCards = () => {
  return (
    <View style={styles.tarjetas}>
      <Image
        style={styles.tarjetasI}
        source={require("../../../assets/images/tarjeta.jpg")}
      />
    </View>
  )
}

export default PaymentsCards;