import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}
    >
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}