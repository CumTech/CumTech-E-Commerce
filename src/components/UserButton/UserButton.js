import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './UserButtonStyles';
import { LinearGradient } from 'expo-linear-gradient';


class logInButton extends Component {
  render() {
    return (
      <LinearGradient
      colors={['#FAFAFA', '#FFFFFF']}
      style={ styles.gradient}
      >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress="">
          <Text style={styles.text} >Button Test</Text>  
        </TouchableOpacity>
      </View>
      </LinearGradient>
    );
  }
}

export default logInButton;