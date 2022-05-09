import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View , Text,SafeAreaView} from 'react-native'
import { } from 'react-native-paper'
import { Icon } from 'react-native-elements';
import CustumInput from '../components/CustumInput';
import { parseRequiredErrorType } from '../helpers';



export default function AddArticle({ navigation }) {
  const [poids,setPoids] = useState("")
    const [longeur,setLongeur] = useState("")
    const [largeur,setLargeur] = useState("")
    const [hauteur,setHateur] = useState("")

    
  return (
    <SafeAreaView style={{
        paddingTop:40,
    }}>
          <View style={{
              backgroundColor:'#623262',
              paddingVertical:10,
              justifyContent:'center',
              alignItems:'center',
          }}>
              <Text style={{
                  color:'white',
                  fontSize:15,
                 textAlignVertical:'center',
              }}>Entrer Détails colis </Text>
               <TouchableOpacity onPress={()=>{
                  navigation.goBack()
               }} style={{
                   flexDirection:'row',
                   position:'absolute',
                   left:0,
                   borderRadius:10,
                   justifyContent:'center',
                 
               }}>
                   
                   <Icon 
            name={'arrow-left'} 
            type={'Octicons'}
            color={'#FFFFFF'}
            size={50}
            
            />
           
               </TouchableOpacity>
          </View>
          <View style={{
              

          }}>

          <CustumInput value={poids} onChangeText={(text)=>{
            setPoids(text)
          }} editable={true} placeholder={"Poids"} title={'Poids(Kg)'}
         inputType={'numeric'}
          
          />


         
          <CustumInput value={longeur} onChangeText={(text)=>{
            setLongeur(text)
          }}  editable={true} inputType={'numeric'} placeholder={"Longueur"} title={'Longueur'}
          
          
          />

          <CustumInput value={largeur} onChangeText={(text)=>{
            setLargeur(text)
          }}  editable={true} inputType={'numeric'} placeholder={"Largeur"} title={'Largeur'}/>

          <CustumInput value={hauteur} onChangeText={(text)=>{
            setHateur(text)
          }}  editable={true} inputType={'numeric'} placeholder={"Hauteur"} title={'Hauteur'}/>

          <TouchableOpacity onPress={() => {
               
               if( parseRequiredErrorType(poids)
               ||parseRequiredErrorType(longeur)
               ||parseRequiredErrorType(largeur)
               ||parseRequiredErrorType(hauteur)){
                 
               }else{
                navigation.navigate("AddReservation")
               }
              
          }} style={{
            backgroundColor:
            parseRequiredErrorType(poids)
            ||parseRequiredErrorType(longeur)
            ||parseRequiredErrorType(largeur)
            ||parseRequiredErrorType(hauteur)
            ?"#E7E7E7":'#623262',
            padding:10,
            borderRadius:5,
            marginHorizontal:10,
            width:'95%'

          }}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
              textAlign:'center',
            }}>Suivant</Text>
          </TouchableOpacity>
          </View>
     
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})
