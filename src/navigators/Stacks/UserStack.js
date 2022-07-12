import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { APP_ROUTES } from "../../routes/routes";
import { AppTabs } from "../Tabs/BottomTabs";
import { FontFamily, themeColor } from "../../style/Theme";
import { wp } from "../../utils";
const Stack = createNativeStackNavigator();

const appRoutes = [
    {
        name: APP_ROUTES.USER.BOTTOM_TABS,
        component: AppTabs,
        options: { headerShown: false }
    },
    // {
    //     name: APP_ROUTES.USER.NOTIFICATION,
    //     component: Notification,
    //     options: { headerShown: true, title: "Notifications", animation: "fade_from_bottom" }
    // }
];

const UserStack = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    contentStyle: {
                        backgroundColor: themeColor.appBackground
                    },
                    headerBackVisible: true,
                    headerTitleStyle: {
                        fontFamily: FontFamily.Regular,
                        fontSize: wp(18),
                        includeFontPadding: false,
                        color: "white"
                    },
                    headerTintColor: themeColor.whiteColor,
                    headerStyle: { backgroundColor: themeColor.appBackground },
                    headerShadowVisible: false
                }}>
                {appRoutes.map(({ name, component, options, title }) => (
                    <Stack.Screen key={name} options={options} name={name} component={component} title={title} />
                ))}
            </Stack.Navigator>
        </>
    );
};

export default UserStack;
