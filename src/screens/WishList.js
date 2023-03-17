import { StyleSheet, Text, ScrollView,View, TouchableOpacity } from 'react-native';
import ProductCart from '../components/ProductCart/ProductWishList'
import BackButton from '../components/BackButton/BackButton';

export default function App(props) {
  const { navigation } = props;

  const goToDetails = () => {
      navigation.navigate('Carrito');
  }
  return (
    <View style={[styles.container,{}]}>
      <View style = {[styles.bottom,{}]}>
        <BackButton/>
        <View style={styles.tittle}>
        <Text style = {{fontSize: 48, marginTop: -30}}>WishList</Text>
        <TouchableOpacity style={styles.goToDetails} onPress={goToDetails}>
                            <Text style={styles.goToDetailsText}>CART</Text>
            </TouchableOpacity>
        </View>
      </View>
      <ScrollView style = {styles.middle}>

      <ProductCart/>
      <ProductCart/>
      <ProductCart/>

      <ProductCart/>
      <ProductCart/>

      </ScrollView>
      
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
