import React, { useMemo, useState, memo } from "react"
import { TextInput, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { eyeSlashIcon, homeActiveIcon, lighteningActiveIcon } from "../../assets/images"
import { FontFamily, themeColor } from "../../style/Theme"
import { hp, wp } from "../../utils/styleUtils"

const CustomTextInput = ({
    attrName,
    title = "",
    placeholder="",
    leftIcon,
    value,
    readOnly,
    error,
    handleChange,
    handleBlur,
    showEye,
    keyboardType,
    autoCapitalize,
    rightIcon = null,
    borderRadius = 5,
    backgroundColor = themeColor.appBackground,
    touched
}) => {
    const [isSecure, setIsSecure] = useState(true)
    const handleOnTextChange = (text) => {
        if (handleChange) {
            handleChange(text)
        }
    }

    const RenderImage = memo(({ image }) => {
        return (
            <Image source={image} style={styles.iconImageStyles} />
        )
    })


    const RenderLeftIcon = useMemo(() => {
        return (
            <View style={styles.iconContainer}>
                {
                    leftIcon ?
                        <RenderImage image={leftIcon} />
                        : <></>
                }
            </View>
        )
    }, [leftIcon])


    const handleOnPressEye = () => {
        setIsSecure(prev => !prev)
    }

    const RenderRightIcon = useMemo(() => {
        return (
            <View style={styles.iconContainer} >
                {
                    showEye ?
                        <TouchableOpacity onPress={handleOnPressEye}>
                            <RenderImage image={isSecure ? eyeSlashIcon : eyeSlashIcon} />
                        </TouchableOpacity>
                        :
                        rightIcon ?
                            <RenderImage image={rightIcon} />
                            : <></>
                }
            </View>
        )
    }, [rightIcon, isSecure])

    const RenderTitle = useMemo(() => {
        return (
            <>
                {
                    title ? <Text style={styles.titleStyles}>{title}</Text> : <></>
                }
            </>
        )
    }, [title])

    const RenderError = useMemo(() => {
        return (
            <>
                {
                    error && touched ?
                        <Text style={styles.errorStyles}>{error}</Text>
                        : <></>
                }
            </>
        )
    }, [error, touched])

    return (
        <View style={{ paddingVertical: hp(7) }}>
            {RenderTitle}
            <View style={{ ...styles.container, borderColor: touched && error ? themeColor.error : '#343434', borderRadius: wp(borderRadius), backgroundColor: backgroundColor }}>
                {RenderLeftIcon}
                <View style={{ flex: 6, justifyContent: 'center' }}>
                    <TextInput
                        name={attrName}
                        placeholder={placeholder||title}
                        fontSize={wp(14)}
                        placeholderTextColor={themeColor.textSecondaryColorWithOpacity}
                        value={value.toString()}
                        style={styles.textStyle}
                        editable={readOnly ? false : true}
                        onChangeText={handleOnTextChange}
                        secureTextEntry={showEye && isSecure ? true : false}
                        keyboardType={keyboardType}
                        autoCapitalize={autoCapitalize}
                        onBlur={handleBlur}
                        fontFamily={FontFamily.Regular}
                        keyboardType={keyboardType}
                    />
                </View>
                {RenderRightIcon}
            </View>
            {RenderError}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: wp(20),
        justifyContent: 'center',
        height: wp(50),
        flexDirection: 'row',
        borderWidth: StyleSheet.hairlineWidth,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textStyle: {
        color: themeColor.textSecondaryColor,
        width: '100%',
    },
    iconStyle: {
        marginRight: wp(10)
    },
    titleStyles: {
        color: themeColor.textPrimaryColor,
        fontFamily: FontFamily.Medium,
        fontSize: wp(16),
        marginBottom: hp(7)
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImageStyles: {
        width: wp(20),
        height: wp(20),
        resizeMode: 'contain'
    },
    errorStyles: {
        color: themeColor.error,
        fontFamily: FontFamily.Regular,
        fontSize: wp(12)
    }
})
export default CustomTextInput;