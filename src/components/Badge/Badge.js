import React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "../../components/Text";
import { themeColor } from "../../style/Theme";
import { wp } from "../../utils";

const Badge = props => {
    const { text, bgColor = "#0AAF1A" } = props;
    return (
        <View style={[styles.badgeContainer, { backgroundColor: bgColor }]}>
            <Text size={11} regular color={themeColor.textPrimaryColor}>
                {text}
            </Text>
        </View>
    );
};

export default Badge;

const styles = StyleSheet.create({
    badgeContainer: {
        paddingHorizontal: wp(10),
        paddingVertical: wp(4),
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0AAF1A"
    }
});
