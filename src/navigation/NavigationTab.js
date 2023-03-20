import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import CarritoScreen from '../screens/CarritoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogInScreen from '../screens/LogInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import PaymentsScreen from '../screens/PaymentsScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import WishListScreen from '../screens/WishListScreen';
import ProfileDetailsAddressScreen from '../screens/ProfileDetailsAddressScreen';
import OrdersScreen from '../screens/OrdersScreen';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false}}>
      <Tab.Screen name="ProfileDetails" component={ProfileDetailsScreen} /> 
      <Tab.Screen name="Address" component={ProfileDetailsAddressScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Carrito" component={CarritoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

      <Tab.Screen name="LogIn" component={LogInScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Cards" component={PaymentsScreen} />

      <Tab.Screen name="WishList" component={WishListScreen} />

      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
}