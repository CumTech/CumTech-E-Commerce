import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './ProductStyles'

const ProductView = () => {
  return (
    <View style={styles.contenedorproductos}> 
            <View style={styles.imagenproducto}>
              <TouchableOpacity style={styles.button} onPress={console.log('boton pusheado')}>
              <Image
                style={styles.imagenproducto}
                source={require("../../../assets/images/Aguacates.jpg")}
              />
              </TouchableOpacity>
            </View>
            <View style={styles.infoproduct}>
              <View style={styles.precio}>
                <View style={styles.moneda}><Text style={{fontSize:10, textAlign:'center', marginTop:-2}}>US$</Text></View>
                <View style={styles.cantidad}><Text style={{fontSize:13, textAlign:'center', marginTop:-1, fontWeight: 'bold'}}>3000</Text></View>
              </View>
              <View style={styles.corazon}>
                <TouchableOpacity style={styles.button} onPress={console.log('boton pusheado')}>
                <Image
                  style={styles.corazonI}
                  source={require("../../../assets/images/Corazon.jpg")}
                />
                </TouchableOpacity>
              </View>
              <View style={styles.carritochiquito}>
                <TouchableOpacity style={styles.button} onPress={console.log('boton pusheado')}>
                <Image
                  style={styles.carritochiquitoI}
                  source={require("../../../assets/images/Carritochiquito.jpg")}
                />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.nombreproducto}>
              <Text style={{fontSize:13, textAlign:'center', fontWeight: 'bold'}}>Aguacates</Text>
            </View>
    </View>
  )
}

export default ProductView;