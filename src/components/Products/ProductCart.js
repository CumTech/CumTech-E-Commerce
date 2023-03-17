import {  Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles/ProductCartStyles';
import AddProductButton from '../Buttons/AddProductCart';
import MinusButton from '../Buttons/MinusCart';

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

            <View style ={[styles.amount]}>
            <AddProductButton/>
            <View style ={{flex:2,alignItems:'center',justifyContent: "center",  backgroundColor: 'white',height: '100%',borderRadius: 10, marginLeft: 5, marginRight: 5, elevation: 4,}}>
              <Text >1</Text>
            </View>
            <MinusButton/>
            </View>

          </View>

        </View>
    )
}

export default ProductCart;