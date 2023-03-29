import { View, Image } from 'react-native'
import React from 'react'

const PaymentsCards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/card.png')} />
      </View>
    </View>
  )
}

export default PaymentsCards;

const styles = {
  container: {
    width: '100%',
    height: 203,
    margin: '5%',
    borderRadius: 12,
  },
  imageContainer: {
    width: '90%',
    height: 200,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
}