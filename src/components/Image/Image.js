import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const CustomImage = props => {
    const { style, ...rest } = props;
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Image
                // onLoadStart={() => setIsLoading(true)}
                // onLoadEnd={() => setIsLoading(false)}
                style={[style, isLoading && { display: "none" }]}
                {...rest}
            />
            {isLoading && (
                <SkeletonPlaceholder>
                    <View style={{ width: "100%", height: "100%", borderRadius: style?.borderRadius || 0 }}></View>
                </SkeletonPlaceholder>
            )}
        </>
    );
};

const styles = StyleSheet.create({});

export default React.memo(CustomImage);
