import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from '../styles/logInButtonStyles';
import { LinearGradient } from 'expo-linear-gradient';


class logInButton extends Component {
  render() {
    return (
      <LinearGradient
      colors={['#F77019', '#FAD25C']}
      style={ styles.gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress="">
          <Image resizeMode="contain" style={styles.arrow} source={require('../../../assets/images/arrow.png')} />    
        </TouchableOpacity>
      </View>
      </LinearGradient>
    );
  }
}

export default logInButton;