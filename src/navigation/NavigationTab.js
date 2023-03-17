import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestScreen from '../screens/TestScreen';
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}