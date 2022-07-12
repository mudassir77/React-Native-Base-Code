import React from "react";
import { Text as RNText, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { FontFamily, themeColor } from "../../style/Theme";
import { wp } from "../../utils/styleUtils";

const Text = props => {
    const {
        regular,
        bold,
        boldItalic,
        extraBold,
        extraLight,
        extraLightItalic,
        italic,
        light,
        lightItalic,
        semiBoldItalic,
        semiBold,
        centered,
        right,
        inverse,
        underlined,
        textProps,
        color,
        size,
        weight,
        leftSpacing,
        rightSpacing,
        topSpacing,
        bottomSpacing,
        children,
        style = {}
    } = props;
    return (
        <RNText
            style={[
                styles.default,
                regular && { fontFamily: FontFamily.Regular },
                bold && { fontFamily: FontFamily.Bold },
                boldItalic && { fontFamily: FontFamily.BoldItalic },
                extraBold && { fontFamily: FontFamily.ExtraBold },
                extraLight && { fontFamily: FontFamily.ExtraLight },
                extraLightItalic && { fontFamily: FontFamily.ExtraLightItalic },
                italic && { fontFamily: FontFamily.Italic },
                light && { fontFamily: FontFamily.Light },
                lightItalic && { fontFamily: FontFamily.LightItalic },
                semiBold && { fontFamily: FontFamily.SemiBold },
                semiBoldItalic && { fontFamily: FontFamily.SemiBoldItalic },
                centered && styles.centered,
                right && styles.right,
                inverse && styles.inverse,
                underlined && styles.underlined,
                color && { color },
                size && { fontSize: wp(size) },
                weight && { fontWeight: weight },
                leftSpacing && { marginLeft: wp(leftSpacing) },
                rightSpacing && { marginRight: wp(rightSpacing) },
                topSpacing && { marginTop: wp(topSpacing) },
                bottomSpacing && { marginBottom: wp(bottomSpacing) },
                style
            ]}
            {...textProps}>
            {children}
        </RNText>
    );
};

Text.propTypes = {
    regular: PropTypes.bool,
    bold: PropTypes.bool,
    boldItalic: PropTypes.bool,
    extraBold: PropTypes.bool,
    extraLight: PropTypes.bool,
    extraLightItalic: PropTypes.bool,
    italic: PropTypes.bool,
    light: PropTypes.bool,
    lightItalic: PropTypes.bool,
    semiBoldItalic: PropTypes.bool,
    semiBold: PropTypes.bool,
    centered: PropTypes.bool,
    right: PropTypes.bool,
    inverse: PropTypes.bool,
    underlined: PropTypes.bool,
    textProps: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.number,
    weight: PropTypes.number,
    style: PropTypes.object,
    leftSpacing: PropTypes.number,
    rightSpacing: PropTypes.number,
    topSpacing: PropTypes.number,
    bottomSpacing: PropTypes.number
};

const styles = StyleSheet.create({
    default: {
        fontFamily: FontFamily.Regular,
        fontSize: wp(16),
        color: themeColor.textPrimaryColor
    },
    centered: {
        textAlign: "center"
    },
    right: {
        textAlign: "right"
    },
    inverse: {
        color: "#ffffff"
    },
    underlined: {
        textDecorationLine: "underline"
    }
});

export default Text;
