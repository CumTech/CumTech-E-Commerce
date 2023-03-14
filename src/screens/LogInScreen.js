import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import LogInButton from '../components/LogInButton/logInButton';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'coco-goose': require('../../assets/fonts/CocogooseProLight-trial.ttf'), // Font can not have spaces
      }); 
      setFontLoaded(true);
    } 
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (

    <View style={styles.container}>
      
      <View style={styles.topContainer}>
        <Text style={[{fontSize:48, marginBottom:3}]}>CumTech</Text>
        <Text style={[{fontSize:13, marginBottom:80}]}>Log in to your account</Text>
        <View>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
        style={[styles.input,{marginBottom:25}]}
        //onChangeText={onChangeNumber}
        //value={number}
        placeholder="Email"
        keyboardType="numeric"
      />

      <Text style={styles.textInput}>Password</Text>
      <TextInput
        style={[styles.input, {marginBottom: 3}]}
        //onChangeText={onChangeNumber}
        //value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
            <Text style={[{fontSize:10, alignSelf: 'flex-end', color: '#8f8f8f'}]}>Forgot your password?</Text>
      </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={[{marginBottom:8, fontSize:24, marginRight:5}]}>Log In</Text>
        <LogInButton/>
      </View>
      <View style={[styles.bottomContainer]}>
        <Text style={[{ fontSize:16, marginRight:5,}]}>Don´t have an account?</Text>
        <TouchableOpacity style={[{marginRight:5,}]} onPress="">
          <Text style={[{ fontSize:16, marginRight:5,textDecorationLine: 'underline', color: '#ff9700'}]}>Register</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomContainer:{
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: 'coco-goose',
    fontSize: 16,
    fontWeight: 300,
    color: 'black',
    alignItems: 'center',
  },
  input: {
    height: 35,
    width: 232,
    marginBottom: 10,
    borderWidth: 10,
    borderColor: 'transparent', // borde transparente para que la sombra se muestre en la parte interior
    backgroundColor: '#fff', // color de fondo para que la sombra sea visible
    overflow: 'hidden', // ocultar la parte exterior de la sombra
    padding: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1, // establece el valor de shadowRadius en 1
    elevation: 1.5, // establece el valor de elevation en 1
  }
});
