import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { Alert} from 'react-native'

export default function ResetPasswordScreen({ navigation }) {



  function showAlert(){

    Alert.alert("Un nouveau mot passe sera envoye à votre email!","Merci de Verifier Votre compte ",
  [ 
    {
      Text:"",onPress:() =>console.log("")}  ,
  
  ]
  
    )
   }
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Réinitialiser le mot de passe</Header>
      <TextInput
        label="Votre email"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="vous recevrez un e-mail avec un
        lien de réinitialisation."
      />
      <Button
        mode="contained"
        onPress={showAlert}
        style={{ marginTop: 16 }}
      >
        Envoyer
      </Button>
    </Background>
  )
}
