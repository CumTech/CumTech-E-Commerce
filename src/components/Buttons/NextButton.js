import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from '../styles/NextButtonStyles';
import { LinearGradient } from 'expo-linear-gradient';


const NextButton = () => {

  const handlePress = () => {
    console.log('Next button pressed');
  };

  return (
    <LinearGradient
      colors={['#F77019', '#FAD25C']}
      style={ styles.gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image resizeMode="contain" style={styles.arrow} source={require('../../../assets/images/arrow.png')} />    
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default NextButton;