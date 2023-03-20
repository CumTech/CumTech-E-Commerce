import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import SafeAreaAndroid from '../components/SafeViewAndroid';
import BackBotton from '../components/Buttons/BackButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileDetailsScreen() {
    const handlePress = () => {
        console.log('Button Pressed');
    };
    return (
        <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.buttonBackContainer}>
                        <BackBotton style={styles.buttonBack}/>
                    </View>
                    <Text style={styles.title}>Hello!</Text>
                </View>
            <View style={styles.pfpImagesContainer}>
                <View style={styles.coverImageContainer}>
                    <Image resizeMode="contain" style={styles.coverImage} source={require('../../assets/images/cover.png')} />
                </View>
                <View style={styles.profileImage}>
                    <Image resizeMode="contain" style={styles.pfpImage} source={require('../../assets/images/pfp.png')} />
                </View>
            </View>
            <View style={styles.inputContainerSmall}>
                <View style={styles.inputLeft}>
                    <Text style={styles.inputTitleSmall}>
                        Name
                    </Text>
                    <TextInput style={styles.inputSmall} placeholder="Name" />
                    <Text style={styles.inputTitleSmall}>
                        Age
                    </Text>
                    <TextInput style={styles.inputSmall} placeholder="Age" />
                </View>
                <View style={styles.inputRight}>
                    <Text style={styles.inputTitleSmall}>
                        Last Name
                    </Text>
                    <TextInput style={styles.inputSmall} placeholder="Last Name" />
                    <Text style={styles.inputTitleSmall}>
                        Username
                    </Text>
                    <TextInput style={styles.inputSmall} placeholder="Username" />
                </View>
            </View>
            <View style={styles.inputContainerLarge}>
                <Text style={styles.inputTitleLarge}>
                    Email
                </Text>
                <TextInput style={styles.inputLarge} placeholder="Email" />
                <Text style={styles.inputTitleLarge}>
                    Password
                </Text>
                <TextInput style={styles.inputLarge} secureTextEntry={true} />
                <View style={styles.addressContainer}>
                    <Text style={styles.inputTitleLarge}>
                        Address
                    </Text>
                    <View style={styles.buttonAddressContainer}>
                        <View style={styles.buttonAddressWhite}>
                            <View style={styles.addressButtomImgContainer}>
                                <Image resizeMode="contain" style={styles.buttonAddressIcon} source={require('../../assets/icons/location-black.png')} />
                            </View>
                            <View style={styles.buttonAddressTextContainer}>
                                <Text style={styles.buttonAddressText}>
                                    Residential Address
                                </Text>
                            </View>
                        </View>
                        <LinearGradient
                            colors={['#F77019', '#FAD25C']}
                            style={ styles.buttonAddressBG}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <TouchableOpacity style={styles.buttonAddressOrange} onPress={handlePress}>
                                <View style={styles.addressButtomImgContainer}>
                                    <Image resizeMode="contain" style={styles.icon} source={require('../../assets/icons/right-arrow.png')} />
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
            <View style={styles.changeButtonContainer}>
                <LinearGradient
                    colors={['#F77019', '#FAD25C']}
                    style={ styles.changeButtonBG}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                >
                    <TouchableOpacity style={styles.changeButton} onPress={handlePress}>
                        <Text style={styles.changeButtonText}>
                            Change
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    </SafeAreaView>
)};

const styles = StyleSheet.create({
//-------------------------Contenedor Principal----------------------------------------//
    container: {
        height: '100%',
        backgroundColor: '#FFF7ED',
    },
//-------------------------Contenedor Header-----------------------------------------------------//
    header: {
        // flex: 0.44,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#8F00FF',
    },
    buttonBackContainer: {
        position: 'absolute',
        top: 20,
        left: 45,
    },
    title: { 
        fontSize: 48,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
//-------------------------Contenedor Imagenes-------------------------------------------------//
    pfpImagesContainer: {
        height: 265,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: '#FFA433',
    },
    coverImageContainer: {
        width: 361,
        height: 193,
        // height: '100%',
        backgroundColor: '#FAFA',
        borderRadius: 15,
    },
    coverImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    profileImage: {
        position: 'absolute',
        width: 133,
        height: 133,
        left: 45,
        top: 126,
        borderRadius: 50,
        backgroundColor: 'transparent',
    },
    pfpImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
//-------------------------Contenedor Inputs-------------------------------------------------//
    inputContainerSmall: {
        height: 146,
        flexDirection: 'row',
        
    },
    inputLeft: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 35,
    },
    inputRight: {
        flex: 1,
        flexDirection: 'column',
    },
    inputTitleSmall: {
        // fontFamily: 'Cocogoose',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
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
    inputContainerLarge: {
        height: 201,
        paddingRight: 35,
        paddingLeft: 35,
    },
    inputTitleLarge: {
        // fontFamily: 'Cocogoose',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
        textAlign: 'left',
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
    buttonAddressContainer: {
        flexDirection: 'row',
    },
    buttonAddressWhite: {
        width: 273,
        height: 40,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 4,
    },
    buttonAddressTextContainer: {
        width: 246,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAddressBG:{
        width: 67,
        height: 40,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 4,
    },
    buttonAddressOrange: {
        width: 67,
        height: 40,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    addressButtomImgContainer: {
        width: 47,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: '70%',
    },
    buttonAddressIcon: {
        width: 23,
        height: 27,
    },
    buttonAddressText: {
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: 'black',
        // marginLeft: 10,
    },
//-------------------------Contenedor Footer-------------------------------------------------//
    changeButtonContainer: {
        // height: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    changeButtonBG: {
        width: 100,
        height: 33,
        borderRadius: 10,
        elevation: 4,
    },
    changeButton: {
        width: 100,
        height: 33,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    changeButtonText: {
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: 'black',
    },
});