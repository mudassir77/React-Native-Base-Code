import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { themeColor } from '../../style/Theme'
import { Text } from '../../components/Text'
import { hp, wp } from '../../utils'
import { Icon } from '../../components/Icon'
import { markerIcon } from '../../assets/images'
import Loader from '../../components/Loader/Loader'
import { LOCATION_STATUS } from '../../hooks/useLocation'



const CurrentLocationCard = ({
    handleCurrentLocation = () => { },
    loading,
    locationAddress,
    locationStatus
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSubContainer}>

                {
                    loading ?
                        <View style={{ alignItems: 'flex-start' }}>
                            <Loader />
                        </View>
                        :
                        <>
                            {
                                locationStatus === LOCATION_STATUS.GRANTED ?
                                    <Text bold color={themeColor.whiteColor} size={14}>{locationAddress}</Text>
                                    :
                                    <Text bold color={themeColor.whiteColor} size={14}>Not Available</Text>

                            }
                        </>
                }

                <TouchableOpacity style={styles.currentLocationContainer} onPress={handleCurrentLocation}>
                    <Text regular color={themeColor.buttonPrimary} size={10}>Current Location</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.rightSubContainer}>
                <Icon source={markerIcon} width={wp(35)} height={wp(35)} />
            </View>
        </View>
    )
}

export default CurrentLocationCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColor.sectionBackground,
        flexDirection: 'row',
        paddingHorizontal: wp(15),
        paddingVertical: hp(20),
        borderRadius: wp(8)
    },
    leftSubContainer: {
        flex: 5,
    },
    rightSubContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    currentLocationContainer: {
        marginTop: hp(4)
    }
})