import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header> Bienvenue sur Chrono Liv!</Header>
      <Paragraph>
    
       Transport de Colis,Dis Oui.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Connexion
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
       S'inscrire
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('SurveillerScreen')}
      >
       Surveiller
      </Button>
  
    </Background>
  )
}

