import React, { Component, useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from '../styles/TextGradientButtonStyles';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

const TextGradientButton = ({TextContent, onPress}) => {
    
    return (
      <LinearGradient
      colors={['#F77019', '#FAD25C']}
      style={ styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      >
        
      <View style={styles.content}>
        <TouchableOpacity onPress={onPress} >
            <Text style={styles.text}>{TextContent}</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    );
}

export default TextGradientButton;