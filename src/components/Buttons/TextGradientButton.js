import React, { Component, useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image, View,Pressable } from 'react-native';
import styles from '../styles/TextGradientButtonStyles';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

const TextGradientButton = ({TextContent, onPress}) => {
    
    return (
      <TouchableOpacity onPress={onPress} style={ styles.container} >
        <LinearGradient
        colors={['#F77019', '#FAD25C']}
        style={ styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        >
          
        <View style={styles.content}>
          
              <Text style={styles.text}>{TextContent}</Text>
          
        </View>
        
        </LinearGradient>
      </TouchableOpacity>
    );
}

export default TextGradientButton;