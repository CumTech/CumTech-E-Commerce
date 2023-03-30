import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import LogInSignInModal from './../Modals/LogInSignIn/LogInSignIn';


export default function ProductOrder() {
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['#FFFFFF', '#FFF7ED']}
                // colors={['#FFAA', 'orange']}
                style={ styles.orderDetailsBG}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
            >
                <View style={styles.upContainer}>
                    <View style={styles.imageContainer}>
                        <Image resizeMode='contain' style={styles.image} source={require('../../../assets/images/pou.webp')} />
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.textDetails}>Yesterday</Text>
                        </View>
                        <View style={styles.itemsContainer}>
                            <Text style={styles.textItemsDetails}> 6 Items</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.downContainer}>
                    <View style={styles.detailButtonContainer}>
                    <TouchableOpacity style={styles.orderDetailsButton}>
                        <Text style={styles.orderDetailsTextLeft}>Details</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '100%',
        marginBottom: '5%',
    },
    orderDetailsBG: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        elevation: 12,
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    upContainer: {
        height: '80%',
        width: '100%',
        flexDirection: 'row',
    },
    downContainer: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    imageContainer: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    detailsContainer: {
        height: '100%',
        width: '50%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    dateContainer: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemsContainer: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDetails: {
        fontSize: 20,
        fontFamily: 'coco-goose',
    },
    textItemsDetails: {
        fontSize: 20,
        fontFamily: 'monda',
    },
    detailButtonContainer: {

    },
    orderDetailsButton: {

    },
    orderDetailsTextLeft: {
        fontFamily: 'inter',
        fontSize: 16,
        color: '#FF9700',
    },

})