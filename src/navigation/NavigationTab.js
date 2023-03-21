import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen';
import NavigationProfileStack from '../navigation/NavigationProfile';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Carrito" component={CartScreen} />
      <Tab.Screen name="NavigationProfileStack" component={NavigationProfileStack} />

    </Tab.Navigator>
  );
}

