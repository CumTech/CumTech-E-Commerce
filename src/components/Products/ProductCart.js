import {  Text, View, Image } from 'react-native';
import React from 'react';
import styles from '../styles/ProductCartStyles';
import PlusButton from '../Buttons/PlusButton';
import MinusButton from '../Buttons/MinusButton';

const ProductCart = ({name,price,img}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.imageProductContainer}>
                <Image resizeMode="contain" style = {styles.image}source={{ uri: `${img}` }}/>
            </View>
            <View style = {styles.informationContainer}>
                <View style={styles.titleProductContainer}>
                    <View style={styles.titleProductTextContainer}>
                        <Text style={styles.titleProductText}>{name}</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.priceTextContainer}>
                            <Text style={styles.priceTextDollars}>US$</Text>
                            <Text style={styles.priceTextNumber}>{price}</Text>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <View style={styles.ButtonsContainer}>
                        <View style={styles.amountButtonMinusContainer}>
                            <MinusButton/>
                        </View>
                        <View style={styles.amountTextContainer}>
                            <Text style={styles.amountText}>1</Text>
                        </View>
                        <View style={styles.amountButtonAddContainer}>
                            <PlusButton/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductCart;