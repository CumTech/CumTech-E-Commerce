import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from '../screens/LogInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import CarritoScreen from '../screens/CarritoScreen';
import WishListScreen from '../screens/WishListScreen';
import TestScreen from '../screens/TestScreen';



const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false}} 
      initialRouteName="LogIn"
    >
      <Tab.Screen name="LogIn" component={LogInScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="ProfileDetails" component={ProfileDetailsScreen} />        <Tab.Screen name="Carrito" component={CarritoScreen} />
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
}