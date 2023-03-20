import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import SafeAreaAndroid from '../components/SafeViewAndroid';
import BackBotton from '../components/Buttons/BackButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function OrdersScreen() {

    const handlePress = () => {
        console.log('Pressed');
    }

    return (
        <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.backButtonContainer}>
                        <View style={styles.backButton}>
                            <BackBotton/>
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>HELLO!</Text>
                    </View>
                    <View style={styles.spaceToCenterContainer}>
                    </View>
                </View>
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
                        <Text style={styles.streetText}>Street</Text>
                        <TextInput style={styles.streetInput} placeholder="Street"  />
                    </View>
                    <View style={styles.numbersContainer}>
                        <View style={styles.extNumberContainer}>
                            <Text style={styles.extNumberText}>Ext. Number</Text>
                            <TextInput style={styles.extNumberInput} placeholder="Ext. Number"  />
                        </View>
                        <View style={styles.intNumberContainer}>
                            <Text style={styles.intNumberText}>Int. Number</Text>
                            <TextInput style={styles.intNumberInput} placeholder="Int. Number"  />
                        </View>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressText}>Second Street</Text>
                        <TextInput style={styles.addressInput} placeholder="Second Street"  />
                        <Text style={styles.addressText}>City</Text>
                        <TextInput style={styles.addressInput} placeholder="City"  />
                        <Text style={styles.addressText}>State</Text>
                        <TextInput style={styles.addressInput} placeholder="State"  />
                    </View>
                    <View style={styles.addressContainer2}>
                        <Text style={styles.addressText}>Zip Code</Text>
                        <TextInput style={styles.addressInput} placeholder="Zip Code"  />
                        <Text style={styles.addressText}>Country</Text>
                        <TextInput style={styles.addressInput} placeholder="Country"  />
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
                                <Text style={styles.buttonText}>Save</Text>
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
//--------------------------HEADER--------------------------//
    header: {
        flex: 0.3,
        // height: 80,
        flexDirection: 'row',                                             
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34B6FF',
    },
    backButtonContainer: {
        flex: 0.7,
        alignItems: 'center',
    },
    backButton: {
    },
    titleContainer: {
        flex: 1.1,
        alignItems: 'center',
    },
    title: { 
        fontSize: 48,
        fontWeight: 'bold',
    },
    spaceToCenterContainer: {
        flex: 0.7,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
    },
});