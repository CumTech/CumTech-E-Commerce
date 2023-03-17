import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../screens/TestScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
    <Stack.Navigator
    screenOptions={{ headerShown: false}}
    >
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
        <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
    );
}