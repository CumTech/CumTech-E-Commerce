import {  Text, View, Image } from 'react-native';
import React from 'react';
import styles from '../styles/ProductCartStyles';
import PlusButton from '../Buttons/PlusButton';
import MinusButton from '../Buttons/MinusButton';

const ProductCart = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.imageProductContainer}>
                <Image resizeMode="contain" style = {styles.image}source={require('../../../assets/images/pou.webp')}/>
            </View>
            <View style = {styles.informationContainer}>
                <View style={styles.titleProductContainer}>
                    <View style={styles.titleProductTextContainer}>
                        <Text style={styles.titleProductText}>Pou Plushie</Text>
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