import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LogIn from '../screens/LogInScreen'
import Register from '../screens/RegisterScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function NavigationAuthTab() {
  return (
    <Tab.Navigator
    screenOptions={{ 
    headerShown: false,
    tabBarStyle: {
      display: 'none',
    },
    }}>
      <Tab.Screen name="LogIn" component={LogIn} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}