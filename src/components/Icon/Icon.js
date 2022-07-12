import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Icon = props => {
    const { width, height, source, color, containerStyles = {}, imageStyles = {}, resizeContain = true } = props;
    return (
        <View style={{ width, height, ...containerStyles }}>
            <Image
                source={source}
                style={[styles.imageStyle, { tintColor: color, ...imageStyles }, resizeContain && styles.resizeContain]}
            />
        </View>
    );
};

export default Icon;

const styles = StyleSheet.create({
    imageStyle: {
        width: "100%",
        resizeMode: "contain",
        flex: 1
    },
    resizeContain: {
        resizeMode: "contain"
    }
});
