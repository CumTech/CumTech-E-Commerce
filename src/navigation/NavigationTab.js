import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
}