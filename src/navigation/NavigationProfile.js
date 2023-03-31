import React from 'react';
import { View, StyleSheet,  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/ProfileScreen'
import ProfileDetails from '../screens/ProfileDetailsScreen';
import ProfileAddress from '../screens/ProfileDetailsAddressScreen';
import WishList from '../screens/WishListScreen';
import Orders from '../screens/OrdersScreen'
import Payment from '../screens/PaymentsScreen'

const Stack = createNativeStackNavigator();

export default function NavigationProfileStack() {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{ headerShown: false}}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="ProfileAddress" component={ProfileAddress} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7ED',
  },
})