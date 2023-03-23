import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import SafeAreaAndroid from '../components/SafeViewAndroid';
import BackBotton from '../components/Buttons/BackButton';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';

export default function ProfileScreen(props) {

    const {navigation}=props;

    const handlePress = () => {
        console.log('Button pressed');
    }
    
    return (
        <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
            <View style={styles.container}>
            <Header Title='PROFILE'/>
                <View style={styles.pfpContainer}>
                    <View style={styles.coverImageContainer}>
                        <Image resizeMode="contain" style={styles.coverImage} source={require('../../assets/images/cover.png')} />
                    </View>
                    <View style={styles.profileImage}>
                        <Image resizeMode="contain" style={styles.pfpImage} source={require('../../assets/images/pfp.png')} />
                    </View>
                </View>
                <View style={styles.buttonsProfileContainer}>
                    <View style={styles.buttonsProfileFirstRow}>
                        <TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('ProfileDetails')}>
                            <Text style={styles.userButtonText}>Profile Details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('Orders')}>
                            <Text style={styles.userButtonText}>Orders</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsProfileSecondRow}>
                        <TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('WishList')}>
                            <Text style={styles.userButtonText}>Wishlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('Payment')}>
                            <Text style={styles.userButtonText}>Payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.orderDetailsContainer}>
                    <LinearGradient 
                        colors={['#FFFFFF', '#FFF7ED']}
                        style={ styles.orderDetailsBG}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <View style={styles.orderDetailsTitleContainer}>
                            <View style={styles.orderDetailsTitleContainerRight}>
                                <Text style={styles.orderDetailsTextRight}>My orders</Text>
                            </View>
                            <View style={styles.orderDetailsTitleLeft}>
                                <TouchableOpacity style={styles.orderDetailsButton} onPress={() => navigation.navigate('Orders')}>
                                    <Text style={styles.orderDetailsTextLeft}>See All</Text>
                                </TouchableOpacity>
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
                        <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('AuthNavigation')}>
                            <Text style={styles.signOutText}>Sign Out</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
//--------------------------CONTAINER--------------------------//
    container: {
        height: '100%',
        backgroundColor: '#FFF7ED',
    },
//--------------------------HEADER--------------------------//
    header: {
        // flex: 0.3,
        height: 80,
        flexDirection: 'row',                                             
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtonContainer: {
        flex: 0.5,
        alignItems: 'center',
    },
    backButton: {
    },
    titleContainer: {
        flex: 1.5,
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: 'coco-goose',
        fontSize: 48,
    },
    spaceToCenterContainer: {
        flex: 0.7,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
    },
//--------------------------PROFILE PICTURES--------------------------//
    pfpContainer: {
        flex: 1.2,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '2%',
    },
    coverImageContainer: {
        width: '90%',
        height: '75%',
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
        left: '10%',
        top: '45%',
        borderRadius: 50,
        
    },
    pfpImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
//-------------------------------BUTTONS-------------------------------//
    buttonsProfileContainer: {
        flex: 0.6,
        flexDirection: 'row',
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
    userButton: {
        width: '85%',
        height: '33%',
        borderRadius: 10,
        elevation: 6,
        marginBottom: '15%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userButtonText: {
        fontSize: 16,
        fontFamily: 'coco-goose',
        fontStyle: 'normal',
        lineHeight: 19,
        color: 'black',
    },
//------------------------------ORDERS---------------------------------//
    orderDetailsContainer: {
        flex: 1,
        alignItems: 'center',
    },
    orderDetailsBG: {
        width: '84%',
        height: '90%',
        borderRadius: 10,
        elevation: 6,
    },
    orderDetailsTitleContainer: {
        flex: 0.2,
        flexDirection: 'row',
        paddingLeft: '7.3%',
        paddingRight: '7.3%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    orderDetailsTitleContainerRight: {
        paddingTop: '2%',
    },
    orderDetailsTextRight: {
        fontFamily: 'coco-goose',
        fontSize: 20,
        color: '#000000',
    },
    orderDetailsButton: {
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FF9700',
    },
    orderDetailsTextLeft: {
        fontFamily: 'inter',
        fontStyle: 'normal',
        fontSize: 16,
        color: '#FF9700',
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
//------------------Sign Out Conteiner------------------//
    signOutContainer: {
        flex: 0.2,
        alignItems: 'center',
        marginBottom: '2%',
    },
    signOutBG: {
        width: '30%',
        height: '80%',
        borderRadius: 10,
        elevation: 6,
    },
    signOutButton: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signOutText: {
        fontFamily: 'coco-goose',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: 'black',
    },
});