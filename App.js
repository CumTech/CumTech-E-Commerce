import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';

async function loadFonts() {
  await Font.loadAsync({
    'coco-goose': require('./assets/fonts/CocogooseProLight-trial.ttf'),
    'inter': require('./assets/fonts/Inter-Regular.ttf'),
    'monda': require('./assets/fonts/Monda-Regular.ttf'),
  });
}

export default function App() {

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}

