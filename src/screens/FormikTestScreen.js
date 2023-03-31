import React from 'react'
import Header from '../components/Header';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function FormikTestScreen() {

    const SignupSchema = yup.object().shape({
        name: yup.string()
            .min(4, 'Too Short!')
            .max(50, 'Too Long!'),
        email: yup.string()
            .email('Invalid email')
            .required('Please enter your email address'),
        password: yup.string()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .required('Password is required')
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        phone: yup.string()
            .min(10, 'Phone number is too short - should be 10 chars minimum.')
            .max(10, 'Phone number is too long - should be 10 chars maximum.')
            .required('Phone number is required'),
    });

    return (
        // <SafeAreaView>
        //     <View>
        // <Header Title='ORDERS'/>
        // </View>
        // </SafeAreaView>
        <Formik initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
        }}
            validationSchema={SignupSchema}
            onSubmit={values => Alert.alert(JSON.stringify(values))}
        >
            {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
            <View style={styles.wrapper}>
                <StatusBar barStyle="light-content" />
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Sign Up</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Full Name"
                            value={values.name}
                            onChangeText={handleChange('name')}
                            onBlur={() => setFieldTouched('name')}
                        />
                        {errors.name && touched.name && (
                            <Text style={styles.errorTxt}>{errors.name}</Text>
                        )}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Email Address"
                            autoCapitalize='none'
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                        />
                        {errors.email && (
                            <Text style={styles.errorTxt}>{errors.email}</Text>
                        )}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Password"
                            autoCapitalize='none'
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
                        />
                        {errors.password && (
                            <Text style={styles.errorTxt}>{errors.password}</Text>
                        )}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Confirm Password"
                            value={values.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={() => setFieldTouched('confirmPassword')}
                        />
                        {errors.confirmPassword && (
                            <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
                        )}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Phone Number"
                            keyboardType='numeric'
                            value={values.phone}
                            onChangeText={handleChange('phone')}
                            onBlur={() => setFieldTouched('phone')}
                        />
                        {errors.phone && (
                            <Text style={styles.errorTxt}>{errors.phone}</Text>
                        )}
                    </View>
                    <TouchableOpacity 
                    onPress={() => {handleSubmit}}
                    disabled={!isValid}
                    style={[styles.submitBtn, { backgroundColor: isValid ? '#395B64' : '#A5C9CA' }]}
                    >
                        <Text style={styles.submitBtnTxt}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C3333',
        paddingHorizontal: 15,
    },
    formContainer: {
        backgroundColor: '#f5eddc',
        padding: 20,
        borderRadius: 20,
        width: '100%',
    },
    title: {
        color: '#16213E',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 15,
    },
    inputWrapper: {
        marginBottom: 15,
    },
    inputStyle: {
        borderColor: '#16213E',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    errorTxt: {
        fontSize: 12,
        color: '#FF0D10',
    },
    submitBtn: {
        // backgroundColor: '#395B64',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
    },
    submitBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
})