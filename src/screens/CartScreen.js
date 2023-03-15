import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CartScreen(props) {
  const { navigation } = props;
  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});