import React from "react";
import { View, StyleSheet, Modal, Image, TouchableOpacity } from "react-native";
import { closeButtonIcon } from "../../assets/images";
import { themeColor } from "../../style/Theme";
import { hp, wp } from "../../utils";

const CustomModal = ({
    isOpen,
    onClose,
    width = wp(354),
    height = hp(790),
    children
}) => {
    return (
        <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={[styles.modalInnerContainer, { width, height }]}>
                    <TouchableOpacity onPress={onClose}>
                        <Image source={closeButtonIcon} style={styles.closeIconStyles} />
                    </TouchableOpacity>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalInnerContainer: {
        backgroundColor: themeColor.sectionBackground,
        borderRadius: wp(15),
    },
    closeIconStyles: {
        position: 'absolute',
        zIndex: 88,
        top: hp(-10),
        right: wp(-10),
        width: wp(25),
        height: wp(25)
    }
});

export default CustomModal;
