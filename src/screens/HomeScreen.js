import 'react-native-gesture-handler';
import React, {useContext, useState, useEffect} from 'react';
import { ScrollView, View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import ProductHome from '../components/Products/ProductHome';
import BackButton from '../components/Buttons/BackButton';
import CartButton from '../components/Buttons/CartButton';
import Counter from '../components/Counter';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function App() {
  const [products, setProducts] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      axios.get('https://cum-tech-api.vercel.app/product')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },)
  );
    

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <View style={styles.backButton}>
            <BackButton/>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>SHOP</Text>
          </View>
        <View style={styles.cartContainer}>
          <View style={styles.cartButtonContainer}>
          <CartButton/>
          </View>
          <View style={styles.cartCounterContainer}>
            <Counter/>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.scrollContainer}>
        {products.map(product => (
                <ProductHome 
                  key={product._id} 
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
  container: {
    height: '100%',
    backgroundColor: '#FFF7ED',
  },
  header: {
    backgroundColor: '#FFF7ED',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  backButtonContainer:{
    opacity: 0,
    flex: 0.7,
    alignItems: 'center',
  },
  backButton:{
  },
  titleContainer:{
    flex: 1.1,
    alignItems: 'center',

  },
  titleText:{
    fontFamily: 'coco-goose',
    fontSize: 40,
  },
  cartContainer:{
    flex: 0.7,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cartButtonContainer:{
    flex: 0.41,

  },
  cartCounterContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
  },
  scrollContainer: {
    backgroundColor: '#FFF7ED', //Color de fondo de la ScrollView
    flexDirection: 'row', //Para que los elementos se distribuyan en una sola fila
    flexWrap: 'wrap', //Para que los elementos se distribuyan de manera uniforme
    justifyContent: 'space-between', //Para que los elementos se distribuyan de manera uniforme
    paddingHorizontal: '3%', //Para que la ScrollView tenga un espacio lateral para hacer scroll
    paddingTop: 10, //Para que la ScrollView tenga un espacio superior para hacer scroll
    paddingBottom: 10, //Para que la ScrollView tenga un espacio inferior para hacer scroll
  },

  containerCartButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    elevation: 6,
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '70%',
    width: '100%',
  },
});