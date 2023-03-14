
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {

  return (

    <View style={styles.container}>
      
      <Text>hola</Text>
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
