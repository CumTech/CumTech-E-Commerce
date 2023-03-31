import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text} from 'react-native';
import AppNav from './src/navigation/AppNav'
import * as Font from 'expo-font';
import {AuthProvider} from './src/Contexts/AuthContext'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'coco-goose': require('./assets/fonts/CocogooseProLight-trial.ttf'), // Font can not have spaces
        'inter': require('./assets/fonts/Inter-Regular.ttf'),
        'monda': require('./assets/fonts/Monda-Regular.ttf'),
      }); 
      setFontLoaded(true);
    } 
    loadFonts();
  }, []); 

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
}