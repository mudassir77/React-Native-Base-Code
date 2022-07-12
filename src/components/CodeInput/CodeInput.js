import React, { useState } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import { CodeField, Cursor, useClearByFocusCell, useBlurOnFulfill } from "react-native-confirmation-code-field";
import { themeColor } from "../../style/Theme";
import { wp } from "../../utils/styleUtils";

const CELL_COUNT = 4;

const CodeInput = RootProps => {
    const { onChange = () => { }, error = false } = RootProps;
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [codeProps, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue
    });

    const handleChange = value => {
        onChange(value);
        setValue(value);
    };

    return (
        <View style={styles.container}>
            <CodeField
                ref={ref}
                value={value}
                {...codeProps}
                onChangeText={handleChange}
                rootStyle={styles.codeFieldRoot}
                cellCount={CELL_COUNT}
                keyboardType="number-pad"
                renderCell={({ index, symbol, isFocused }) => {
                    return (
                        <View key={index} style={styles.cellContainer}>
                            <Text
                                style={[styles.cell, isFocused && styles.focusCell, error && styles.error]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // borderRadius: 6
    },
    codeFieldRoot: {},
    error: {
        borderColor: "red"
    },
    cellContainer: {
        borderRadius: 50,
        backgroundColor: "#fff",
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41
            },
            android: {
                elevation: 2
            }
        })
    },
    cell: {
        width: wp(55),
        height: wp(62),
        borderWidth: 0,
        borderBottomWidth: 2,
        fontSize: wp(18),
        borderColor: "#FE0202",
        borderRadius: 5,
        color:"#FFFFFF",
        paddingLeft:20,
        paddingTop:20,
        backgroundColor: themeColor.appBackground,
    },
    focusCell: {
        borderColor: "#fff"
    }
});

export default CodeInput;
