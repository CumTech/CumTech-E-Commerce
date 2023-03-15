import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import SafeAreaAndroid from '../components/SafeViewAndroid';
import BackBotton from '../components/BackButton/BackButton';
import UserBotton from '../components/UserButton/UserButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen(props) {
    const { navigation } = props;
    const goToTest = () => {
        navigation.navigate("Test");
    }
    return (
        <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.buttonBackContainer}>
                    <BackBotton style={styles.buttonBack}/>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Hello!</Text>
                </View>
            </View>
            <View style={styles.pfpImagesContainer}>
                <View style={styles.coverImage}></View>
                <View style={styles.profileImage}></View>
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
                style={ styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                >
                    <View style={styles.container1}>
                        <Text>Hola</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.singOutContainer}>
                <Text style={styles.singOutText}>Sing Out</Text>
            </View>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gradient: {
        // flex: undefined,
        width: '80%',
        height: 187,
        borderRadius: 10,
        elevation: 4,
    },
    container1: {
        
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF7ED',
    },
    header: {
        flex: 0.5,
    },
    buttonBackContainer: {
        position: 'absolute',
        top: 14,
        left: 22,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: 48,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    pfpImagesContainer: {
        flex: 1.6,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    coverImage: {
        width: '90%',
        // height: 147,
        height: '63%',
        justifyContent: 'center',
        top: '3%',
        backgroundColor: '#FAFA',
        borderRadius: 15,
    },
    profileImage: {
        position: 'absolute',
        width: 150,
        height: 150,
        left: '8%',
        top: '35%',
        borderRadius: 100,
        backgroundColor: '#000000',
    },
    buttonsProfileContainer: {
        flex: 0.88,
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
//-----------------------------------------------------------------------//
    orderDetailsContainer: {
        flex: 1.5,
        position: 'relative',
        width: '100%',
        height: 216,
        // backgroundColor: '#FaFa34',
        justifyContent: 'center',
        alignItems: 'center',
    },
    singOutContainer: {
        flex: .25,
        width: '100%',
        height: '5%',
        backgroundColor: '#2F20E2',
    },
});