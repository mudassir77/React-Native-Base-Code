import React from 'react'
import { StyleSheet, View } from 'react-native'


import { themeColor } from '../../style/Theme'
import { UserAvatar } from '../../components/UserAvatar'
import { sevenElevenIcon, viewLocationMarkerIcon } from '../../assets/images'
import { hp, wp } from '../../utils'
import { Text } from '../../components/Text'
import { Icon } from "../../components/Icon";


const markerIconSize = wp(30)

const LocationListItem = ({
    locationName = "Location",
    icon = sevenElevenIcon,
    streetAddress = "streetAddress",
    city = "city"
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.avatarContainer}>
                    <UserAvatar source={icon} size={80} />
                </View>
            </View>
            <View style={styles.middleContainer}>
                <Text bold size={16} color={themeColor.whiteColor}>{locationName}</Text>
                <View >
                    <Text regular size={10} color={themeColor.textSecondaryColor}>{streetAddress}</Text>
                    <Text regular size={10} color={themeColor.textSecondaryColor}>{city}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Icon source={viewLocationMarkerIcon} width={markerIconSize} height={markerIconSize} />
            </View>
        </View>
    )
}

export default React.memo(LocationListItem)

const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColor.sectionBackground,
        flexDirection: 'row',
        padding: wp(15),
        marginBottom: hp(10),
        borderRadius: wp(15)
    },
    leftContainer: {
        flex: 1.8,
    },
    middleContainer: {
        flex: 4,
        justifyContent: 'space-evenly'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'center'
    },
    avatarContainer: {
        width: wp(80),
        height: wp(80),
        marginRight: wp(7)
    }
})