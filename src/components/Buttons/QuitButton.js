import React from 'react';
import { TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const cancelButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log('Back button pressed');
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
    height: 40,
    borderRadius: 10,
    elevation: 4,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '70%',
    width: '100%',
  },
});

export default cancelButton;