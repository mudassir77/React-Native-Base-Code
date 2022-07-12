import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { themeColor } from "../../style/Theme";
import { wp, hp } from "../../utils";
import Button from "../Button/Button";

const SuccessScreen = ({ imgSrc, title = "", subTitle = "", btnText = "", onPressBtn, loading = false, }) => {

    return (
        <View style={styles.container}>

            <View style={styles.content}>

                <View style={styles.contentStatusView}>
                    <Image source={imgSrc} style={styles.imageStyle} resizeMode="contain" />
                    <Text style={styles.headingStyle}>{title}</Text>
                    <Text style={styles.subTextStyle}>{subTitle}</Text>
                </View>
                <View style={styles.btnStyle}>
                    <Button gradient={true} text={btnText} onPress={onPressBtn} />
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColor.appBackground,
    },
    headingStyle: {
        fontSize: wp(24),
        color: "#FFFFFF",
        marginTop: wp(26),
        letterSpacing: 0.5,
        fontWeight: "bold"
    },
    subTextStyle: {
        fontSize: wp(14),
        color: "#BCBCBC",
        textAlign: "center",
        letterSpacing: 0.77,
        marginTop: wp(7)
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: wp(40)
    },
    contentStatusView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imageStyle: {
        height: hp(201),
        width: wp(201),
    },
    btnStyle: {
        width: "100%",
        paddingHorizontal: wp(40)
    }

})


export default SuccessScreen;