import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { APP_ROUTES } from "../../routes/routes";
import SignIn from "../../views/SignIn/SignIn";
import { FontFamily, fonts, themeColor } from '../../style/Theme'
import { wp } from '../../utils/styleUtils';
const Stack = createNativeStackNavigator();

// ROUTES DEFINITION AND COMPONENT
const authRoutes = [
    {
        name: APP_ROUTES.AUTH.LOGIN,
        component: SignIn,
        options: { headerShown: false }
    },
]

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                contentStyle: {
                    backgroundColor: themeColor.appBackground
                },
                headerTitleStyle: { fontFamily: FontFamily.Bold, fontSize: wp(24), includeFontPadding: false, color: 'white' },
                headerStyle: { backgroundColor: themeColor.appBackground },
                headerBackImageSource: require('../../assets/images/backArrowIcon.png')
            }}

        >
            {
                authRoutes.map(({ name, component, options = {} }) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={component}
                        options={options}
                    />
                ))
            }
        </Stack.Navigator>
    );
};

export default AuthStack