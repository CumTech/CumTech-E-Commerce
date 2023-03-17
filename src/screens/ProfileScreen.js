import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button, Image } from 'react-native'
import SafeAreaAndroid from '../components/SafeViewAndroid';
import BackBotton from '../components/BackButton/BackButton';
import UserBotton from '../components/UserButton/UserButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen(props) {
    const navigation = useNavigation();
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
                <View style={styles.buttonsProfileContainer}>
                    <View style={styles.buttonsProfileFirstRow}>
                        <UserBotton style={styles.userButton1} />
                        <UserBotton style={styles.userButton2} />
                    </View>
                    <View style={styles.buttonsProfileSecondRow}>
                        <UserBotton style={styles.userButton1} />
                        <UserBotton style={styles.userButton2} />
                    </View>
                </View>
                <View style={styles.orderDetailsContainer}>
                    <LinearGradient 
                        colors={['#FFFFFF', '#FFF7ED']}
                        style={ styles.orderDetailsBG}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <View style={styles.orderDetailsTitle}>
                            <View style={styles.orderDetailsTitleRight}>
                                <Text style={styles.orderDetailsTextRight}>My orders</Text>
                            </View>
                            <View style={styles.orderDetailsTitleLeft}>
                                <Text style={styles.orderDetailsTextLeft}>See All</Text>
                            </View>
                        </View>
                        <View style={styles.orderDetailsHistory}>
                            <View style={styles.orderDetailsLeft}>
                                <View style={styles.orderDetailsImagenContainer}>
                                    <Image resizeMode="contain" style={styles.orderDetailsImage} source={require('../../assets/images/aguacate.png')} />
                                </View>
                            </View>
                            <View style={styles.orderDetailsRight}>
                                <View style={styles.orderDetailsImagenContainer}>
                                    <Image resizeMode="contain" style={styles.orderDetailsImage} source={require('../../assets/images/aguacate.png')} />
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.signOutContainer}>
                    <LinearGradient
                        colors={['#F77019', '#FAD25C']}
                        style={ styles.signOutBG}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.signOutText}>Sign Out</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#FFF7ED',
    },
    header: {
        // flex: 0.44,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
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
    pfpImagesContainer: {
        height: 280,
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
        backgroundColor: '#000000',
    },
    pfpImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    buttonsProfileContainer: {
        // flex: 0.87,
        height: 135,
        flexDirection: 'row',
        // backgroundColor: '#54E26A',
    },
    buttonsProfileFirstRow: {
        flex: 1,
        marginLeft: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    buttonsProfileSecondRow : {
        flex: 1,
        marginRight: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    orderDetailsContainer: {
        height: 211,
        // flex: 1,
        alignItems: 'center',
    },
    orderDetailsBG: {
        width: '84%',
        height: 211,
        borderRadius: 10,
        elevation: 4,
    },
    orderDetailsTitle: {
        flex: 0.2,
        flexDirection: 'row',
        paddingLeft: '7.3%',
        paddingRight: '7.3%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    orderDetailsTextRight: {
        // fontFamily: 'Cocogoose',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 27,
        color: '#000000',
        alignItems: 'flex-start',
    },
    orderDetailsTextLeft: {
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16,
        color: '#FF9700',
        alignItems: 'flex-end',
    },
    orderDetailsHistory: {
        flex: 1,
        flexDirection: 'row',
    },
    orderDetailsLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderDetailsRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderDetailsImagenContainer: {
        width: '80%',
        height: '70%',
        borderRadius: 15,
    },
    orderDetailsImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    signOutContainer: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signOutBG: {
        width: 100,
        height: 33,
        borderRadius: 10,
        elevation: 4,
    },
    signOutButton: {
        width: 100,
        height: 33,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signOutText: {
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: 'black',
    },
});