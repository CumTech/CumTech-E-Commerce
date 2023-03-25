import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrdersScreen() {
    return (
        <SafeAreaView>
            <View>
        <Header Title='ORDERS'/>
        </View>
        </SafeAreaView>
    )
}