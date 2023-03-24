const styles = {
    container:{
        height: 150,
        flexDirection: 'row',
        marginBottom: '4%',
    },
    imageProductContainer:{
        backgroundColor: 'white',
        flex: 0.8,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 6,
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    informationContainer:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleProductContainer:{
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
    },
    titleProductTextContainer:{
        width: '90%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 6,
    },
    titleProductText:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceContainer:{
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    priceTextContainer:{
        width: '90%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 6,
    },
    priceTextDollars:{
        fontSize: 13,
        fontWeight: 'bold',
    },
    priceTextNumber:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    amountContainer:{
        flex: 1,
        width: '100%',
    },
    ButtonsContainer:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: '10%',
    },
    ButtonMinusContainer:{
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: '15%',
    },
    ButtonAddContainer:{
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
}

export default styles;