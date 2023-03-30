import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CategoriesScreen() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [creationSuccess, setCreationSuccess] = useState(false)
    const [creationError, setCreationError] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const [modalColor, setModalColor] = useState('#12E100');
    const [error, setError] = useState('');

    const createCategory = () => {
        axios.post('https://cum-tech-api.vercel.app/category', { name, description })
        .then(response => {
            setCreationSuccess(true);
            setModalText('Categoria creada con exito');
            console.log(response.data);
        }).catch(error => {
            setCreationError(true);
            setModalText('Error al crear la categoria');
            console.log(error);
            setError(`${error.response.status}: ${error.response.data.message}`);
        })
    }

    useEffect(() => {
        if (creationSuccess) {
            setModalVisible(true);
            setTimeout(() => {
                setModalVisible(false);
                setCreationSuccess(false);
                setModalColor('#12E100');
            }, 2000);
        }
        if (creationError) {
            setModalVisible(true);
            setModalColor('#FF0000');
            setTimeout(() => {
                setModalVisible(false);
                setCreationError(false);
                setModalColor('#12E100');
            } , 2000);
        }
    }, [creationSuccess, creationError]);

    return (
        <View style={styles.container}>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={[styles.modal, { backgroundColor: modalColor }]}>
                        <Text style={styles.modalText}>
                        {creationSuccess
                            ? 'Categoria creada con exito'
                            : creationError
                            ? 'Fallo al crear la categoria'
                            : ''}
                        </Text>
                    </View>
                </Modal>
            <View style={styles.categoriesTitleContainer}>
            <Text style={styles.Title}>Crear Categorias</Text>
            </View>
            <View style={styles.categoriesInputContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameTitle}>Nombre</Text>
                <TextInput
                style={styles.nameInput}
                onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Descripcion</Text>
                <TextInput
                style={styles.descriptionInput}
                onChangeText={(text) => setDescription(text)}
                />
            </View>
            </View>
            <View style={styles.categoriesButtonContainer}>
            <TouchableOpacity style={styles.button} onPress={createCategory}>
                <Text style={styles.buttonText}>Crear</Text>
            </TouchableOpacity>
            </View>
            {creationError && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECD3FF',
    },
    categoriesTitleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
    },
    categoriesInputContainer: {
        flex: 2,
    },
    nameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    nameInput: {
        width: 300,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    descriptionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    descriptionInput: {
        width: 300,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    categoriesButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#9D61FE',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    modalContainer: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: 300,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    errorContainer: {
        flex: 1,
        marginTop: 10,
    },
    errorText: {
        color: '#FF0000',
        fontWeight: 'bold',
        fontSize: 20,
    },
});