import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";

import { APP_ROUTES } from "../../routes/routes";
import Home from "../../views/Home/Home";
import Location from "../../views/Location/Location";
import {
    homeActiveIcon,
    transactionIcon,
    locationIcon,
    profileIcon
} from "../../assets/images";
import { FontFamily, fonts, themeColor } from "../../style/Theme";
import Transaction from "../../views/Transaction/Transaction";
import { wp } from "../../utils/styleUtils";
import Setting from "../../views/Profile/Setting";

const Tab = createBottomTabNavigator();

const RenderTabBarIcon = ({ source, color }) => {
    return (
        <View style={{ width: wp(18), height: wp(18) }}>
            <Image source={source} style={{ width: "100%", resizeMode: "contain", flex: 1, tintColor: color }} />
        </View>
    );
};

const tabRoutes = [
    {
        name: APP_ROUTES.USER.HOME,
        component: Home,
        options: {
            tabBarIcon: ({ color }) => <RenderTabBarIcon source={homeActiveIcon} color={color} />,
            title: "Home"
        }
    },
    {
        name: APP_ROUTES.USER.LOCATION,
        component: Location,
        options: {
            tabBarIcon: ({ color }) => <RenderTabBarIcon source={locationIcon} color={color} />,
            title: "Location"
        }
    },
    {
        name: APP_ROUTES.USER.TRANSACTION,
        component: Transaction,
        options: {
            tabBarIcon: ({ color }) => <RenderTabBarIcon source={transactionIcon} color={color} />,
            title: "Transaction History"
        }
    },
    {
        name: APP_ROUTES.USER.PROFILE,
        component: Setting,
        options: {
            tabBarIcon: ({ color }) => <RenderTabBarIcon source={profileIcon} color={color} />,
            title: "Profile"
        }
    }
];

export const AppTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: themeColor.sectionBackground,
                    borderTopWidth: 0,
                    borderTopLeftRadius: wp(41),
                    borderTopRightRadius: wp(40)
                },
                tabBarActiveTintColor: themeColor.buttonPrimary,
                tabBarInactiveTintColor: themeColor.textSecondaryColor,
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: wp(18),
                    color: themeColor.textPrimaryColor,
                    fontFamily: FontFamily.Regular
                },
                headerStyle: {
                    elevation: 0,
                    backgroundColor: themeColor.textSecondaryColor,
                    shadowColor: "transparent"
                },
                tabBarShowLabel: false
            }}
            sceneContainerStyle={{
                backgroundColor: themeColor.appBackground
            }}
            initialRouteName={APP_ROUTES.USER.HOME}>
            {tabRoutes.map(({ name, component, options }) => (
                <Tab.Screen key={name} name={name} component={component} options={options} />
            ))}
        </Tab.Navigator>
    );
};
