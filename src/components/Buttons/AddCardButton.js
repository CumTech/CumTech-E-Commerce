import { TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const AddCardButton = () => {

    const handlePress = () => {
        console.log('Add Card Button Pressed')
    }

    return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Image style={styles.image} source={require('../../../assets/icons/credit-card-add-black.png')} />
        </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = {
    container: {
        width: '90%',
        height: 203,
        borderRadius: 15,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 3,
    },
    buttonContainer: {
        width: 100,
        height: 100,
    },
    button: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
}

export default AddCardButton