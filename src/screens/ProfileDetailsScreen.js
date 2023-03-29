import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import React, {useContext, useState} from 'react'
import SafeAreaAndroid from '../components/SafeViewAndroid';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';
import { API_URL } from '../Config';


export default function ProfileDetailsScreen(props) {
    const {navigation} = props;
    const {userInfo} = useContext(AuthContext);

    const [name, setName ] = useState(userInfo.name);
    const [lastName, setLastName ] = useState(userInfo.lastName);
    const [age, setAge ] = useState(userInfo.age);
    const [password, setPassword ] = useState(userInfo.password);
    const [email, setEmail ] = useState(userInfo.email);

    const changeProfile = async (name, lastName, age, password, email) => {
        
        try {
            const response = await axios.put(`${API_URL}/user/${userInfo._id}?token=${userInfo.token}`, {
                name,
                lastName,
                age,
                email,
                password
            });
            // setUserInfo(response.data);
            // AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
            console.log(response.status)
        } catch (e) {
            console.log(e);
        }
        
    }

    return (
        <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
            <View style={styles.container}>
                <Header Title='PROFILE'/>
                <View style={styles.pfpImagesContainer}>
                    <View style={styles.coverImageContainer}>
                        <Image style={styles.coverImage} source={require('../../assets/images/pfpcover.jpg')} />
                    </View>
                    <View style={styles.profileImage}>
                        <Image style={styles.pfpImage} source={require('../../assets/images/pfp.png')} />
                    </View>
                </View>
                <View style={styles.inputContainerSmall}>
                    <View style={styles.inputLeft}>
                        <Text style={styles.inputTitleSmall}>Name</Text>
                            <TextInput 
                                style={styles.inputSmall} 
                                placeholder="Name" 
                                value= {name}
                                onChangeText={text => setName(text)}
                            />
                        <Text style={styles.inputTitleSmall}>Age</Text>
                            <TextInput 
                                style={styles.inputSmall} 
                                placeholder="Age"
                                value= {age}
                                onChangeText={text => setAge(text)}
                            />
                    </View>
                    <View style={styles.inputRight}>
                        <Text style={styles.inputTitleSmall}> Last Name</Text>
                            <TextInput 
                                style={styles.inputSmall} 
                                placeholder="Last Name"
                                value= {lastName}
                                onChangeText={text => setLastName(text)}
                            />
                        <Text style={styles.inputTitleSmall}>Username</Text>
                            <TextInput 
                                style={styles.inputSmall} 
                                placeholder="Username" 
                            />
                    </View>
                </View>
                <View style={styles.inputContainerLarge}>
                    <Text style={styles.inputTitleLarge}>Email</Text>
                        <TextInput 
                            style={styles.inputLarge} 
                            placeholder="Email" 
                            value= {email}
                            onChangeText={text => setEmail(text)}
                        />
                    <Text style={styles.inputTitleLarge}>Password</Text>
                        <TextInput 
                            style={styles.inputLarge} 
                            secureTextEntry={true}
                            value= {password}
                            onChangeText={text => setPassword(text)}
                        />
                    <View style={styles.addressContainer}>
                        <Text style={styles.inputTitleLarge}>Address</Text>
                        <View style={styles.buttonAddressContainer}>
                            <View style={styles.buttonAddressWhite}>
                                <View style={styles.addressButtomImgContainer}>
                                    <Image resizeMode="contain" style={styles.buttonAddressIcon} source={require('../../assets/icons/location-black.png')} />
                                </View>
                                <View style={styles.buttonAddressTextContainer}>
                                    <Text style={styles.buttonAddressText}>Residential Address</Text>
                                </View>
                            </View>
                            <LinearGradient
                                colors={['#F77019', '#FAD25C']}
                                style={ styles.buttonAddressBG}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 0, y: 0 }}
                            >
                                <TouchableOpacity style={styles.buttonAddressOrange} onPress={()=> navigation.navigate('ProfileAddress')}>
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
                        <TouchableOpacity 
                            style={styles.changeButton} 
                            onPress={()=>changeProfile(name, lastName, age, password, email)}
                        >
                            <Text style={styles.changeButtonText}>Change</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
//-------------------------Contenedor Principal----------------------------------------//
    container: {
        height: '100%',
        backgroundColor: '#FFF7ED',
    },
//-------------------------Contenedor Imagenes-------------------------------------------------//
    pfpImagesContainer: {
        height: 265,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    coverImageContainer: {
        width: 361,
        height: 193,
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
        marginBottom: 20,
    },
    inputLeft: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: '7%',
    },
    inputRight: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: '2%',
    },
    inputTitleSmall: {
        fontFamily: 'coco-goose',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
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
        marginBottom: 20,
        elevation: 4,
    },
    inputContainerLarge: {
        height: 201,
        paddingLeft: '7%',
    },
    inputTitleLarge: {
        fontFamily: 'coco-goose',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'left',
    },
    inputLarge: {
        fontFamily: 'monda',
        backgroundColor: '#FFF',
        width: 340,
        height: 40,
        borderRadius: 10,
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
        width: '70%',
    },
    buttonAddressIcon: {
        width: 23,
        height: 27,
    },
    buttonAddressText: {
        marginLeft: -25,
        fontFamily: 'coco-goose',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
    },
//-------------------------Contenedor Footer-------------------------------------------------//
    changeButtonContainer: {
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
        fontFamily: 'coco-goose',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
    },
});