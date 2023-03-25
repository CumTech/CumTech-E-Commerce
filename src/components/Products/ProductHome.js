import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/ProductHomeStyles'
import AddCartButton from '../Buttons/AddCartButton';
import AddWishlistButton from '../Buttons/AddWishlistButton';
import axios from 'axios';

const ProductHome = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://cum-tech-api.vercel.app/product')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <View style={styles.container}>
            {products.map(product => (
                <View key={product._id} style={styles.ProductContainer}>
                {product?.urlImage && (
                    <View style={styles.imageProductContainer}>
                    <Image resizeMode="contain" style={styles.image} source={{ uri: product.urlImage }} />
                    </View>
                )}
                <View style={styles.informationContainer}>
                    <View style={styles.topProductContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceTextDollars}>US$</Text>
                        <Text style={styles.priceTextNumber}>{product?.price}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonHeartContainer}>
                        <AddWishlistButton />
                        </View>
                        <View style={styles.buttonCartContainer}>
                        <AddCartButton />
                        </View>
                    </View>
                    </View>
                    <View style={styles.titleProductContainer}>
                    <View style={styles.titleProductTextContainer}>
                        <Text style={styles.titleProductText}>{product?.name}</Text>
                    </View>
                    </View>
                </View>
                </View>
            ))}
</View>
    );
};

export default ProductHome;