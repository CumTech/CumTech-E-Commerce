import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import { ScrollView } from 'react-native';
import  ProductView  from '../components/ProductHome/Product'
export default function App() {

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.Head}>
        <View style={styles.Flecha}>
          <TouchableOpacity style={styles.button} onPress={console.log('boton pusheado')}>
          <Text>Flecha</Text>
          </TouchableOpacity>
          </View>
        <View style={styles.Logotipo}><Text style={{fontSize: 48, fontWeight: 'bold', fontWeight: '250'}}>SHOP</Text></View>
        <View style={styles.Carrito}>
          <TouchableOpacity style={styles.button} onPress={console.log('boton pusheadocarrito')}>
          <Image
            style={styles.Carrito}
            source={require("./../../assets/images/Carritochiquito.jpg")}
          /> 
          </TouchableOpacity>     
        </View>
        <View style={styles.contadorcarrito}>
              <Text>5</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.contenedorscroll}>

          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          <ProductView/>
          
        </View>
    </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Head: {
    height: 100,
    backgroundColor: '#FFF7ED',
    flexDirection: 'row',
    justifyContent : 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Flecha:{
    width: 40,
    height: 40,
    backgroundColor: '#DD00E0',
    justifyContent : 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Logotipo:{
    margin: 5,
    width: 221,
    height: 80,
    backgroundColor: '#FFF7ED',
    justifyContent : 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Carrito:{
    borderRadius: 150,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    justifyContent : 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginRight:-10,
  },
  contadorcarrito:{
    width: 20,
    height: 20,
    marginTop:-30,
    backgroundColor: 'red',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 150,

  },
  contenedorscroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 50, // Para que la ScrollView tenga un espacio inferior para hacer scroll
    backgroundColor: '#FFF7ED',
  },
 
})