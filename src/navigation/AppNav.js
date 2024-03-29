import { View, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './NavigationTab';
import AuthNavigation from  './AuthNavigation'
import { AuthContext } from '../Contexts/AuthContext';

export default function AppNav() {
    const {isLoading, userToken} = useContext(AuthContext);

    if(isLoading) {
        return (
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size={'large'} />
            </View>
        )
        
    }

    return (
        <NavigationContainer>
            {userToken !== null ? <NavigationTab /> : <AuthNavigation/> }
        </NavigationContainer>
    )
}