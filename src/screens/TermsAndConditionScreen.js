import React from 'react'
import {FlatList,Text, View, StyleSheet, TouchableOpacity,SafeAreaView,ScrollView ,ImageBackground,Image, Modal,} from 'react-native'
import { Icon } from 'react-native-elements';
import { theme } from '../core/theme';


export default function TermsAndConditionScreen({ navigation }) {
    const [data,setData] = React.useState([{id:1}])

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
              }}>Conditions générales d'utilisation</Text>
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
          <FlatList
        data={data}
        style={{
            paddingHorizontal:10,
            marginTop:20,
        }}
        renderItem={(item)=>{
            return    <Text style={{
                    fontSize:16,
                    paddingBottom:5
            }}>Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par Chrono Liv et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».

            Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
            
            Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte ».
            
            En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site.
            
            Chrono Liv se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.</Text>
        }}
        keyExtractor={item => item.id}
      />
  
    </SafeAreaView>
  )
}

