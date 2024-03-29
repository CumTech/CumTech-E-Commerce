const styles = {
    container:{
        height: 250,
        width: '50%',
        borderColor: '#FFF7ED',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    ProductContainer:{
        flex: 1,
        width: '95%',
    },
    imageProductContainer:{
        backgroundColor: 'white',
        flex: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    image:{
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    informationContainer:{
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 6,
    },
    topProductContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    priceContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceTextDollars:{
        fontSize: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    priceTextNumber:{
        fontFamily: 'monda',
        fontSize: 16,
        color: 'black',
    },
    buttonsContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttonHeartContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCartContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleProductContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleProductTextContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleProductText:{
        fontFamily: 'monda',
        fontSize: 16,
        color: 'black',
    },
}

export default styles;