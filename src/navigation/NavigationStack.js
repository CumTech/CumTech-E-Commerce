import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../screens/TestScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createBottomTabNavigator();

export default function NavigationStack() {
    return (
    <Stack.Navigator
    screenOptions={{ headerShown: false}}
    >
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
    );
}