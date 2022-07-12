import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../components/Text'

const Home = () => {
    return (
        <View>
            <Text size={50} extraBold centered topSpacing={40} bottomSpacing={14}>
                $38,798.54
            </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})