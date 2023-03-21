import React from 'react';
import { TouchableOpacity, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const CartButton = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#F77019', '#FAD25C']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={()=> navigation.navigate('Carrito')}
      >
        <Image resizeMode="contain" style={styles.icon} source={require('../../../assets/icons/cart-black.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 10,
    elevation: 6,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '70%',
    width: '100%',
  },
});

export default CartButton;