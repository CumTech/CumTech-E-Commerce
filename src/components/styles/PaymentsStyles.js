const styles = {
    //Estilos para agregar las targetas
    tarjetasAgregar:{
        width: '90%',
        height: 200,
        margin: '5%',
        borderRadius: 25,
        borderColor: "black",
        borderWidth: 3,
        opacity: 0.4,
      },
      //fin de los estilos
      //Estilos le las tarjetas agregadas
      tarjetas:{
        width: '90%',
        height: 200,
        backgroundColor: 'red',
        margin: '5%',
        borderRadius: 12,
      },
      tarjetasI:{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        borderRadius: 12,
      },
      //Fin de los estilos
      contenedorscroll: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 50, // Para que la ScrollView tenga un espacio inferior para hacer scroll
        backgroundColor: '#FFF7ED',
      },
      //Estilos de la pagina principal (PaymentsScreen)
      Head: {
        height: 100,
        backgroundColor: '#FFF7ED',
        flexDirection: 'row',
        justifyContent : 'center',
        alignContent: 'center',
        alignItems: 'center',
        },
      Flecha:{
        width: 40,
        height: 40,
        backgroundColor: '#DD00E0',
        justifyContent : 'center',
        alignContent: 'center',
        alignItems: 'center',
        },
      Logotipo:{
        margin: 5,
        width: 221,
        height: 80,
        backgroundColor: '#FFF7ED',
        justifyContent : 'center',
        alignContent: 'center',
        alignItems: 'center',
        },
      Carrito:{
        borderRadius: 150,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        justifyContent : 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginRight:-10,
        },
      contadorcarrito:{
        width: 20,
        height: 20,
        marginTop:-30,
        backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
      
        },
        //Fin de los estilos
};

export default styles;