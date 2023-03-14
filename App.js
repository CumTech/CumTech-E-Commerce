import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileScreen from "./src/screens/ProfileScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.udavdcuaydayvdauyasvhkdsvc to start working on your app!</Text>
      <StatusBar style="auto" />
      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});