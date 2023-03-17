import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}
    initialRouteName="ProfileDetails"
    >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
    </Tab.Navigator>
  );
}