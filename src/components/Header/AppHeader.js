import React from "react";
import { View, StyleSheet, ImageBackground, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { hp, wp } from "../../utils/styleUtils";
import { Icon } from "../Icon";
import { fonts } from "../../style/Theme";

const AppHeader = props => {
    const { title, containerStyles = {}, titleStyles = {}, rightItem = null } = props;
    const navigation = useNavigation();

    return (
        <View style={styles.appHeaderContainer}>
            <SafeAreaView style={[styles.safeArea, containerStyles]}>
                <View style={styles.headerContentContainer}>
                    <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
                        <Icon color="#FFFFFF" source={require("../../assets/images/backArrowIcon.png")} width={15} height={15} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={[styles.headerTitle, rightItem && { marginRight: 0 }, titleStyles]}>
                        {title}
                    </Text>
                    {!rightItem ? <View></View> : rightItem}
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    appHeaderContainer: {
        width: "100%",
        height: hp(30)
    },
    safeArea: {
        flex: 1,
        justifyContent: "center"
    },
    headerContentContainer: {
        paddingHorizontal: wp(30),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerTitle: {
        color: "#000000",
        fontFamily: fonts.fontRegular,
        fontSize: wp(22),
        marginRight: wp(22)
    },
    backIconContainer: {
        width: wp(35),
        height: wp(10),
        justifyContent: "center",
        alignItems: "center"
    }
});

export default AppHeader;
