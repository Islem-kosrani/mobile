import React  from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import BottomNavigator from '../components/BottomNavigator';
import { SafeAreaView ,StyleSheet} from 'react-native'
export default function Dashboard ({ navigation }) {
 


return (
    
    <Background>
       <BackButton goBack={navigation.goBack} />
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
      <BottomNavigator></BottomNavigator>  
        </Background>
  )
}
const styles = StyleSheet.create({
  container:{flex:1,width:'100%',height:'100%',justifyContent:'flex-end'}

  
})
