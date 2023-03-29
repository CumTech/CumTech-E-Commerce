import { View, Image } from 'react-native'
import React from 'react'

const Cards = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/card.png')} />
            </View>
        </View>
    );
};

const styles = {
    container: {
        width: '90%',
        height: 203,
        borderRadius: 15,
        marginBottom: 20,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
}

export default Cards;