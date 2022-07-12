import React, { memo, useMemo } from 'react'
import { StyleSheet, View } from "react-native"
import { sevenElevenIcon } from '../../assets/images'
import CustomModal from "../../components/Modal/Modal"
import Text from '../../components/Text/Text'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { themeColor } from '../../style/Theme'
import { hp, wp } from "../../utils"


const TransactionModal = ({
    isOpen,
    onClose
}) => {

    const RenderTopView = memo(() => {
        return (
            <View style={styles.topContainer}>
                <View style={styles.avatarContainer}>
                    <UserAvatar source={sevenElevenIcon} size={70} />
                </View>
                <View style={{ justifyContent: 'space-around', marginLeft: wp(10) }}>
                    <Text bold color={themeColor.whiteColor} size={16}>7-Eleven</Text>
                    <View>
                        <Text color={themeColor.textSecondaryColor} size={12}>218 American Canyon Rd,</Text>
                        <Text color={themeColor.textSecondaryColor} size={12}>American Canyon, CA 94503, United States</Text>
                    </View>
                </View>
            </View>
        )
    })

    const RenderBottomView = memo(() => {
        return (
            <View style={styles.bottomContainer}>
                <Text centered size={20} color={themeColor.whiteColor} bold>
                    Your transaction request has been sent to location You will be notified once it is accepted
                </Text>
            </View>
        )
    })


    return (
        <CustomModal height={hp(320)} isOpen={isOpen} onClose={onClose}>
            <View style={styles.mainContainer}>
                <RenderTopView />
                <RenderBottomView />
            </View>
        </CustomModal>
    )
}



export default TransactionModal

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingVertical: hp(35),
        paddingHorizontal: wp(20),
    },
    avatarContainer: {
        width: wp(70),
        height: wp(70),
    },
    topContainer: {
        flexDirection: 'row',
    },
    bottomContainer: {
        flex: 2,
        paddingTop: hp(37),
        paddingHorizontal: wp(37)
    }
})