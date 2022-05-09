import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View , Text,SafeAreaView} from 'react-native'
import { } from 'react-native-paper'
import { Icon } from 'react-native-elements';
import CustumInput from '../components/CustumInput';
import { parseRequiredErrorType } from '../helpers';



export default function AddReservation({ navigation }) {
  const [nom,setNom] = useState("")
  const [prenom,setPrenom] = useState("")
  const [adresse,setAdresse] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")

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
              }}>Entrer Détails destinataire</Text>
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
          <CustumInput value={nom} onChangeText={(text)=>{
            setNom(text)
          }} editable={true} placeholder={"Nom"} title={'Nom'}/>
          <CustumInput value={prenom} onChangeText={(text)=>{
            setPrenom(text)
          }} editable={true} placeholder={"Prénom"} title={'Prénom'}/>
          <CustumInput value={adresse} onChangeText={(text)=>{
            setAdresse(text)
          }}  editable={true} placeholder={"Adresse"} title={'Adresse'}/>
          <CustumInput value={phone} onChangeText={(text)=>{
            setPhone(text)
          }}  inputType={'numeric'} editable={true} placeholder={"Téléphone"} title={'Téléphone'}/>
          <CustumInput value={email} onChangeText={(text)=>{
            setEmail(text)
          }} inputType={'email-address'} editable={true} placeholder={"Email"} title={'Email'}/>
          <TouchableOpacity onPress={() => {
                if( parseRequiredErrorType(nom)
                ||parseRequiredErrorType(prenom)
                ||parseRequiredErrorType(adresse)
                ||parseRequiredErrorType(phone)
                ||parseRequiredErrorType(email)
                ){
                  
                }else{
                  navigation.navigate("FinishReservation")
                }
               
          }} style={{
            backgroundColor:
            parseRequiredErrorType(nom)
            ||parseRequiredErrorType(prenom)
            ||parseRequiredErrorType(adresse)
            ||parseRequiredErrorType(phone)
            ||parseRequiredErrorType(email)
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
