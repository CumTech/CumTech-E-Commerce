import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
        colors={['#F77019', '#FAD25C']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress} >
          <Image resizeMode="contain" style={styles.arrow} source={require('../../../assets/images/back.png')} />
        </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  arrow: {
    width: 12,
    height: 24,
  },
});

export default BackButton;

{/* 

export default BackButton;

// class logInButton extends Component {
//   render() {
//     return (
//       <LinearGradient
//       colors={['#F77019', '#FAD25C']}
//       style={ styles.button}
//       start={{ x: 0, y: 1 }}
//       end={{ x: 0, y: 0 }}
//       >
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.button} onPress="">
//           <Image resizeMode="contain" style={styles.arrow} source={require('../../../assets/images/back.png')} />    
//         </TouchableOpacity>
//       </View>
//       </LinearGradient>
//     );
//   }
// }

// export default logInButton;

*/}