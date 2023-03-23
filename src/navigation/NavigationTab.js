import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen';
import NavigationProfileStack from '../navigation/NavigationProfile';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#000',
        borderTopColor: 'transparent',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      tabBarActiveTintColor: '#E58A06',
      tabBarInactiveTintColor: '#fff',
    }}
      initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Carrito" component={CartScreen} options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: '#E58A06',
            color: '#fff',
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-cart" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="NavigationProfileStack" component={NavigationProfileStack} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

