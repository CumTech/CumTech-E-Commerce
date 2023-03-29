import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import ProductWishlist from '../components/Products/ProductWishList';
import SafeAreaAndroid from '../components/SafeViewAndroid';
import Header from '../components/Header';

export default function WishListScreen() {
  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Header Title='WISHLIST'/>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <ProductWishlist/>
            <ProductWishlist/>
            <ProductWishlist/>
            <ProductWishlist/>
            <ProductWishlist/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  //--------------------CONTAINER PRINCIPAL--------------------//
    container: {
      height: '100%',
      backgroundColor: '#FFF7ED',
    },
  //--------------------SCROLL--------------------//
    scrollContainer: {
      paddingHorizontal: '10%',
      paddingTop: '3%',
    },
  });
