import React, {useContext, useState} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import ProductWishlist from '../components/Products/ProductWishList';
import SafeAreaAndroid from '../components/SafeViewAndroid';
import Header from '../components/Header';
import { API_URL } from '../Config';
import { AuthContext } from '../Contexts/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function WishListScreen() {
  const {userInfo} = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      const intervalId = setInterval(() => {
        axios.get(`${API_URL}/wishlist`)
          .then(response => {
            setProducts(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          });
      }, 50000); // Actualizar cada 5 segundos
  
      return () => {
        clearInterval(intervalId);
      };
    }, []) 
  ); 
  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Header Title='WISHLIST'/>
        <ScrollView> 
          <View style={styles.scrollContainer}>
          {products.map(product => (
                <ProductWishlist 
                  id={product._id} 
                  name={product?.name} 
                  price={product?.price}
                  img = {product?.urlImage} 
                />
            ))}
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
