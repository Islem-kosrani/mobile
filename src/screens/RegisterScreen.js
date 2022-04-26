import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { CheckBox } from 'react-native-elements'
import {  Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { prenomValidator } from '../helpers/prenomValidator'
import { confirmpasswordValidator } from '../helpers/confirmpasswordValidator'
export default function RegisterScreen({ navigation }) {
 function showAlert(){

  Alert.alert("Votre Compte sera Activé","Merci de Verifier Votre compte Email et cliquer sur le lien d'activation",
[ 
  {
    Text:"",onPress:() =>console.log("")}  ,

]

  )
 }
  const [homme,setHomme]=useState(false);
  const [femme,setFemme]=useState(false);
  const [gender,setGender]=useState("");
  const [name, setName] = useState({ value: '', error: '' })
  const [prenom, setPrenom] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmpassword, setConfirmPassword] = useState({ value: '', error: '' })
  const genderHomme = () =>{

    setHomme(true);
    setFemme(false);
  }
  const genderFemme = () =>{

    setHomme(false);
    setFemme(true);
  }
  const onSignUpPressed = () => {
    
    const nameError = nameValidator(name.value)
    const prenomError = prenomValidator(prenom.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const confirmpasswordError = confirmpasswordValidator(confirmpassword.value)
    if (emailError || passwordError || nameError ||prenomError ||confirmpasswordError) {
      setName({ ...name, error: nameError })
      setPrenom({ ...prenom, error: prenomError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setConfirmPassword({ ...confirmpassword, error: confirmpasswordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Créer Votre Compte</Header>
      <TextInput
        label="Nom"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Prenom"
        returnKeyType="next"
        value={prenom.value}
        onChangeText={(text) => setPrenom({ value: text, error: '' })}
        error={!!prenom.error}
        errorText={prenom.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mot De Passe"
        returnKeyType="next"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
       <TextInput
        label=" Confirmation de mot passe"
        returnKeyType="done"
        value={confirmpassword.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
        error={!!confirmpassword.error}
        errorText={confirmpassword.error}
        secureTextEntry
      />
      <Text>Etes-Vous?? </Text>
      <CheckBox 
        title="Homme"
        center
        checked={homme}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderHomme}
      />
     

     <CheckBox 
        title="Femme"
        center
        checked={femme}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderFemme}
      />

      
      <Button
        mode="contained"
        onPress={showAlert}
        style={{ marginTop: 24 }}


        
      >
        S'inscrire
      </Button>
      <View style={styles.row}>
        <Text> Avez vous deja un Compte? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Connexion</Text>
        </TouchableOpacity>
      </View>
      
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
