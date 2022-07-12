import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainLoader from '../components/Loader/MainLoader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthStack, UserStack } from '../navigators/Stacks';
import { useAuth } from '../context';

const MyTheme = {
    dark: true,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

const Router = () => {

    const { authData } = useAuth()

    // if (loading) return <MainLoader />;


    return (
        <SafeAreaProvider>
            <NavigationContainer theme={MyTheme}>
                {authData.authorize ? <UserStack /> : <AuthStack />}
            </NavigationContainer>
        </SafeAreaProvider>
    )
}


export default Router