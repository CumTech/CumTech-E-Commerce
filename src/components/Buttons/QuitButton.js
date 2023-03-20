import React from 'react';
import { TouchableOpacity, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const cancelButton = () => {

  const handlePress = () => {
    console.log('Quit button pressed');
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