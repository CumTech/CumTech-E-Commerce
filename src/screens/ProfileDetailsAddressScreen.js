import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import SafeAreaAndroid from '../components/SafeViewAndroid';
import BackBotton from '../components/Buttons/BackButton';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';

export default function OrdersScreen() {

    const handlePress = () => {
        console.log('Pressed');
    }

    return (
        <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
            <View style={styles.container}>
                <Header Title='ADDRESS'/>
                <View style={styles.widgetContainer}>
                    <View style={styles.widgetContainer2}>
                        <LinearGradient
                            colors={['#F77019', '#FAD25C']}
                            style={styles.widgetBG}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <Text style={styles.widgetText}>Widget in progress!!</Text>
                        </LinearGradient>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.streetContainer}>
                        <View style={styles.streetTitleContainer}>
                            <Text style={styles.streetTitleText}>Street</Text>
                        </View>
                        <View style={styles.streetInputContainer}>
                            <TextInput 
                                style={styles.inputLarge} 
                                placeholder="Street"/>
                        </View>
                    </View>
                    <View style={styles.numbersContainer}>
                        <View style={styles.extNumberContainer}>
                            <Text style={styles.extNumberText}>Ext. Number</Text>
                            <TextInput style={styles.inputSmall} placeholder="Ext. Number"  />
                        </View>
                        <View style={styles.intNumberContainer}>
                            <Text style={styles.intNumberText}>Int. Number</Text>
                            <TextInput style={styles.inputSmall} placeholder="Int. Number"  />
                        </View>
                    </View>
                    <View style={styles.addressContainer}>
                        <View style={styles.addressTitleContainer}>
                            <Text style={styles.addressText}>Second Street</Text>
                        </View>
                        <View style={styles.addressInputContainer}>
                            <TextInput style={styles.inputLarge} placeholder="Second Street"  />
                        </View>
                        <View style={styles.addressTitleContainer}>
                            <Text style={styles.addressText}>City</Text>
                        </View>
                        <View style={styles.addressInputContainer}>
                            <TextInput style={styles.inputLarge} placeholder="City"  />
                        </View>
                        <View style={styles.addressTitleContainer}>
                            <Text style={styles.addressText}>State</Text>
                        </View>
                        <View style={styles.addressInputContainer}>
                            <TextInput style={styles.inputLarge} placeholder="State"  />
                        </View>
                    </View>
                    <View style={styles.addressContainer2}>
                        <View style={styles.zipCodeContainer}>
                        <Text style={styles.addressText}>Zip Code</Text>
                        <TextInput style={styles.inputSmall} placeholder="Zip Code"  />
                        </View>
                        <View style={styles.countryContainer}>
                        <Text style={styles.addressText}>Country</Text>
                        <TextInput style={styles.inputSmall} placeholder="Country"  />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <LinearGradient
                        colors={['#F77019', '#FAD25C']}
                        style={styles.buttonBG}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    //--------------------------CONTAINER--------------------------//
    container: {
        height: '100%',
        backgroundColor: '#FFF7ED',
    },
//--------------------------WIDGET--------------------------//
    widgetContainer: {
        flex: 0.4,
    },
    widgetContainer2: {
        width: '100%',
        alignItems: 'center',
    },
    widgetBG: {
        width: '93%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    widgetText: {
        fontFamily: 'coco-goose',
        fontSize: 32,
        color: '#000',
    },
//--------------------------INPUT--------------------------//
    inputContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    streetContainer: {
        alignItems: 'center',
    },
    streetTitleContainer: {
        width: '82%',
        justifyContent: 'flex-start',
    },
    streetTitleText: {
        fontFamily: 'coco-goose',
        fontSize: 16, 
        color: '#000',
    },
    numbersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    extNumberText: {
        fontFamily: 'coco-goose',
        fontSize: 16,
        color: '#000',
    },
    intNumberText: {
        fontFamily: 'coco-goose',
        fontSize: 16,
        color: '#000',
    },
    addressContainer: {
        alignItems: 'center',
    },
    addressTitleContainer: {
        width: '82%',
        justifyContent: 'flex-start',
    },

    addressContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
//--------------------------TEXT--------------------------//
    addressText: {
        fontFamily: 'coco-goose',
        fontSize: 16,
        color: '#000',
    },
//--------------------------INPUTS BG--------------------------//
    inputLarge: {
        fontFamily: 'monda',
        backgroundColor: '#FFF',
        width: 340,
        height: 40,
        borderRadius: 10,
        borderColor: 'transparent',
        textAlign: 'center',
        marginBottom : 9,
        elevation: 4,
    },
    inputSmall: {
        fontFamily: 'monda',
        backgroundColor: '#FFF',
        width: 153,
        height: 40,
        marginBottom: 1,
        borderRadius: 10,
        borderColor: 'transparent',
        textAlign: 'center',
        marginBottom: 9,
        elevation: 4,
    },
//--------------------------BUTTON--------------------------//
    buttonContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    buttonBG: {
        width: '40%',
        height: '50%',
        borderRadius: 5,
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'coco-goose',
        fontSize: 16,
        color: '#000',
    },
});