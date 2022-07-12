import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../components/Text'
import Button from '../../components/Button/Button'
import { useAuth } from '../../context'

const SignIn = () => {

  const { loginApi } = useAuth()

  const handlePress = () => {
    loginApi()
  }

  return (
    <View>
      <Text>SignIn</Text>
      <Button gradient={true} onPress={handlePress} />
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})