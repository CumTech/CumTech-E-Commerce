import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles/ProductHomeStyles'
import AddCartButton from '../Buttons/AddCartButton';
import AddWishlistButton from '../Buttons/AddWishlistButton';

const ProductHome = ({name, price, img}) => {

    return (
        <View style={styles.container}>
            <View style={styles.ProductContainer}>
                <View style={styles.imageProductContainer}>
                    <Image resizeMode="contain" style = {styles.image} source={{ uri: `${img}` }}/>
                </View>
                <View style = {styles.informationContainer}>
                    <View style={styles.topProductContainer}>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceTextDollars}>US$</Text>
                            <Text style={styles.priceTextNumber}>{price}</Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonHeartContainer}>
                                <AddWishlistButton/>
                            </View>
                            <View style={styles.buttonCartContainer}>
                                <AddCartButton
                                onPress
                                    name={name}
                                    price={price}
                                    img={img}
                                    
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.titleProductContainer}>
                        <View style={styles.titleProductTextContainer}>
                            <Text style={styles.titleProductText}>{name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductHome;