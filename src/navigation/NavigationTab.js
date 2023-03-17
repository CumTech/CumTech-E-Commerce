import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from '../screens/LogInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import CarritoScreen from '../screens/CarritoScreen';
import WishListScreen from '../screens/WishListScreen';
import TestScreen from '../screens/TestScreen';
import HomeScreen from '../screens/HomeScreen'
import PaymentsScreen from '../screens/PaymentsScreen';



const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator

    screenOptions={{ headerShown: false}}>
       <Tab.Screen name="Payments" component={PaymentsScreen} />
       <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="LogIn" component={LogInScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="ProfileDetails" component={ProfileDetailsScreen} /> 
      <Tab.Screen name="Carrito" component={CarritoScreen} />
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
}