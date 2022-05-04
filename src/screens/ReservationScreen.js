import React from 'react'
import { Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';


export default function ReservationScreen({ navigation }) {
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
          flexDirection:'row',
          justifyContent:'space-between',
          marginVertical:10,
          marginHorizontal:10,

        }}>
          <Text style={{
            fontWeight:'bold',
            fontSize:20,
            color:'#555557'
          }}>Sélectionnez ou ajoutez {"\n"}un destinataire</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('AddReservation')
          }}>
          <Icon 
          name={'person-add'} 
          type={'ionicons'}
          color={'#555557'}
          size={30}
          
          />
          </TouchableOpacity>
          
        </View>
        <View style={{
          marginHorizontal:10,
        }}>
          <Text style={{
            color:'blue',
            fontSize:14,

          }}>Test Test</Text>
          <View style={{
            flexDirection:'row',
            marginTop:5,

          }}>
          <Icon 
          name={'telephone'} 
          type={'foundation'}
          color={'#555557'}
          size={25}
          
          />
            <Text style={{
              textAlignVertical:'center',
              paddingStart:10,

            }}>+21655555555</Text>
          </View>
          <View style={{
            flexDirection:'row',
            marginTop:5,

          }}>
          <Icon 
          name={'email'} 
          type={'fontisto'}
          color={'#000000'}
          size={25}
          
          />
            <Text style={{
              textAlignVertical:'center',
              paddingStart:10,
              
            }}>test@gmail.com</Text>
          </View>
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginVertical:10,
          marginHorizontal:10,

        }}>
          <Text style={{
            fontWeight:'bold',
            fontSize:20,
            color:'#000000'
          }}>Ajouter vos articles</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('AddArticle')
          }}>
          <Icon 
          name={'plus'} 
          type={'ant-design'}
          color={'#000000'}
          size={30}
          
          />
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity onPress={() => {
              navigation.navigate("FinishReservation")
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
    </SafeAreaView>
  )
}

