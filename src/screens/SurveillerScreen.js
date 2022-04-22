import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, } from 'react-native'
import { CheckBox } from 'react-native-elements'
import {  Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function SurveillerScreen({ navigation }) {
 
 
  const [code, setCode] = useState({ value: '', error: '' })
 
  
  const onSignUpPressed = () => {
    
   
  
    navigation.reset({
      index: 0,
      routes: [{ code: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Surveiller Votre Colis..</Header>
      <TextInput
        label="Code"
        returnKeyType="next"
        value={code.value}
        onChangeText={(text) => setCode({ value: text, error: '' })}
        error={!!code.error}
        errorText={code.error}
      />
     
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
     Commencer
      </Button>
      
      
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 3,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
