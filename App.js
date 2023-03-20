import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';
import * as Font from 'expo-font';

// async function loadFonts() {
//   await Font.loadAsync({
//     'coco-goose': require('./assets/fonts/CocogooseProLight-trial.ttf'),
//     'inter': require('./assets/fonts/Inter-Regular.ttf'),
//     'monda': require('./assets/fonts/Monda-Regular.ttf'),
//   });
// }

export default function App() {

  // useEffect(() => {
  //   loadFonts();
  // }, []);

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'coco-goose': require('./assets/fonts/CocogooseProLight-trial.ttf'), // Font can not have spaces
      }); 
      setFontLoaded(true);
    } 
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}

