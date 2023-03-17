import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogInScreen from '../screens/LogInScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createNativeStackNavigator();

export default function navigationStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}
