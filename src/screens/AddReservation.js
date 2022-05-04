import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View , Text,SafeAreaView} from 'react-native'
import { } from 'react-native-paper'
import { Icon } from 'react-native-elements';
import CustumInput from '../components/CustumInput';



export default function AddReservation({ navigation }) {
  
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
              }}>Réservation</Text>
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
          <CustumInput editable={true} placeholder={"Nom"} title={'Nom'}/>
          <CustumInput editable={true} placeholder={"Prénom"} title={'Prénom'}/>
          <CustumInput  editable={true} placeholder={"Adresse"} title={'Adresse'}/>
          <CustumInput  inputType={'numeric'} editable={true} placeholder={"Téléphone"} title={'Téléphone'}/>
          <CustumInput inputType={'email-address'} editable={true} placeholder={"Email"} title={'Email'}/>
          <TouchableOpacity onPress={() => {
              navigation.goBack()
          }} style={{
            backgroundColor:'#623262',
            padding:10,
            borderRadius:5,
            marginHorizontal:10,
            width:'95%'

          }}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
              textAlign:'center',
            }}>Terminer</Text>
          </TouchableOpacity>
          </View>
     
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})
