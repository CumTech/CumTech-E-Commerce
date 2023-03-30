import React from 'react'
import Header from '../components/Header';
import { View, SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import ProductOrder from './../components/Products/ProductOrder';


export default function OrdersScreen() {

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View style={styles.container}>
                <Header Title='ORDERS'/>
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                        <ProductOrder  />
                    </View>
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#FFF7ED',
    },
    scrollContainer: {
        padding: '5%',
    },
})