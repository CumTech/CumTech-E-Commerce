import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import TestScreen from '../screens/TestScreen';
import LogInScreen from '../screens/LogInScreen'
import RegisterScreen from '../screens/RegisterScreen'


const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}
    initialRouteName="Profile"
    >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
        <Tab.Screen name="Test" component={TestScreen} />
        <Tab.Screen name="LogIn" component={LogInScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
}