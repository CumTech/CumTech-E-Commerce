import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestScreen from '../screens/TestScreen';
import LogInScreen from '../screens/LogInScreen'
import RegisterScreen from '../screens/RegisterScreen'
const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Test" component={TestScreen} />
        <Tab.Screen name="LogIn" component={LogInScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
}