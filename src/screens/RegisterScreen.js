import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import LogInButton from '../components/Buttons/NextButton';


export default function App(props) {

  const { navigation } = props;

  const goToLogin = () => {
    navigation.navigate('LogIn');
  }

  const handlePress = () => {
    console.log('Button pressed');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/BgLogIn.png')} style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleLittle}>Hello,</Text>
            <Text style={styles.titleBig}>Sign Up!</Text>
          </View>
          <View style={styles.inputsContainer}>
            <Text style={styles.textInput}>Name</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.textInput}>Email</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.textInput}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
          </View>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.buttonNextText}>Create</Text>
          <LogInButton />
        </View>
        <View style={[styles.bottomContainer]}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity style={styles.registerButton} onPress={goToLogin} >
            <Text style={styles.registerButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    flex: 2,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  titleBig: {
    // fontFamily: 'coco-goose',
    fontSize: 48,
    marginBottom: '5%',
  },
  titleLittle: {
    // fontFamily: 'coco-goose',
    fontSize: 13,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  textInput: {
    // fontFamily: 'coco-goose',
    fontSize: 16,
  },
  input: {
    // fontFamily: 'coco-goose',
    fontSize: 16,
    backgroundColor: '#FFF8EF',
    height: 40,
    width: 250,
    paddingLeft: '5%',
    marginBottom: 25,
    marginTop: 5,
    borderRadius: 15,
    elevation: 6,

  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonNextText: {
    // fontFamily: 'coco-goose',
    fontSize: 24,
    marginRight: '3%',
    marginBottom: '2%',
  },
  bottomContainer:{
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText:{
    // fontFamily: 'inter',
    fontSize: 16,
  },
  registerButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
  },
  registerButtonText:{
    // fontFamily: 'inter',
    fontSize: 16,
    color: '#F77019',
    textDecorationLine: 'underline',
  },
});