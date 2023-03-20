import React from 'react';
import { TouchableOpacity, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AddWishlistButton = () => {

    const handlePress = () => {
        console.log('Add to cart button pressed');
    };

    return (
        <LinearGradient
        colors={['#FAD25C', '#F77019']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
        >
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress} 
        >
            <Image resizeMode="contain" style={styles.icon} source={require('../../../assets/icons/add-to-cart-white.png')} />
        </TouchableOpacity>
        </LinearGradient>
    );
    };

    const styles = StyleSheet.create({
    container: {
        width: 40,
        height: '80%',
        borderRadius: 10,
        elevation: 6,
    },
    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: '70%',
        width: '70%',
    },
});

export default AddWishlistButton;