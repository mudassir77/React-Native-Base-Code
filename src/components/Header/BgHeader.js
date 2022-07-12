import React from "react";
import { View, StyleSheet, ImageBackground, Text, SafeAreaView } from "react-native";

import { hp } from "../../utils/styleUtils";

const BgHeader = props => {
    const { bgImage = require("../../assets/images/header-bg.png"), containerStyles = {} } = props;

    return (
        <View style={styles.headerBgContainer}>
            <ImageBackground style={styles.image} source={bgImage} resizeMode="cover">
                <SafeAreaView style={[styles.safeArea, containerStyles]}>{props.children}</SafeAreaView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBgContainer: {
        width: "100%",
        height: hp(128)
    },
    image: {
        flex: 1
    },
    safeArea: {
        flex: 1
    }
});

export default BgHeader;
