import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert, ImageBackground, ScrollView} from 'react-native'
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
import { Icon } from 'react-native-elements';
import Animated from 'react-native-reanimated';


export default function RegisterScreen({ navigation }) {
 function showAlert(){

  Alert.alert("Votre Compte sera Activé","Merci de Verifier Votre compte Email et cliquer sur le lien d'activation",
[ 
  {
    Text:"",onPress:() =>console.log("")}  ,

]

  )
 }
 bs = React.createRef();
 fall = new Animated.Value(1);
 const [accept,setAccept]=useState(false);
  const [homme,setHomme]=useState(false);
  const [femme,setFemme]=useState(false);
  const [gender,setGender]=useState("");
  
  const [cin, setCin] = useState({ value: '', error: '' })
  const [name, setName] = useState({ value: '', error: '' })
  const [prenom, setPrenom] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmpassword, setConfirmPassword] = useState({ value: '', error: '' })
    renderInner = () => (

    <View style={styles.panel}>
         <View style={{alignItems:'center'}}>
       
             <Text style={styles.panelTitle}>telecharger photo</Text>
             <Text style={styles.panelSubtitle}>choisir votre photo      </Text>
        
         </View>


         <TouchableOpacity style={styles.panelButton}>
             <Text style={styles.panelButtonTitle}>Prendre une photo</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.panelButton}>
             <Text style={styles.panelButtonTitle}>Telecharger photo</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.panelButton} onPress={()=>bs.current.snapTo(1)}>
             <Text style={styles.panelButtonTitle}>Annuler</Text>
         </TouchableOpacity>


</View>
  );
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
    if (emailError || passwordError || nameError ||prenomError ||confirmpasswordError ) {
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
    <ScrollView style={{
      backgroundColor: theme.colors.surface,
    }}>

   
 
      <BackButton goBack={navigation.goBack} />
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Logo />
      <Header>Créer Votre Compte</Header>
        </View>
    <View style={{
      paddingHorizontal:20
    }}>
 <TextInput
        label="CIN"
        returnKeyType="next"
        value={cin.value}
        style={{
          paddingHorizontal:20
        }}
        onChangeText={(text) => setCin({ value: text, error: '' })}
        error={!!cin.error}
        keyboardType="numeric"
        errorText={cin.error}
      />
   
      <TextInput
        label="Nom"
        returnKeyType="next"
        value={name.value}
        style={{
          paddingHorizontal:20
        }}
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
        label="Confirmation de mot passe"
        returnKeyType="done"
        value={confirmpassword.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
        error={!!confirmpassword.error}
        errorText={confirmpassword.error}
        secureTextEntry
      />
      <Text>Etes-Vous?? </Text>
      </View>
      <View style={{
        paddingHorizontal:10
      }}>
      <CheckBox 
        title="Homme"
        checked={homme}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderHomme}
      />
     

     <CheckBox 
        title="Femme"
        checked={femme}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderFemme}
      />
      </View>
     
      <View style={{
        flexDirection:'row',
        alignSelf:'flex-start',
        paddingHorizontal:20
        
      }}>
        <TouchableOpacity onPress={()=>{
         setAccept(!accept)
        }} style={{
          width:30,
          height:30,
          borderRadius:30/2,
          borderWidth:2,
          justifyContent:'center'

        }}>
      {accept==true?  <Icon 
          name={'check'} 
          type={'ant-design'}
          color={'#000000'}
          size={10}
          
          />:<View/>}
        </TouchableOpacity>
        <Text style={{
          textAlignVertical:'center',
          marginStart:10,
        }}>Accepter les <Text onPress={()=>{
         navigation.navigate('TermsAndConditionScreen')
        }} style={{
          textDecorationLine:'underline'
        }}>conditions générales</Text></Text>
      </View>
        <View style={{
          paddingHorizontal:20,
          justifyContent:'center',
          alignItems:'center'
        }}>
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
      
        </View>
      
     
    
    </ScrollView>
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
