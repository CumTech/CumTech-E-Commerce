import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView,View, TouchableOpacity } from 'react-native';
import ProductCart from '../components/Products/ProductCart'
import Header from '../components/Header';
import SafeAreaAndroid from '../components/SafeViewAndroid';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const payButton = () => {
    console.log('Shopping Button Pressed');
  }

  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={styles.container}>
      <Header Title='CART'/>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
        </View>
      </ScrollView>
      <View style = {styles.shipmentDetailsContainer}>
        <LinearGradient 
          colors={['#FFFFFF', '#FFF7ED']}
          style={ styles.shipmentDetailsBG}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={styles.shipmentDetailsContentContainer}>
            <View style={styles.shipmentDetailsContentLeftContainer}>
              <View style={styles.shipmentDetailsTitle}>
                <Text style={styles.shipmentDetailsTitleText}>Shipment</Text>
                <Text style={styles.shipmentDetailsTitleText}>Details:</Text>
              </View>
              <View style={styles.shipmentDetailsAddress}>
                <Text style={styles.shipmentDetailsAddressText}>3064 Alfred Drive</Text>
                <Text style={styles.shipmentDetailsAddressText}>New York, New York(NY)</Text>
                <Text style={styles.shipmentDetailsAddressText}>10005</Text>
              </View>
            </View>
            <View style={styles.shipmentDetailsContentRightContainer}>
              <View style={styles.shipmentDetailsPriceContainer}>
                <LinearGradient
                  colors={['#F77019', '#FAD25C']}
                  style={styles.shipmentDetailsPriceBG}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                >
                  <Text style={styles.shipmentDetailsPriceTextMoneda}>US$</Text>
                  <Text style={styles.shipmentDetailsPriceText}>19.99</Text>
                </LinearGradient>
              </View>
              <View style={styles.shipmentDetailsButton}>
                <LinearGradient
                  colors={['#F71919', '#FFA553']}
                  style={styles.shipmentDetailsButtonBG}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                >
                  <TouchableOpacity style={styles.shipmentDetailsButtonTouchable} onPress={payButton}>
                    <Text style={styles.shipmentDetailsButtonTouchableText}>Buy</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
    </SafeAreaView>
  );
};

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
    paddingBottom: 170,
  },
//--------------------SHIPMENT DETAILS--------------------//
  shipmentDetailsContainer: {
    position: 'absolute',
    height: '20%',
    width: '100%',
    top: '78%',
    alignItems: 'center',
  },
  shipmentDetailsBG: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
    elevation: 6, 
  },
//--------------------SHIPMENT DETAILS CONTENT--------------------//
  shipmentDetailsContentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
//--------------------SHIPMENT DETAILS CONTENT LEFT--------------------//
  shipmentDetailsContentLeftContainer: {
    flex: 1.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  shipmentDetailsTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  shipmentDetailsTitleText: {
    fontFamily: 'coco-goose',
    fontSize: 16,
    textAlign: 'center',
  },
  shipmentDetailsAddress: {
    flex: 1,
    alignItems: 'center',
  },
  shipmentDetailsAddressText: {
    fontFamily: 'monda',
    fontSize: 15,
    textAlign: 'center',
  },
//--------------------SHIPMENT DETAILS CONTENT RIGHT--------------------//
  shipmentDetailsContentRightContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  shipmentDetailsPriceContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shipmentDetailsPriceBG: {
    width: '80%',
    height: '60%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shipmentDetailsPriceTextMoneda: {
    fontFamily: 'monda',
    fontSize: 13,
  },
  shipmentDetailsPriceText: {
    fontFamily: 'monda',
    fontSize: 16,
    textAlign: 'center',
  },
  shipmentDetailsButton: {
    flex: 0.5,
    alignItems: 'center',
  },
  shipmentDetailsButtonBG: {
    width: '80%',
    height: '60%',
    top: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shipmentDetailsButtonTouchableText: {
    fontFamily: 'coco-goose',
    fontSize: 16,
    textAlign: 'center',
  },
});