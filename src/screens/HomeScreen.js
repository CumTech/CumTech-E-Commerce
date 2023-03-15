import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  const { navigate } = navigation;
  const goToProfile = () => {
    navigate('Profile');
  }
  const goToCart = () => {
    navigate('Cart');
  }
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <View style={styles.button}>
        <Button title="Go to Profile" onPress={goToProfile} />
        <Button title="Go to Cart" onPress={goToCart} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFA',
  },
  button: {
    borderBottomColor: 'black',
  }
});