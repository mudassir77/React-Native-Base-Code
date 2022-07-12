import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import bs from "../../style/BasicStyle";
import { FontFamily, fonts, themeColor } from "../../style/Theme";
import { wp } from "../../utils/styleUtils";
import LinearGradient from 'react-native-linear-gradient'
import { Loader } from "../Loader";

const Button = props => {
    const {
        isLoading = false,
        text = "Submit",
        onPress = () => { },
        primary = true,
        disabled = false,
        style = null,
        bgColor = themeColor.buttonPrimary,
        textStyle = null,
        loaderColor = "white",
        loaderSize = "small",
        icon,
        gradient = true,
        gradientColors = [themeColor.buttonPrimary, themeColor.buttonLinearGradient],
        ...rest
    } = props;

    const RenderButtonContent = () => {
        return (
            <>
                {isLoading ? (
                    <Loader size={loaderSize} color={loaderColor} />
                ) : (
                    <View style={[bs.flexDirectionRow, bs.alignItemsCenter]}>
                        {icon && icon}
                        <Text style={[styles.text, textStyle]}>{text}</Text>
                    </View>
                )}
            </>
        )
    }

    return (
        <>
            {
                gradient ?
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onPress}
                        disabled={isLoading || disabled}
                        {...rest}
                    >
                        <LinearGradient style={[styles.container, style]} colors={gradientColors}>
                            <RenderButtonContent />

                        </LinearGradient>
                    </TouchableOpacity> :


                    <TouchableOpacity
                        style={[styles.container, style, { backgroundColor: bgColor }]}
                        activeOpacity={0.8}
                        onPress={onPress}
                        disabled={isLoading || disabled}
                        {...rest}
                    >
                        <RenderButtonContent />
                    </TouchableOpacity>
            }
        </>
    );
};



const styles = StyleSheet.create({
    container: {
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    secondary: {
        borderWidth: 1.4
    },
    text: {
        color: "#fff",
        fontFamily: FontFamily.Bold,
        fontSize: wp(16)
    }
});

export default Button;
