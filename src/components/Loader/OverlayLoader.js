import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const OverlayLoader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={"#fff"} />
        </View>
    );
};

export default OverlayLoader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.4)",
        top: 0,
        left: 0,
        zIndex: 1
    }
});
