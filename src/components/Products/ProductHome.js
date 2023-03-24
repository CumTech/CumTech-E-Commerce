import React from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'
import styles from '../styles/ProductHomeStyles'
import AddCartButton from '../Buttons/AddCartButton';
import AddWishlistButton from '../Buttons/AddWishlistButton';

const ProductHome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ProductContainer}>
                <View style={styles.imageProductContainer}>
                    <Image resizeMode="contain" style = {styles.image}source={require('../../../assets/images/avocado.png')}/>
                </View>
                <View style = {styles.informationContainer}>
                    <View style={styles.topProductContainer}>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceTextDollars}>US$</Text>
                            <Text style={styles.priceTextNumber}>19.99</Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonHeartContainer}>
                                <AddWishlistButton/>
                            </View>
                            <View style={styles.buttonCartContainer}>
                                <AddCartButton/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.titleProductContainer}>
                        <View style={styles.titleProductTextContainer}>
                            <Text style={styles.titleProductText}>Aguacates</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductHome;