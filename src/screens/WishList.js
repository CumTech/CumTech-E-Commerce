import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function WishList() {
  return (
    <View >
        <View style = {styles.top}>
        <TouchableOpacity style = {styles.top}>
          <Text>back</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
top:{
    width: 50, 
    height: 50, 
    marginTop: 10, 
    backgroundColor: 'orange', 
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center',   
    elevation:5
}

})