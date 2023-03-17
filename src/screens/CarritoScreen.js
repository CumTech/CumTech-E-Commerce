import { StyleSheet, Text, ScrollView,View, TouchableOpacity, LinearGradient } from 'react-native';
import ProductCart from '../components/ProductCart/ProductCart.js'
import BackButton from '../components/BackButton/BackButton.js';
export default function App(props) {
  const { navigation } = props;

    const goToDetails = () => {
        navigation.navigate('WishList');
    }
  return (
    <View style={[styles.container,{}]}>
      <View style = {[styles.bottom,{}]}>
       <BackButton/>
        <View style={styles.tittle}>
        <Text style = {{fontSize: 48, marginTop: -3}}>CART</Text>
        </View>
      </View>
      <ScrollView style = {styles.middle}>

      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
      

      </ScrollView>
      <View style = {[styles.down, {backgroundColor: 'white', borderRadius: 10, elevation: 4}]}>
        <View style = {styles.texts}>
          <Text>Shipment</Text>
          <Text style = {{marginLeft: 10}}>Details</Text>
          <Text></Text>
          <Text style = {{marginLeft: 5}}>3064, Alfred Drive</Text>
          <Text style = {{marginLeft: -13}}>New York, New York (NY),</Text>
          <Text style = {{marginLeft: 40}}>1005</Text>
        </View>
        <View style = {[styles.texts, {flex :1 , margin: 10}]}>

    
            <TouchableOpacity style={[styles.downbut,{height: 50, elevation: 4}]}>
              <Text>USD$19.99</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.goToDetails} onPress={goToDetails}>
                            <Text style={styles.goToDetailsText}>WishList</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.downbut, {height: 30, marginTop: 30, elevation: 4}]}>
              <Text>Comprar</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
      
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF7ED'
  },
  bottom:{
    flex: .2,
    marginTop: 35,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tittle:{
    marginLeft: 85,
    alignItems: 'center',
    justifyContent: 'center'

  },
  middle:{
    flex: 1,
  },
  down:{
    marginTop: 10,
    flex: .4,
    flexDirection: 'row',
  },
  texts:{
  marginTop: 20,
  marginLeft: 30
  },
  downbut:{
    width: '100%',
    marginTop: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'

  }

});
