import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationStack from './src/navigation/NavigationStack';
export default function App() {

  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

