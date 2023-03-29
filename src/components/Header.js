import { Text, View } from 'react-native';
import React from 'react'
import BackBotton from '../components/Buttons/BackButton';


const Header = ({Title }) => {
    return (
        <View style={styles.header}>
            <View style={styles.backButtonContainer}>
                <View style={styles.backButton}>
                    <BackBotton />
                </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{Title}</Text>
            </View>
            
        </View>
    )
  };


  const styles = {
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        paddingHorizontal: 10,
      },
      backButtonContainer: {
        position: 'absolute',
        left: 30,
        zIndex: 1,
      },
      backButton: {
        padding: 10,
      },
      titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 40,
        fontFamily: 'coco-goose',
        color: '#000',
      },
  }

export default Header;

