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
                            <TextInput style={styles.inputLarge} placeholder="Street"  />
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
                        <Text style={styles.addressText}>Second Street</Text>
                        <TextInput style={styles.inputLarge} placeholder="Second Street"  />
                        <Text style={styles.addressText}>City</Text>
                        <TextInput style={styles.inputLarge} placeholder="City"  />
                        <Text style={styles.addressText}>State</Text>
                        <TextInput style={styles.inputLarge} placeholder="State"  />
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
                    <View style={styles.buttonContainer2}>
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
        // flex: 0.3,
        height: 180,
        backgroundColor: '#4200FF',
    },
    widgetContainer2: {
        width: '100%',
        alignItems: 'center',
    },
    widgetBG: {
        width: '90%',
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
        backgroundColor: '#FFA',
        paddingLeft: 35,
    },
    streetContainer: {
        width: '100%',
    },
    streetTitleContainer: {
        width: '100%',
    },
    streetTitleText: {
        fontFamily: 'coco-goose',
        fontSize: 16, 
        color: '#000',
    },
    streetInputContainer: {
        width: '100%',
    },
    numbersContainer: {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
    },
    extNumberContainer: {
        // flex: 0.5,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    extNumberText: {
        fontFamily: 'coco-goose',
        fontSize: 16,
        color: '#000',
    },
    intNumberContainer: {
        // flex: 0.5,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    intNumberText: {
        fontFamily: 'coco-goose',
        fontSize: 16,
        color: '#000',
    },
    addressContainer: {
        // flex: 0.3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer2: {
        // flex: 0.3,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    zipCodeContainer: {
        // flex: 0.5,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    countryContainer: {
        // flex: 0.5,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressText: {
        fontFamily: 'coco-goose',
        fontSize: 16,
        color: '#000',
    },
    inputLarge: {
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
        // flex: 0.3,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF00F5',
    },
    buttonContainer2: {
        width: '100%',
        alignItems: 'center',
    },
    buttonBG: {
        width: '40%',
        height: '70%',
        borderRadius: 5,
    },
    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'coco-goose',
        fontSize: 16,
        color: '#000',
    },

});