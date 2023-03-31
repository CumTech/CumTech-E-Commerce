import React from 'react';
import { TouchableOpacity, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { API_URL } from '../../Config';
const cancelButton = ({id}) => {

    const handlePress = () => {
        axios.delete(`${API_URL}/wishlist/${id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <LinearGradient
            colors={['#F77019', '#FAD25C']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.button}
                onPress={handlePress} 
            >
                <Image resizeMode="contain" style={styles.icon} source={require('../../../assets/icons/cancel.png')} />
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
    height: '55%',
    width: '55%',
},
});

export default cancelButton;