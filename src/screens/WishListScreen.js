import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView,View, TouchableOpacity } from 'react-native';
import ProductWishlist from '../components/Products/ProductWishList';
import BackBotton from '../components/Buttons/BackButton';
import SafeAreaAndroid from '../components/SafeViewAndroid';

export default function WishListScreen(props) {
  const { navigation } = props;

  const payButton = () => {
    console.log('Shopping Button Pressed');
  }

  const goToDetails = () => {
      navigation.navigate('Carrito');
  }
  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButtonContainer}>
            <View style={styles.backButton}>
              <BackBotton/>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>WISH</Text>
          </View>
          <View style={styles.spaceToCenterContainer}>
          </View>
        </View>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <ProductWishlist/>
          <ProductWishlist/>
          <ProductWishlist/>
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
  //--------------------HEADER--------------------//
    header: {
      height: 80,
      flexDirection: 'row',                                             
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    backButtonContainer: {
      flex: 0.7,
      alignItems: 'center',
    },
    backButton: {
    },
    titleContainer: {
      flex: 1.1,
      alignItems: 'center',
    },
    title: { 
      fontFamily: 'coco-goose',
      fontSize: 48,
      fontWeight: 'bold',
    },
    spaceToCenterContainer: {
      flex: 0.7,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
    },
  //--------------------SCROLL--------------------//
    scrollContainer: {
      paddingHorizontal: '10%',
      paddingTop: '3%',
    },
  });
