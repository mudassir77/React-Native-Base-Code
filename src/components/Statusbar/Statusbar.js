import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { themeColor } from "../../style/Theme";

const Statusbar = ({ backgroundColor = themeColor.primaryColor, barStyle = "light-content" }) => (
    <SafeAreaView style={{ backgroundColor: backgroundColor, padding: 0, margin: 0, height: StatusBar.currentHeight }}>
        <StatusBar translucent={true} backgroundColor={backgroundColor} barStyle={barStyle} />
    </SafeAreaView>
);

export default Statusbar;
