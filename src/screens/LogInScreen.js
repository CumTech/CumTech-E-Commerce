import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import LogInButton from '../components/Buttons/NextButton';
import { AuthContext } from '../AuthContext';

export default function App(props) {
  const {login} = useContext(AuthContext);
  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate('Register');
  }

  const handlePress = () => {
    console.log('Button pressed');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/BgLogIn.png')} style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBig}>CumTech</Text>
            <Text style={styles.titleLittle}>Sign in to your account</Text>
          </View>
          <View style={styles.inputsContainer}>
            <Text style={styles.textInput}>Email</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.textInput}>Password</Text>
            <TextInput secureTextEntry={true} style={[styles.input, {marginBottom: 3, }]}/>
            <Text style={[{fontSize:10, alignSelf: 'flex-end', color: '#8f8f8f'}]}>Forgot your password?</Text>
            
          </View>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.buttonNextText}>Log In</Text>
          <LogInButton onPress={()=> {login()}} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity style={styles.registerButton} onPress={goToRegister} >
            <Text style={styles.registerButtonText}>Register</Text>
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
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleBig: {
    fontFamily: 'coco-goose',
    fontSize: 48,
  },
  titleLittle: {
    fontFamily: 'coco-goose',
    fontSize: 13,
    marginBottom: '5%',
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  textInput: {
    fontFamily: 'coco-goose',
    fontSize: 16,
  },
  input: {
    fontFamily: 'coco-goose',
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
    fontFamily: 'coco-goose',
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
    fontFamily: 'inter',
    fontSize: 16,
  },
  registerButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
  },
  registerButtonText:{
    fontFamily: 'inter',
    fontSize: 16,
    color: '#F77019',
    textDecorationLine: 'underline',
  },
});