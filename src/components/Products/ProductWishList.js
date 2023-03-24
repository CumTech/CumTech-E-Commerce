import {  Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles/ProductWishListStyles';
import AddCartWishlistButton from '../Buttons/AddCartWishlistButton';
import QuitButton from '../Buttons/QuitButton';
import MinusButton from '../Buttons/MinusButton';

const ProductCart = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.imageProductContainer}>
                <Image resizeMode="contain" style = {styles.image}source={require('../../../assets/images/avocado.png')}/>
            </View>
            <View style = {styles.informationContainer}>
                <View style={styles.titleProductContainer}>
                    <View style={styles.titleProductTextContainer}>
                        <Text style={styles.titleProductText}>Aguacates</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.priceTextContainer}>
                            <Text style={styles.priceTextDollars}>US$</Text>
                            <Text style={styles.priceTextNumber}>1.99</Text>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <View style={styles.ButtonsContainer}>
                        <View style={styles.ButtonMinusContainer}>
                            <QuitButton/>
                        </View>
                        <View style={styles.ButtonAddContainer}>
                            <AddCartWishlistButton/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductCart;