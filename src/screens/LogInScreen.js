import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import LogInButton from '../components/Buttons/NextButton';
import { AuthContext } from '../Contexts/AuthContext';

export default function App(props) {
  //This makes the login function available in this component
  const {login} = useContext(AuthContext);
  const { loginError, setLoginError, loginModalText, setLoginModalText, loginModalVisible, setLoginModalVisible } = useContext(AuthContext);
  //These are the states that will hold the email and password
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);


  //Use this to navigate to the Register screen
  const { navigation } = props;
  //This function will be called when the user presses the register button
  const goToRegister = () => {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={loginModalVisible}
        onRequestClose={() => {
          setLoginModalVisible(false);
        }}
      > */}
      <ImageBackground source={require('../../assets/images/BgLogIn.png')} style={styles.background}>
        <View style={styles.topContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBig}>CumTech</Text>
            <Text style={styles.titleLittle}>Sign in to your account</Text>
          </View>
          <View style={styles.inputsContainer}>
            <Text style={styles.textInput}>Email</Text>
              <TextInput 
                style={styles.input} 
                value={email} 
                onChangeText={text => setEmail(text)}
              />
            <Text style={styles.textInput}>Password</Text>
              <TextInput 
                secureTextEntry={true} 
                style={[styles.input, {marginBottom: 3, }]} 
                value={password} 
                onChangeText={text => setPassword(text)}
              />
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </View>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.buttonNextText}>Log In</Text>
          <LogInButton 
            onPress={()=> {login(email, password)}} 
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity 
            style={styles.registerButton} 
            onPress={goToRegister}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View> 
      </ImageBackground>
      {/* </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
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
  forgotText: {
    fontSize:10, 
    alignSelf: 'flex-end', 
    color: '#8f8f8f',
  },
  input: {
    fontFamily: 'monda',
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