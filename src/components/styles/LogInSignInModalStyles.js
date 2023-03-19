const styles = {
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      width:'80%',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    Title:{
      marginBottom:10,
    },
    modalContent:{
      flexDirection:'row',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontFamily: 'coco-goose',
    },
  }

  export default styles;