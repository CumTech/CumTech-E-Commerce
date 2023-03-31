import React, {useState, useContext} from 'react';
import { TouchableOpacity, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../Contexts/AuthContext';

const AddCartButton = ({name, price, img}) => {
const {saveItemCarrito} = useContext(AuthContext);

    return (
        <LinearGradient
        colors={['#F77019', '#FAD25C']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
        >
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                saveItemCarrito(name, price,img);
            }} 
        >
            <Image resizeMode="contain" style={styles.icon} source={require('../../../assets/icons/cart-white.png')} />
        </TouchableOpacity>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderRadius: 3,
        elevation: 6,
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: '70%',
        width: '70%',
    },
});
export default AddCartButton;