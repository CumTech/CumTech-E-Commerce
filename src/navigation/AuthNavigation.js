import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screens/LogInScreen'
import Register from '../screens/RegisterScreen';


const Stack = createNativeStackNavigator();

export default function NavigationAuthTab() {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false}}>

      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>
  );
}