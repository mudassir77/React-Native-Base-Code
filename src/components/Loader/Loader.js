import React from "react";
import { ActivityIndicator } from "react-native";

const Loader = props => {
    const { size = 15, color = "#fff", ...rest } = props;

    return <ActivityIndicator size={size} color={color} {...rest} />;
};

export default Loader;
