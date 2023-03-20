import React, {useState, useEffect} from 'react'
import { View, Text,Modal, Pressable, StyleSheet } from 'react-native'
import * as Font from 'expo-font';
import styles from '../../styles/LogInSignInModalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import TextGradientButton from '../../Buttons/TextGradientButton';
const LogInSignInModal = ({ visible, onClose }) => {
  
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.Title}>
              <Text style={styles.modalText}>Before continue you may Log In</Text>
            </View>
            <View style={styles.modalContent}>
              
              <TextGradientButton
                TextContent = 'Sign In'
                onPress= {onClose}
              />
              <TextGradientButton
                TextContent = 'Log In'
                onPress= {onClose}
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default LogInSignInModal;