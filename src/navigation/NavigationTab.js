import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestScreen from '../screens/TestScreen';
import CarritoScreen from '../screens/CarritoScreen';
import WishList from '../screens/WishList';

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Carrito" component={CarritoScreen} />
        <Tab.Screen name="WishList" component={WishList} />
       
    </Tab.Navigator>
  );
}