import React from "react";
import { View, Text } from "react-native";

import { themeColor } from "../../style/Theme";
import { Icon } from "../Icon";

const NoDataPlaceholder = props => {
    const { icon, text, width = 85, height = 85, containerStyles = {} } = props;
    return (
        <View style={{ justifyContent: "center", alignItems: "center", ...containerStyles }}>
            {icon && <Icon width={width} height={height} color={themeColor.primaryColor} source={icon} />}
            <Text style={{ color: themeColor.primaryPurple, marginTop: 10 }}>{text}</Text>
        </View>
    );
};

export default NoDataPlaceholder;
