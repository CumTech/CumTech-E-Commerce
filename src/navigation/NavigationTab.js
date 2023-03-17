import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestScreen from '../screens/TestScreen';
import HomeScreen from '../screens/HomeScreen'
import PaymentsScreen from '../screens/PaymentsScreen';

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Payments" component={PaymentsScreen} />
    </Tab.Navigator>
  );
}