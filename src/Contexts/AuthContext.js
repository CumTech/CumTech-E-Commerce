import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import { API_URL } from '../Config';
import { Alert } from 'react-native';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading ] = useState(false);
    const [userToken, setUserToken] =useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = async (email, password) =>{
        setIsLoading(true);
        await axios.post(`${API_URL}/login`, {
            email,
            password
        })
        .then(res => {
            console.log(res.data.token);
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token)
            AsyncStorage.setItem('userToken', userInfo.token);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            
        }).catch(e => {
            console.log(e);
        })
        setIsLoading(false);
    }
    const logout = () =>{
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo){
                setUserToken(userToken);
                setUserInfo(userInfo);
            }

            setIsLoading(false);

        }catch(e){
            console.log(`is Logged error: ${e}`);
        }
    }

    // const register = async (name, email, password) =>{
    //     setIsLoading(true);
    //     console.log(email)
    //     console.log(password)
    //     await axios.post(`${API_URL}/register`, {
    //         email,
    //         password,
    //         name
    //     })
    //     .then(() => {
    //         login(email, password);
    //     }).catch(e => {
    //         console.log(e);
    //     })
    //     setIsLoading(false);
    // }

    const register = async (name, email, password) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${API_URL}/register`, {
                name,
                email,
                password
            });
            const { token } = response.data;
            setUserToken(token);
            AsyncStorage.setItem('userToken', token);
            setUserInfo(response.data);
            AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
            login(email, password);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }

    useEffect (()=>{
        isLoggedIn();
    },[]);

    



    return (

        <AuthContext.Provider value={{login, logout, isLoading, userToken, register, userInfo}}>
            {children}            
        </AuthContext.Provider>

    )
}
