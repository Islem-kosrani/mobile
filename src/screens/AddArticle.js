import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View , Text,SafeAreaView} from 'react-native'
import { } from 'react-native-paper'
import { Icon } from 'react-native-elements';
import CustumInput from '../components/CustumInput';



export default function AddArticle({ navigation }) {
  
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
              }}>Ajout d'un article</Text>
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

          <CustumInput editable={true} placeholder={"Poids"} title={'Poids(Kg)'}
         inputType={'numeric'}
          
          />


         
          <CustumInput  editable={true} inputType={'numeric'} placeholder={"Longueur"} title={'Longueur'}
          
          
          />

          <CustumInput  editable={true} inputType={'numeric'} placeholder={"Largeur"} title={'Largeur'}/>

          <CustumInput  editable={true} inputType={'numeric'} placeholder={"Hauteur"} title={'Hauteur'}/>

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
