import { View, Text,Modal, Pressable, StyleSheet } from 'react-native';
import React, {useState, useEffect} from 'react';
import LogInSignInModal from '../components/Modals/LogInSignIn/LogInSignIn';


export default function TestScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Text>Esta screen es solo para agregar la carpeta screens, no mover nada, se borrara a la finalizacion del proyectohrthgtg</Text>
      <LogInSignInModal visible={modalVisible} onClose={handleModalClose} />
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true) }>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
    
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    width:'80%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Title:{
    marginBottom:22,
  },
  modalContent:{
    flexDirection:'row',
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    flex:1,
    marginHorizontal:'5%',
    backgroundColor: '#2196F3',
    
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});