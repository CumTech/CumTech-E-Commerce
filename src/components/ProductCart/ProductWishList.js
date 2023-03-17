import {  Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './ProductWishListStyles';
// import CancelButton from '../BackButton/CancelButton';
// import AddCartButton from '../BackButton/AddCart';

const ProductCart = () => {
  return (
    <View style = {styles.product}>
        <View style = {[styles.imgContainer]}>
          <Image  style = {[styles.img]}source={require('../../../assets/images/aguacate.png')}/>
          </View>
          <View style = {styles.productInformation}>
            
            <View style= {[styles.Producttext,{backgroundColor: 'white', borderRadius: 10, margin: 5,  elevation: 4,}]}>
              <Text>Aguacates</Text>
            </View>
            
            <View style ={[styles.price,{backgroundColor: 'white', borderRadius: 10, margin: 5, elevation: 4,}]}>
              <Text>USD$19.99</Text>
            </View>

            <View style ={[styles.buttoms]}>
           {/* <CancelButton/>
           <AddCartButton/> */}
            </View>

          </View>

        </View>
    )
}

export default ProductCart;