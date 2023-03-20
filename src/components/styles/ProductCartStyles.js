const styles = {
    container:{
        height: 150,
        flexDirection: 'row',
        marginBottom: '4%',
    },
    imageProductContainer:{
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
        fontFamily: 'coco-goose',
        fontSize: 16,
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
        fontFamily: 'monda',
        fontSize: 13,
    },
    priceTextNumber:{
        fontFamily: 'monda',
        fontSize: 16,
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
    },
    amountButtonMinusContainer:{
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '4%',
        marginRight: '4%',
    },
    amountTextContainer:{
        flex: 1,
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 6,
    },
    amountText:{
        fontFamily: 'monda',
        fontSize: 16,
    },
    amountButtonAddContainer:{
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
}

export default styles;