import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themeColor } from '../../style/Theme'
import { hp, wp } from '../../utils/styleUtils'

const SectionContainer = ({ flexRatio = 2.2, children, image }) => {
    return (
        <View style={{ ...styles.sectionContainer, flex: flexRatio }}>
            <View style={styles.sectionImageContainer}>
                <Image source={image} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
            </View>
            {children}
        </View>
    )
}

export default SectionContainer

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: themeColor.sectionBackground,
        borderTopLeftRadius: wp(35),
        borderTopRightRadius: wp(35),
        justifyContent:"center"
    },
    sectionImageContainer: {
        width: wp(125),
        height: wp(125),
        backgroundColor: 'white',
        borderRadius: wp(70),
        position: 'absolute',
        top: hp(-75),
        alignSelf: 'center',
        overflow: 'hidden',
    },
})