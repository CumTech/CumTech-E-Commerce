import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WishList from '../screens/WishList'
import CarritoScreen from '../screens/CarritoScreen'
//import de tus screen

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
    <Stack.Navigator
    screenOptions={{ headerShown: false}}
    initialRouteName ='Carrito'
    >
        
        <Stack.Screen name="Carrito" component={CarritoScreen} />
        <Stack.Screen name="WishList" component={WishList} />
       
    </Stack.Navigator>
    );
}